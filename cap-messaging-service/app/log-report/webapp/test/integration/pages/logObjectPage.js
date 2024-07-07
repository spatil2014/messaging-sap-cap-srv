sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'com.gallantt.msg.report.logreport',
            componentId: 'logObjectPage',
            contextPath: '/log'
        },
        CustomPageDefinitions
    );
});