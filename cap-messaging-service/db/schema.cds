namespace cap.messaging.api;
using { cuid, managed } from '@sap/cds/common';
entity Messages: managed {
  key ID : UUID;
  content : String;
  subject:String;
  templateID: Integer64;
  attachment: Binary;
  document_no: String;
  recipients: many String;
  channel: String;
  isSignRequired: Boolean;
  @nullable placeholders: many String;
  //recipients: Association to many Recipient on recipients.message=$self; 
}

entity Recipient {
  key ID: UUID;
  firstName: String(50);
  lastName: String(50);
  message: Association to Messages;
  channel: String; // WhatsApp, SMS, Email, etc.
  contact: String;
  email: String;
  status: String; // Sent, Failed, Pending, etc.
}

entity Configuration {
  key ID: UUID;
  apihost: String(200);
  port: Int16;
  username: String(50);
  password: String(30);
  type: String(30);
  sender: String(50);
  client: String(50);
}

entity Log : cuid, managed {
  key ID: UUID;
  sender: String(50);
  status: String(30);
  createdAt  : Timestamp @cds.on.insert : $now;
  createdBy  : String(50) @cds.on.insert : $user;
  messageContent: String(200);
  statusText: String(50);
}

entity Templates : cuid {
  key templateID: String(50);
  documentType: String(50);
  sender: String(50);
  content: String(200);
}