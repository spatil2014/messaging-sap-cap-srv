sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'com/gallantt/msg/configapp/test/integration/FirstJourney',
		'com/gallantt/msg/configapp/test/integration/pages/configurationList',
		'com/gallantt/msg/configapp/test/integration/pages/configurationObjectPage'
    ],
    function(JourneyRunner, opaJourney, configurationList, configurationObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('com/gallantt/msg/configapp') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheconfigurationList: configurationList,
					onTheconfigurationObjectPage: configurationObjectPage
                }
            },
            opaJourney.run
        );
    }
);