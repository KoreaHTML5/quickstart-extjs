Ext.define("ext5.model.saki.Customer", {
    extend: "ext5.model.saki.Base",
    fields: [
    {name: "name", type: "string", validators: [
        {type: "length", min: 3, minOnlyMessage: "Customer name must have at least 3 characters"}
    ]},
    {name: "addrStreet", type: "string"},
    {name: "addrCity", type: "string", validators: [
        {type: "length", min: 3, minOnlyMessage: "City must have at least 3 characters"}
    ]},
    {name: "addrCountry", type: "string", validators: [
        {type: "length", min: 1, minOnlyMessage: "Country must have at least 1 character"}
    ]}
]});
