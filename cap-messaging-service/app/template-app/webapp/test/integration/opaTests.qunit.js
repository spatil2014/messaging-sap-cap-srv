sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'com/gallantt/msg/templateapp/test/integration/FirstJourney',
		'com/gallantt/msg/templateapp/test/integration/pages/templatesList',
		'com/gallantt/msg/templateapp/test/integration/pages/templatesObjectPage'
    ],
    function(JourneyRunner, opaJourney, templatesList, templatesObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('com/gallantt/msg/templateapp') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onThetemplatesList: templatesList,
					onThetemplatesObjectPage: templatesObjectPage
                }
            },
            opaJourney.run
        );
    }
);