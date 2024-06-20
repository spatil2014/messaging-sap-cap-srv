const axios = require('axios');

function replacePlaceholders(template, values) {
  let i = 0;
  return template.replace(/{#var#}/g, () => values[i++] || '');
}
async function sendSMS(contactNos ) {
  const template = "{#var#}{#var#} bill no.{#var#}{#var#}{#var#} MT{#var#}{#var#} MT,{#var#}{#var#} MT, {#var#} {#var#} MT, {#var#}{#var#} MT,={#var#} MT {#var#} P.I.Truck- GALLANTT";
 let msg = replacePlaceholders(template, contactNos.placeholders);

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
        mobile: contactNos.emails,
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
