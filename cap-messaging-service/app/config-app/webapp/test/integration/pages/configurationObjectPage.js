sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'com.gallantt.msg.configapp',
            componentId: 'configurationObjectPage',
            contextPath: '/configuration'
        },
        CustomPageDefinitions
    );
});