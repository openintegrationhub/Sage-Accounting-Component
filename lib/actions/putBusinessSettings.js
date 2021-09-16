/**
 * Auto-generated action file for "Sage Business Cloud Accounting - Accounts" API.
 *
 * Generated at: 2021-04-22T20:49:29.804Z
 * Mass generator version: 1.0.0
 *
 * : Sage-Accounting-Component
 * Copyright © 2020,  AG
 *
 * All files of this connector are licensed under the Apache 2.0 License. For details
 * see the file LICENSE on the toplevel directory.
 *
 *
 * Operation: 'putBusinessSettings'
 * Endpoint Path: '/business_settings'
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
const PARAMETERS = [];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "siret": "siret",
    "management_centre_member": "management_centre_member",
    "rcs_number": "rcs_number",
    "share_capital": "share_capital",
    "business_activity_type_id": "business_activity_type_id",
    "legal_form_type_id": "legal_form_type_id",
    "auxiliary_accounts_visible": "auxiliary_accounts_visible",
    "business_type_id": "business_type_id",
    "country_of_registration_id": "country_of_registration_id",
    "bank_charges_ledger_account_id": "bank_charges_ledger_account_id",
    "bank_interest_received_ledger_account_id": "bank_interest_received_ledger_account_id",
    "bank_interest_charges_paid_ledger_account_id": "bank_interest_charges_paid_ledger_account_id",
    "exchange_rate_gains_ledger_account_id": "exchange_rate_gains_ledger_account_id",
    "exchange_rate_losses_ledger_account_id": "exchange_rate_losses_ledger_account_id",
    "sales_ledger_account_id": "sales_ledger_account_id",
    "sales_discount_ledger_account_id": "sales_discount_ledger_account_id",
    "purchase_ledger_account_id": "purchase_ledger_account_id",
    "purchase_discount_ledger_account_id": "purchase_discount_ledger_account_id",
    "product_sales_ledger_account_id": "product_sales_ledger_account_id",
    "product_purchase_ledger_account_id": "product_purchase_ledger_account_id",
    "service_sales_ledger_account_id": "service_sales_ledger_account_id",
    "service_purchase_ledger_account_id": "service_purchase_ledger_account_id",
    "stock_purchase_ledger_account_id": "stock_purchase_ledger_account_id",
    "other_receipt_ledger_account_id": "other_receipt_ledger_account_id",
    "other_payment_ledger_account_id": "other_payment_ledger_account_id",
    "customer_receipt_discount_ledger_account_id": "customer_receipt_discount_ledger_account_id",
    "vendor_payment_discount_ledger_account_id": "vendor_payment_discount_ledger_account_id",
    "carriage_ledger_account_id": "carriage_ledger_account_id",
    "default_ledger_accounts": "default_ledger_accounts",
    "business_settings": "business_settings",
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
        operationId: 'putBusinessSettings',
        pathName: '/business_settings',
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