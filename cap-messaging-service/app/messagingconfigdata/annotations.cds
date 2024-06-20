using MessagingService as service from '../../srv/MessagingService';

@Capabilities.InsertRestrictions.Insertable: true
annotate service.ConfigData with @(
    UI.HeaderInfo: {
        Title         : {Value: 'Master Data'},
        TypeName      : 'Config Master Data',
        TypeNamePlural: 'Config Master Data',
        Description   : {
            $Type: 'UI.DataField',
            Value: 'Config Master Data',
        },
    },
    UI.FieldGroup #GeneratedGroup: {
        $Type: 'UI.FieldGroupType',
        Data : [
            {
                $Type: 'UI.DataField',
                Label: 'SMSAPI',
                Value: SMSAPI,
            },
            {
                $Type: 'UI.DataField',
                Label: 'SMSUSER',
                Value: SMSUSER,
            },
            {
                $Type: 'UI.DataField',
                Label: 'SMSPASSWD',
                Value: SMSPASSWD,
            },
            {
                $Type: 'UI.DataField',
                Label: 'SENDER',
                Value: SENDER,
            },
            {
                $Type: 'UI.DataField',
                Label: 'SMTPHOST',
                Value: SMTPHOST,
            },
            {
                $Type: 'UI.DataField',
                Label: 'SMTPPORT',
                Value: SMTPPORT,
            },
            {
                $Type: 'UI.DataField',
                Label: 'WHATSAPPAPI',
                Value: WHATSAPPAPI,
            },
            {
                $Type: 'UI.DataField',
                Label: 'WTSPUSER',
                Value: WTSPUSER,
            },
            {
                $Type: 'UI.DataField',
                Label: 'WTSPPASSWD',
                Value: WTSPPASSWD,
            },
            {
                $Type: 'UI.DataField',
                Label: 'WTSPSENDER',
                Value: WTSPSENDER,
            },
        ],
    },
    UI.Facets                    : [{
        $Type : 'UI.ReferenceFacet',
        ID    : 'GeneratedFacet1',
        Label : 'General Information',
        Target: '@UI.FieldGroup#GeneratedGroup',
    }, ],
    UI.LineItem                  : [
        {
            $Type: 'UI.DataField',
            Label: 'SMSAPI',
            Value: SMSAPI,
        },
        {
            $Type: 'UI.DataField',
            Label: 'SMSUSER',
            Value: SMSUSER,
        },
        {
            $Type: 'UI.DataField',
            Label: 'SMSPASSWD',
            Value: SMSPASSWD,
        },
        {
            $Type: 'UI.DataField',
            Label: 'SENDER',
            Value: SENDER,
        },
        {
            $Type: 'UI.DataField',
            Label: 'SMTPHOST',
            Value: SMTPHOST,
        },
        {
            $Type: 'UI.DataField',
            Label: 'SMTPPORT',
            Value: SMTPPORT,
        },
        {
            $Type: 'UI.DataField',
            Label: 'WHATSAPPAPI',
            Value: WHATSAPPAPI,
        },
        {
            $Type: 'UI.DataField',
            Label: 'WTSPUSER',
            Value: WTSPUSER,
        },
        {
            $Type: 'UI.DataField',
            Label: 'WTSPPASSWD',
            Value: WTSPPASSWD,
        },
        {
            $Type: 'UI.DataField',
            Label: 'WTSPSENDER',
            Value: WTSPSENDER,
        },
    ],
);