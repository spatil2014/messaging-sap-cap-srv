using MessagingService as service from '../../srv/MessagingService';
@Capabilities.InsertRestrictions.Insertable: true
annotate service.ContactData with @(
    UI.FieldGroup #GeneratedGroup : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Label : 'ContactNumber',
                Value : ContactNumber,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Email',
                Value : Email,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Country',
                Value : Country,
            },
            {
                $Type : 'UI.DataField',
                Label : 'EMAILSUBJECT',
                Value : EMAILSUBJECT,
            },
            {
                $Type : 'UI.DataField',
                Label : 'EMAILBODY',
                Value : EMAILBODY,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Template',
                Value : Template,
            },
        ],
    },
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            ID : 'GeneratedFacet1',
            Label : 'General Information',
            Target : '@UI.FieldGroup#GeneratedGroup',
        },
    ],
    UI.LineItem : [
        {
            $Type : 'UI.DataField',
            Label : 'ContactNumber',
            Value : ContactNumber,
        },
        {
            $Type : 'UI.DataField',
            Label : 'Email',
            Value : Email,
        },
        {
            $Type : 'UI.DataField',
            Label : 'Country',
            Value : Country,
        },
        {
            $Type : 'UI.DataField',
            Label : 'EMAILSUBJECT',
            Value : EMAILSUBJECT,
        },
        {
            $Type : 'UI.DataField',
            Label : 'EMAILBODY',
            Value : EMAILBODY,
        },
    ],
);

