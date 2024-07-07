// test/send-message.js

const axios = require('axios');

async function sendEmail() {
  try {
  let recipients =['9742461956','9845783133'];
  // recipients = JSON.stringify(recipients);
  //JSON.stringify([{'contact 1':'9742461956'}, {'contact 2':'9845783133'}]);
    //[{ emailid: 'shankar.patil@mnemosysservices.com' },
   // { emailid: 'dummy@mail.com' }];
    
    let subject= 'test KA24000002';
    let content = '';
    //'TULSI ENTERPRISE bill no.GILGJ-03901 16MM-550 2.670 MT, 25MM-550 8.720 MT, 10MM-550 4.690 MT, 20MM-550 8.590 MT, 12MM-550 4.700 MT, 08MM-500 9.710 MT,=39.080 MT GJ39T9756 P.I.Truck-GALLANTT';
    //'AHEAD ENGINEERS bill no.GILGJ-05093 20MM-550D 34.950 MT,=34.950 MT GJ12BW6910 P.I.Truck-GALLANTT'
    //'{#var#}{#var#} bill no.{#var#}{#var#}{#var#} MT{#var#}{#var#} MT,{#var#}{#var#} MT, {#var#} {#var#} MT, {#var#}{#var#} MT,={#var#} MT {#var#} P.I.Truck- GALLANTT';
    let document_no = 'KA24000002' // Add document number if needed
    let attachment = 'api-document.pdf';
    let channel = 'SMS';
    let placeholders = ['test1', 'test2', 'test 3', 'test4','test5', 'test6', 'test7', 'test8', 'test9', 'test10', 'test11', 'test12','test13', 'test14', 'test15']
    const jsonObject = {
      "placeholders": [
        { "key1": "test1" },
        { "key2": "test2" },
        { "key3": "test 3" },
        { "key4": "test4" },
        { "key5": "test5" },
        { "key6": "test6" },
        { "key7": "test7" },
        { "key8": "test8" },
        { "key9": "test9" },
        { "key10": "test10" },
        { "key11": "test11" },
        { "key12": "test12" },
        { "key13": "test13" },
        { "key14": "test14" },
        { "key15": "test15" }
      ]
    };
    // placeholders = JSON.stringify(jsonObject);
    let isSignRequired = true;
    const response = await axios.post('http://localhost:4004/communication/messagingAction', {
      recipients,
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
