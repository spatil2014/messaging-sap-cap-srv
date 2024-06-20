using cap.messaging.api as messaging from '../db/schema';

service MessagingService @(path: '/communication') {

@odata.draft.enabled
entity messages as projection on messaging.Messages;
entity recipient as projection on messaging.Recipient;

  /**
   * Send a message via WhatsApp.
   * @param {String} recipient - The recipient's phone number.
   * @param {String} message - The message content.
   * @param {String} attachment - The message attachment.
   * @returns {Boolean} - Indicates whether the message was sent successfully.
   */
   
  action sendWhatsAppMessage(recipient: String, message: String, attachment: String) returns Boolean;

  /**
   * Send a message via SMS.
   * @param {String} recipient - The recipient's phone number.
   * @param {String} message - The message content.
   * @returns {Boolean} - Indicates whether the message was sent successfully.
   */

  action sendSMS(recipient: String, message: String) returns Boolean;

  /**
   * Send a message via Email.
   * @param {String} recipient - The recipient's email address.
   * @param {String} sub - The email subject.
   * @param {String} sub - The email body.
  * @param {String} attachment - The message attachment.
   * @returns {Boolean} - Indicates whether the email was sent successfully.
   */

  //  type body {
  //   to : array of {
  //     emailid: String(200);
  //   };
  //   cc : {
  //     emailid: String(200);
  //   };
  //   subject: LargeString;
  //   body : LargeString;
  //   document_no: String(50);
  //  }
  action messagingAction(emails: array of String, subject: String, content: String, document_no: String, attachment: String, channel: String, isSignRequired: Boolean, placeholders: array of String) returns Boolean;
  
  // action sendEmail(body: body) returns Boolean;
  

}

