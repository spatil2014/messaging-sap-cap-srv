sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'contactsmaintenance/test/integration/FirstJourney',
		'contactsmaintenance/test/integration/pages/ContactsList',
		'contactsmaintenance/test/integration/pages/ContactsObjectPage'
    ],
    function(JourneyRunner, opaJourney, ContactsList, ContactsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('contactsmaintenance') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheContactsList: ContactsList,
					onTheContactsObjectPage: ContactsObjectPage
                }
            },
            opaJourney.run
        );
    }
);