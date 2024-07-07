sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'com/gallantt/msg/report/logreport/test/integration/FirstJourney',
		'com/gallantt/msg/report/logreport/test/integration/pages/logList',
		'com/gallantt/msg/report/logreport/test/integration/pages/logObjectPage'
    ],
    function(JourneyRunner, opaJourney, logList, logObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('com/gallantt/msg/report/logreport') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onThelogList: logList,
					onThelogObjectPage: logObjectPage
                }
            },
            opaJourney.run
        );
    }
);