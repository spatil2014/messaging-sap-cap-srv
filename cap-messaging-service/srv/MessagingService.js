const nodemailer = require('nodemailer');
const axios = require('axios');
const qs = require('qs');
const fs = require('fs');
const sendEmail = require("./Utils/SendEmail");
const sendSMS = require("./Utils/SendSMS");
const express = require('express');
require('dotenv').config();
const xsenv = require('@sap/xsenv');
const cds = require('@sap/cds');


module.exports = async function (req) {
  const { Recipients } = this.entities;
  // if(req.body) {
  //   var to_address = req.data.body.to && req.body.to.length ? req.data.body.to.map(x=> x.emailid).join(","):"";
  //   var document_no = req.data.body.document_no;
  //   var subject = req.data.body.subject;
  //   this.on("sendEmail", sendEmail);
  // }
  

  console.log("recepiets");

  var SMSData = {
    username  : "SPSILG",
    password  : "spsilg",
    from      : "SPSILG",
    pe_id     : "1701159948727832895",
    template_id: "1707170297327298684",
    to        : ["9742461956", "9742107750","9448155241", "9717014222"],
    text      : "Item Catg. - {send sms} Heat No.-{NA} Caster - {NA} with Phos Phos - {NA} Carbon - {NA} Manganese - {BNA} Sulphur - {SDF} Chromium - {TEST} Copper - {TEST} Nickle - {TEST} Moly - {TEST} Time -{TEST} SPSILG"
  }
  this.on('sendSMS', async (req) => {
    const { recipient, message } = req.data;
    const { data } = req;
    try {
      const response = await axios.post('https://49.50.67.32/smsapi/jsonapi.jsp', SMSData);
      return response.data; // Return response from the SMS gateway
    } catch (error) {
      console.error('Error sending SMS:', error);
      throw new Error('Failed to send SMS');
    }
  });

  // Event : ON
  this.on('messagingAction', async (req) => {
    const data = req.data; // Access the 'body' parameter directly from the request
  
    // Extract necessary information from the body
    const { emails, subject, content, document_no, cc, channel, isSignRequired, values } = data;
    var oDestination;
    // Simulate destination details
         oDestination = {
             destinationName: process.env.DESTINATION_NAME,
             URL: process.env.DESTINATION_URL,
             authentication: 'BasicAuthentication',
             User: process.env.User,
             Password: process.env.Password
         };
    if(channel === 'E') {
      try {
        // Get destination details
        xsenv.loadEnv();
        //var destinationService = xsenv.getServices({destination:{name:"cap-messaging-service-destination-service"}});
        //var accessToken = await getJWTToken(destinationService.destination, "/oauth/token?grant_type=client_credentials");
        //oDestination = await getDestinationInfo(destinationService.destination.uri, accessToken, "my410378_basic_auth");

        console.log("dest"+JSON.stringify(oDestination));

        // Make the API call
         // Retrieve destination information
         //const destination = cds.env.destinations.find(dest => dest.name === 'pdf-sign');
         //await cds.connect.to('my410378_basic_auth');
         //const { username, password, url: destinationURL } = destination.credentials;
        const authHeader = `Basic ${Buffer.from(`${oDestination.User}:${oDestination.Password}`).toString('base64')}`;
          const response = await axios.get(`${oDestination.URL}/sap/opu/odata/sap/API_BILLING_DOCUMENT_SRV/GetPDF?BillingDocument='${document_no}'`, {
            headers: {
                'Authorization': authHeader,
                'Content-Type': 'application/json'
            }
        });
        let filePath = document_no+".pdf";
        let binaryData;
        binaryData = Buffer.from(response.data.d.GetPDF.BillingDocumentBinary, 'base64');
        fs.writeFileSync(filePath, binaryData, 'binary');
        if(isSignRequired) {
          // Get it signed
          try {
            // Retrieve destination information
            //const destination = cds.env.destinations.find(dest => dest.name === 'pdf-sign');
            //await cds.connect.to('pdf-sign');
            //'sb-pdf-digital-sign!t11651'
            //3Sn9E8Hz7i9clmwDuqw35OSjkWQ=
            //const { clientId, clientSecret, tokenServiceUrl, url: destinationURL } = destination.credentials;

            // Obtain OAuth2 token
            //var apiaccesstoken = await getJWTToken(destinationService.destination, "/oauth/token?grant_type=client_credentials");
            ///oDestination = await getDestinationInfo(destinationService.destination.uri, apiaccesstoken, "pdf-sign");
            console.log("client API"+JSON.stringify(oDestination));
            // oDestination = JSON.stringify(oDestination);
           // console.log(JSON.stringify(oDestination).clientId+" "+JSON.stringify(oDestination).clientSecret);
            const tokenResponse = await axios.post('https://dev1-avmqthsa.authentication.jp10.hana.ondemand.com/oauth/token', qs.stringify({
              grant_type: 'client_credentials',
              client_id: 'sb-pdf-digital-sign!t11651',
              client_secret: '3Sn9E8Hz7i9clmwDuqw35OSjkWQ='
            }), {
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
              }
            });

            //var accessToken = tokenResponse.data.access_token;
            let destinationURL ='https://gallantt-ispat-limited-dev1-avmqthsa-dev-sp-pdf-digital2fe2a18f.cfapps.jp10.hana.ondemand.com';
            await axios.request({
                url: `${destinationURL}/signPDFinBinary`,
                method: 'POST',
                timeout: 0,
                "headers": {
                  "Content-Type": "application/json",
                  'Authorization': `Bearer ${tokenResponse.data.access_token}`
              },
              "data": JSON.stringify({
                  "file": response.data.d.GetPDF.BillingDocumentBinary,
                  "filename": document_no
              })
            }).then(function(oSingedData) {
              binaryData = Buffer.from(oSingedData.data, 'base64');
              fs.writeFileSync(filePath, binaryData, 'binary');
            });
    
        } catch (e) {
            throw 'Noob Error - Error while Fetching JWT Token ! '
          }
        }
        for (const email of emails) {
          sendEmail.sendEmail(email, subject, content, document_no, filePath, cc);
        }
        fs.unlinkSync(filePath);

      } catch (error) {
          console.error('Error:', error.message);
          req.error(500, 'Internal Server Error');
      }

    } else if(channel === 'SMS') {
      sendSMS.sendSMS(data);
    }
  });
  async function getJWTToken (oDestInstance, oAuthTokenUrlSuffix) {
    const sUAAUrl = oDestInstance.url + oAuthTokenUrlSuffix;
    const sUAACredentials = 'Basic ' + Buffer.from(oDestInstance.clientid + ':' + oDestInstance.clientsecret).toString('base64');
    try {
        var oAuthResp = await axios.request({
            url: sUAAUrl,
            method: 'POST',
            headers: {
                'Authorization': sUAACredentials
            }
        });
        return oAuthResp.data.access_token;

    } catch (e) {
        throw 'Noob Error - Error while Fetching JWT Token ! '
      }
  }
  async function getDestinationInfo (sDestinationUrl, sAccessToken, sDestinationName) {
    try {
        var oResponse = await axios.request({
            url: sDestinationUrl + '/destination-configuration/v1/destinations/' + sDestinationName,
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + sAccessToken
            }
        });
        return oResponse.data.destinationConfiguration;
    } catch (e) {
        throw 'Intermediate Error - Cannot fetch Destination Information with Destination Name : ' + sDestinationName
      }
  }
};
