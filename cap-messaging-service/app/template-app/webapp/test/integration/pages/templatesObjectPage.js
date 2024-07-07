sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'com.gallantt.msg.templateapp',
            componentId: 'templatesObjectPage',
            contextPath: '/templates'
        },
        CustomPageDefinitions
    );
});