sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'messagingconfigdata/test/integration/FirstJourney',
		'messagingconfigdata/test/integration/pages/ConfigDataList',
		'messagingconfigdata/test/integration/pages/ConfigDataObjectPage'
    ],
    function(JourneyRunner, opaJourney, ConfigDataList, ConfigDataObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('messagingconfigdata') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheConfigDataList: ConfigDataList,
					onTheConfigDataObjectPage: ConfigDataObjectPage
                }
            },
            opaJourney.run
        );
    }
);