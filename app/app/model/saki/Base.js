Ext.define("ext5.model.saki.Base", {
	extend : "Ext.data.Model",
	idProperty : "id",
	fields : [ {
		name : "id",
		type : "int"
	} ],
	schema : {
		namespace : "ext5.model.saki",
		urlPrefix : "resources/service.php",
		proxy : {
			type : "ajax",
			url : "{prefix}/{entityName:lowercase}/read",
			actionMethods : {
				read : "POST"
			},
			reader : {
				type : "json",
				rootProperty : "data"
			}
		}
	}
});
