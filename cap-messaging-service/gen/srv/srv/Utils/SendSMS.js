const axios = require('axios');
const cds = require('@sap/cds');
const configs = require("./FetchConfigs");

function replacePlaceholders(template, values) {
  let i = 0;
  return template.replace(/{#var#}/g, () => values[i++] || '');
}
async function sendSMS(contactNos ) {
  const template = "{#var#}{#var#} bill no.{#var#}{#var#}{#var#} MT{#var#}{#var#} MT,{#var#}{#var#} MT, {#var#} {#var#} MT, {#var#}{#var#} MT,={#var#} MT {#var#} P.I.Truck- GALLANTT";
 let msg = replacePlaceholders(template, contactNos.placeholders);
 let configData = await configs.fetchAllEntries('Configuration');
 //configs.fetchEntryById('Configuration','SMS', 'GALL');
 let templateDetails = await configs.fetchAllEntries('Templates');
 //configs.fetchEntryById('Templates','Invoice Billing');

  let payload = {
    userid: "gallantt",
    password: "Gall@2020",
    senderid: "GMLGDM",
    msgType: "text",
    dltTemplateId: "1107171291502855094",//"34545454541107171291502855094",
    duplicatecheck: "true",
    sendMethod: "quick",
    sms: [
      {
        mobile: contactNos.recipients,
        msg: msg
      }
    ]
  };

  try {
    const response = await axios.post('https://smsinteract.in/SMSApi/send', payload, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    console.log('SMS sent successfully:', response.data);
  } catch (error) {
    console.error('Error sending SMS:', error);
  }
}

module.exports = { sendSMS };
