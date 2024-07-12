using messagingService as service from '../../srv/MessagingService';
// annotate service.messages with @(
//     UI.FieldGroup #GeneratedGroup : {
//         $Type : 'UI.FieldGroupType',
//         Data : [
//             {
//                 $Type : 'UI.DataField',
//                 Label : 'Content',
//                 Value : content,
//             },
//             {
//                 $Type : 'UI.DataField',
//                 Label : 'Subject',
//                 Value : subject,
//             },
//             {
//                 $Type : 'UI.DataField',
//                 Label : 'TemplateID',
//                 Value : templateID,
//             },
//             {
//                 $Type : 'UI.DataField',
//                 Label : 'Attachment',
//                 Value : attachment,
//             },
//         ],
//     },
//     UI.Facets : [
//         {
//             $Type : 'UI.ReferenceFacet',
//             ID : 'GeneratedFacet1',
//             Label : 'General Information',
//             Target : '@UI.FieldGroup#GeneratedGroup',
//         },
//     ],
//     UI.LineItem : [
//         {
//             $Type : 'UI.DataField',
//             Label : 'content',
//             Value : content,
//         },
//         {
//             $Type : 'UI.DataField',
//             Label : 'subject',
//             Value : subject,
//         },
//         {
//             $Type : 'UI.DataField',
//             Label : 'templateID',
//             Value : templateID,
//         },
//         {
//             $Type : 'UI.DataField',
//             Label : 'attachment',
//             Value : attachment,
//         },
//     ],
//     CreateHidden: false
// );
annotate service.messages with @(UI.LineItem: [
    { $Type: 'UI.DataField', Value: 'content' },
    { $Type: 'UI.DataField', Value: 'subject' },
    { $Type: 'UI.DataField', Value: 'templateID' },
    { $Type: 'UI.DataField', Value: 'attachment' }
]);


annotate service.messages with @(
    UI.Facets: [
        {
            $Type: 'UI.ReferenceFacet',
            ID: 'RecipientsFacet',
            Label: 'Recipients',
            Target: '@UI.FieldGroup#RecipientsFieldGroup'
        }
    ]
);



