/**
 * Auto-generated action file for "Sage Business Cloud Accounting - Accounts" API.
 *
 * Generated at: 2021-04-22T20:49:29.805Z
 * Mass generator version: 1.0.0
 *
 * : Sage-Accounting-Component
 * Copyright © 2020,  AG
 *
 * All files of this connector are licensed under the Apache 2.0 License. For details
 * see the file LICENSE on the toplevel directory.
 *
 *
 * Operation: 'putInvoiceSettings'
 * Endpoint Path: '/invoice_settings'
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
    "next_invoice_number": "next_invoice_number",
    "next_credit_note_number": "next_credit_note_number",
    "separate_invoice_credit_note_numbering": "separate_invoice_credit_note_numbering",
    "sales_invoice_number_prefix": "sales_invoice_number_prefix",
    "sales_credit_note_number_prefix": "sales_credit_note_number_prefix",
    "invoice_terms_and_conditions": "invoice_terms_and_conditions",
    "default_note_on_invoice": "default_note_on_invoice",
    "default_note_on_credit_note": "default_note_on_credit_note",
    "next_quote_number": "next_quote_number",
    "quote_number_prefix": "quote_number_prefix",
    "estimate_number_prefix": "estimate_number_prefix",
    "quote_default_days_to_expiry": "quote_default_days_to_expiry",
    "estimate_default_days_to_expiry": "estimate_default_days_to_expiry",
    "quote_terms_and_conditions": "quote_terms_and_conditions",
    "estimate_terms_and_conditions": "estimate_terms_and_conditions",
    "delivery_note_terms_and_conditions": "delivery_note_terms_and_conditions",
    "delivery_note_show_signature": "delivery_note_show_signature",
    "delivery_note_show_picked": "delivery_note_show_picked",
    "delivery_note_show_notes": "delivery_note_show_notes",
    "delivery_note_show_contact_details": "delivery_note_show_contact_details",
    "quick_entry_prefix": "quick_entry_prefix",
    "late_payment_percentage": "late_payment_percentage",
    "prompt_payment_percentage": "prompt_payment_percentage",
    "show_auto_entrepreneur": "show_auto_entrepreneur",
    "show_insurance": "show_insurance",
    "insurer_id": "insurer_id",
    "insurance_area": "insurance_area",
    "insurance_type": "insurance_type",
    "insurance_text": "insurance_text",
    "payment_bank_account_id": "payment_bank_account_id",
    "sales_corrective_invoice_number_prefix": "sales_corrective_invoice_number_prefix",
    "next_sales_corrective_invoice_number": "next_sales_corrective_invoice_number",
    "customer_credit_days": "customer_credit_days",
    "vendor_credit_days": "vendor_credit_days",
    "sales_invoice": "sales_invoice",
    "sales_credit_note": "sales_credit_note",
    "sales_corrective_invoice": "sales_corrective_invoice",
    "sales_quote": "sales_quote",
    "sales_estimate": "sales_estimate",
    "pro_forma": "pro_forma",
    "remittance_advice": "remittance_advice",
    "statement": "statement",
    "delivery_note": "delivery_note",
    "document_headings": "document_headings",
    "description": "description",
    "unit_price": "unit_price",
    "quantity": "quantity",
    "discount": "discount",
    "line_item_titles": "line_item_titles",
    "column_1": "column_1",
    "column_2": "column_2",
    "column_3": "column_3",
    "footer_details": "footer_details",
    "business_name": "business_name",
    "website": "website",
    "telephone": "telephone",
    "mobile": "mobile",
    "email_address": "email_address",
    "due_date": "due_date",
    "default_delivery_address": "default_delivery_address",
    "print_contact_details": "print_contact_details",
    "days_overdue": "days_overdue",
    "table_of_balances": "table_of_balances",
    "print_statements": "print_statements",
    "invoice_settings": "invoice_settings",
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
        operationId: 'putInvoiceSettings',
        pathName: '/invoice_settings',
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