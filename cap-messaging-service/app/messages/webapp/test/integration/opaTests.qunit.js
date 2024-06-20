sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'messages/test/integration/FirstJourney',
		'messages/test/integration/pages/messagesList',
		'messages/test/integration/pages/messagesObjectPage',
		'messages/test/integration/pages/recipientObjectPage'
    ],
    function(JourneyRunner, opaJourney, messagesList, messagesObjectPage, recipientObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('messages') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onThemessagesList: messagesList,
					onThemessagesObjectPage: messagesObjectPage,
					onTherecipientObjectPage: recipientObjectPage
                }
            },
            opaJourney.run
        );
    }
);