/**
 * Auto-generated action file for "Sage Business Cloud Accounting - Accounts" API.
 *
 * Generated at: 2021-04-22T20:49:29.795Z
 * Mass generator version: 1.0.0
 *
 * : Sage-Accounting-Component
 * Copyright © 2020,  AG
 *
 * All files of this connector are licensed under the Apache 2.0 License. For details
 * see the file LICENSE on the toplevel directory.
 *
 *
 * Operation: 'putContactPaymentsKey'
 * Endpoint Path: '/contact_payments/{key}'
 * Method: 'put'
 *
 */



 // how to pass the transformation function... no need
 // pass the meta data 
 // create a new Object 
 // emit the message with the new emit function 

 // securities and auth methods   
 // check how to make the new ferryman and its transform functions functional // no need

const Swagger = require('swagger-client');
const processWrapper = require('../services/process-wrapper');
const spec = require('../spec.json');
const uuid = require("uuid");

// this wrapers offers a simplified emitData(data) function
module.exports = {process: processAction};

// parameter names for this call
const PARAMETERS = [
    "key"
];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "key": "key",
    "transaction_type_id": "transaction_type_id",
    "contact_id": "contact_id",
    "bank_account_id": "bank_account_id",
    "date": "date",
    "total_amount": "total_amount",
    "payment_method_id": "payment_method_id",
    "net_amount": "net_amount",
    "tax_amount": "tax_amount",
    "currency_id": "currency_id",
    "exchange_rate": "exchange_rate",
    "base_currency_net_amount": "base_currency_net_amount",
    "base_currency_tax_amount": "base_currency_tax_amount",
    "base_currency_total_amount": "base_currency_total_amount",
    "base_currency_currency_charge": "base_currency_currency_charge",
    "reference": "reference",
    "tax_rate_id": "tax_rate_id",
    "allocated_artefacts": "allocated_artefacts",
    "contact_name": "contact_name",
    "contact_reference": "contact_reference",
    "outstanding_amount": "outstanding_amount",
    "base_currency_outstanding_amount": "base_currency_outstanding_amount",
    "status_id": "status_id",
    "payment_on_account": "payment_on_account",
    "contact_payment": "contact_payment",
    "requestBody": "requestBody"
};

function newMessage(body) {
    const msg = {
      id: uuid.v4(),
      attachments: {},
      body,
      headers: {},
      metadata: {},
    };
  
    return msg;
  }

function processAction(msg, cfg) {
    var isVerbose = process.env.debug || cfg.verbose;

    console.log("msg:",msg);
    console.log("cfg:",cfg)

    if (isVerbose) {
        console.log(`---MSG: ${JSON.stringify(msg)}`);
        console.log(`---CFG: ${JSON.stringify(cfg)}`);
        console.log(`---ENV: ${JSON.stringify(process.env)}`);
    }

    const contentType = 'application/json';

    const body = msg.data;
    mapFieldNames(body);

    let parameters = {};
    for(let param of PARAMETERS) {
        parameters[param] = body[param];
    }

    const oihUid = msg.metadata !== undefined && msg.metadata.oihUid !== undefined
    ? msg.metadata.oihUid
    : 'oihUid not set yet';
  const recordUid = msg.metadata !== undefined && msg.metadata.recordUid !== undefined
    ? msg.metadata.recordUid
    : undefined;
  const applicationUid = msg.metadata !== undefined && msg.metadata.applicationUid !== undefined
    ? msg.metadata.applicationUid
    : undefined;

    const newElement = {};
    const oihMeta = {
      applicationUid,
      oihUid,
      recordUid,
    };
    
    // credentials for this operation
    let securities = {};

    if(cfg.otherServer){
        if(!spec.servers){
            spec.servers = [];
        }
        spec.servers.push({"url":cfg.otherServer})
    }
    
    
    let callParams = {
        spec: spec,
        operationId: 'putContactPaymentsKey',
        pathName: '/contact_payments/{key}',
        method: 'put',
        parameters: parameters,
        requestContentType: contentType,
        requestBody: body,
        securities: {authorized: securities},
        server: spec.servers[cfg.server] || cfg.otherServer,
    };
        if(callParams.method === 'get'){
            delete callParams.requestBody;
        }
    

    if (isVerbose) {
        let out = Object.assign({}, callParams);
        out.spec = '[omitted]';
        console.log(`--SWAGGER CALL: ${JSON.stringify(out)}`);
    }

    // Call operation via Swagger client
    return Swagger.execute(callParams).then(data => {
        // emit a single message with data
        console.log("swagger data:",data);
        delete data.uid;
        newElement.metadata = oihMeta;
        newElement.data = data.data
        this.emit("data",newMessage(newElement));

        // if the response contains an array of entities, you can emit them one by one:

        // data.obj.someItems.forEach((item) => {
        //     this.emitData(item);
        // }
    });
}

function mapFieldNames(obj) {
    if(Array.isArray(obj)) {
        obj.forEach(mapFieldNames);
    }
    else if(typeof obj === 'object' && obj) {
        Object.keys(obj).forEach(key => {
            mapFieldNames(obj[key]);

            let goodKey = FIELD_MAP[key];
            if(goodKey && goodKey !== key) {
                obj[goodKey] = obj[key];
                delete obj[key];
            }
        });
    }
}