sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'com.gallantt.msg.report.logreport',
            componentId: 'logList',
            contextPath: '/log'
        },
        CustomPageDefinitions
    );
});