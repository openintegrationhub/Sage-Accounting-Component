/**
 * Auto-generated action file for "Sage Business Cloud Accounting - Accounts" API.
 *
 * Generated at: 2021-04-22T20:49:29.766Z
 * Mass generator version: 1.0.0
 *
 * : Sage-Accounting-Component
 * Copyright © 2020,  AG
 *
 * All files of this connector are licensed under the Apache 2.0 License. For details
 * see the file LICENSE on the toplevel directory.
 *
 *
 * Operation: 'postContacts'
 * Endpoint Path: '/contacts'
 * Method: 'post'
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
    "name": "name",
    "contact_type_ids": "contact_type_ids",
    "reference": "reference",
    "default_sales_ledger_account_id": "default_sales_ledger_account_id",
    "default_sales_tax_rate_id": "default_sales_tax_rate_id",
    "default_purchase_ledger_account_id": "default_purchase_ledger_account_id",
    "tax_number": "tax_number",
    "notes": "notes",
    "locale": "locale",
    "credit_limit": "credit_limit",
    "credit_days": "credit_days",
    "credit_terms_and_conditions": "credit_terms_and_conditions",
    "product_sales_price_type_id": "product_sales_price_type_id",
    "source_guid": "source_guid",
    "currency_id": "currency_id",
    "aux_reference": "aux_reference",
    "registered_number": "registered_number",
    "tax_calculation": "tax_calculation",
    "auxiliary_account": "auxiliary_account",
    "address_line_1": "address_line_1",
    "address_line_2": "address_line_2",
    "city": "city",
    "postal_code": "postal_code",
    "country_id": "country_id",
    "bank_account_id": "bank_account_id",
    "contact_id": "contact_id",
    "address_type_id": "address_type_id",
    "region": "region",
    "country_group_id": "country_group_id",
    "is_main_address": "is_main_address",
    "main_address": "main_address",
    "delivery_address": "delivery_address",
    "contact_person_type_ids": "contact_person_type_ids",
    "job_title": "job_title",
    "telephone": "telephone",
    "mobile": "mobile",
    "email": "email",
    "fax": "fax",
    "is_main_contact": "is_main_contact",
    "address_id": "address_id",
    "is_preferred_contact": "is_preferred_contact",
    "main_contact_person": "main_contact_person",
    "account_name": "account_name",
    "account_number": "account_number",
    "sort_code": "sort_code",
    "bic": "bic",
    "iban": "iban",
    "bank_account_details": "bank_account_details",
    "home_tax": "home_tax",
    "eu_tax_registered": "eu_tax_registered",
    "eu_not_tax_registered": "eu_not_tax_registered",
    "rest_of_world_tax": "rest_of_world_tax",
    "is_importer": "is_importer",
    "tax_treatment": "tax_treatment",
    "contact": "contact",
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
        operationId: 'postContacts',
        pathName: '/contacts',
        method: 'post',
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