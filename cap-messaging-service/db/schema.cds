namespace cap.messaging.api;

entity Messages {
  key ID : UUID;
  content : String;
  subject:String;
  templateID: Integer64;
  attachment: Binary;
  document_no: String;
  emails: many String;
  channel: String;
  isSignRequired: Boolean;
  placeholders: many String;
  //recipients: Association to many Recipient on recipients.message=$self; 
}

entity Recipient {
  key ID: UUID;
  message: Association to Messages;
  channel: String; // WhatsApp, SMS, Email, etc.
  contact: String;
  email: String;
  status: String; // Sent, Failed, Pending, etc.
}