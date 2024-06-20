// test/send-message.js

const axios = require('axios');

async function sendEmail() {
  try {
  let emails = ['9742461956', '9845783133'];
    //[{ emailid: 'shankar.patil@mnemosysservices.com' },
   // { emailid: 'dummy@mail.com' }];
    
    let subject= 'test KA24000002';
    let content = 'test 3434';
    let document_no = 'KA24000002' // Add document number if needed
    let attachment = 'api-document.pdf';
    let channel = 'SMS';
    let placeholders = ['test1', 'test2', 'test 3', 'test4','test5', 'test6', 'test7', 'test8', 'test9', 'test10', 'test11', 'test12','test13', 'test14', 'test15']
    
    let isSignRequired = true;
    const response = await axios.post('http://localhost:4004/communication/messagingAction', {
    emails,
    subject,
    content,
    document_no,
    channel,
    isSignRequired,
    placeholders
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    console.log('Response:', response.data);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

sendEmail();
