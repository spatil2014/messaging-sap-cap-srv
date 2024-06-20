sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'gallantmessagingcontact/test/integration/FirstJourney',
		'gallantmessagingcontact/test/integration/pages/ContactDataList',
		'gallantmessagingcontact/test/integration/pages/ContactDataObjectPage'
    ],
    function(JourneyRunner, opaJourney, ContactDataList, ContactDataObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('gallantmessagingcontact') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheContactDataList: ContactDataList,
					onTheContactDataObjectPage: ContactDataObjectPage
                }
            },
            opaJourney.run
        );
    }
);