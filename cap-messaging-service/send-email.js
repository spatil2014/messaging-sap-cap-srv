// // test/send-message.js

const axios = require('axios');

// async function sendEmail() {
//   try {
//     const recipient = '+919845783133'; // Replace with recipient's phone number
//     const message = 'Test message'; // Replace with your message content
//     const subject ="test 234";
//     const body = "test 3434";
//     const to = ['shankar.patil@mnemosysservices.com', 'dummy@mail.com'];


//     const response = await axios.post('http://localhost:4004/communication/sendEmail', {
//       subject,
//       body,
//       to
//     });

//     console.log('Response:', response.data);
//   } catch (error) {
//     console.error('Error:', error.message);
//   }
// }

// sendEmail();
const fs = require('fs'); // Include 'fs' module to read files

async function sendEmail() {
  try {
    // Read the PDF file as binary data
    // const pdfData = fs.readFileSync('api-document.pdf');

    // const body = {
    //   to: [
    //     { emailid: 'shankar.patil@mnemosysservices.com' },
    //     { emailid: 'dummy@mail.com' }
    //   ],
    //   cc: { emailid: 'cc@example.com' }, // Add cc if needed
    //   subject: 'test 234',
    //   body: 'test 3434',
    //   document_no: '12345' // Add document number if needed
    // };
    let emails = ['bhuvenesh18@gmail.com, test@mail.com'];
    //[{ emailid: 'shankar.patil@mnemosysservices.com' },
    // { emailid: 'dummy@mail.com' }];

    let subject = 'test KA24000002';
    let content = 'test 3434';
    let document_no = 'KA24000002' // Add document number if needed
    let attachment = 'api-document.pdf';
    let channel = 'E';
    let isSignRequired = true;
    const response = await axios.post('http://localhost:4004/communication/messagingAction', {
      emails,
      subject,
      content,
      document_no,
      channel,
      isSignRequired
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

