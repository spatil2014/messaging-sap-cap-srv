sap.ui.define([
    "sap/m/MessageToast"
], function(MessageToast) {
    'use strict';

    return {
        SendEmail: function(oEvent) {
            this._oModel = this.getModel();
            let oSelectedRow = this.getSelectedContexts();
            let email, subject, content, document_no='', channel="E";
            oSelectedRow.forEach(element => {
                let obj = element.getObject();
                email = obj.Email;
                subject = obj.EMAILSUBJECT;
                content = obj.EMAILBODY;
            });
            MessageToast.show("Custom handler invoked.");

            fetch("/communication/messagingAction", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    // Request payload
                    emails: email,
                    subject: subject,
                    content: content,
                    document_no: document_no,
                    channel: channel
                })
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error("Failed to perform action");
                }
                // Handle success
                sap.m.MessageToast.show("success");
                return response.json();
            })
            .then(data => {
                sap.m.MessageToast.show("success");
            })
            .catch(error => {
                sap.m.MessageToast.show("error");
            });
        }
    };
});
