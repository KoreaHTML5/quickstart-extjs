Ext.define('ext5.model.ticket.Base', {
    extend: 'Ext.data.Model',  // #1
    requires: ['Ext.data.proxy.JsonP'],
    fields: [
        {
            name: 'id',
            type: 'int'
        }
    ],

    schema: {   // #2
        namespace: 'ext5.model.ticket'     // #3
        /*proxy: {
            type: 'jsonp',      // #4
            actionMethods: {
                read: 'GET'
            },
            api: {
                read: 'http://extuxgroup.com/ticket-{entityName:uncapitalize}.do?read'   // #5
            },
            reader: {            // #6
                type: 'json',
                rootProperty: 'entitys'
            }
        }*/
    }
});

///**
// * This class is the base class for all entities in the application.
// */
//Ext.define('ext5.model.ticket.Base', {
//    extend: 'Ext.data.Model',
//
//    fields: [
//        {
//            name: 'id',
//            type: 'int'
//        }
//    ],
//
//    schema: {
//        namespace: 'ext5.model.ticket'
//        // 이하 Association 테스트용.
////        proxy: {
////            type: 'jsonp',
////            actionMethods: {       // #1
////                read: 'GET',       // #2
////                create: 'POST',    // #3
////                update: 'POST',     // #4
////                destroy: 'POST'  // #5
////            },
////            api: {                 // #6
////                read: 'http://192.168.1.3:1841/ticket-{entityName:uncapitalize}.do?read',
////                create: '/resources/data/jsonp_success.json?create',
////                update: 'http://192.168.1.3:1841/ticket-{entityName:uncapitalize}.do?update',
////                destroy: '/resources/data/jsonp_success.json?destroy'
////            },
////            writer: {
////                type: 'json',
////                allowSingle: false  // 배열 하나로 전달.
////            },
////            reader: {             // #11
////                type: 'json',
////                rootProperty: 'entitys'
////            }
////        }
////        proxy: {
////            type: 'ajax',
////            actionMethods: {       // #1
////                read: 'GET',       // #2
////                create: 'POST',    // #3
////                update: 'POST',     // #4
////                destroy: 'POST'  // #5
////            },
////            api: {                 // #6
////                read: '/resources/data/ticket-{entityName:uncapitalize}.json?read',
////                create: '/resources/data/success.json?create',
////                update: '/resources/data/success.json?update',
////                destroy: '/resources/data/success.json?destroy'
////            },
////            writer: {
////                type: 'json',
////                allowSingle: false  // 배열 하나로 전달.
////            },
////            reader: {             // #11
////                type: 'json',
////                rootProperty: 'entitys'
////            }
////        }
//    }
//});
