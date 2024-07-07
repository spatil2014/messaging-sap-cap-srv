sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'com.gallantt.msg.configapp',
            componentId: 'configurationList',
            contextPath: '/configuration'
        },
        CustomPageDefinitions
    );
});