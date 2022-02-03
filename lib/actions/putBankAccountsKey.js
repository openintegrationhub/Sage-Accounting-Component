/**
 * Auto-generated action file for "Sage Business Cloud Accounting - Accounts" API.
 *
 * Generated at: 2022-01-21T12:19:16.549Z
 * Mass generator version: 1.0.0
 *
 * : Sage-Accounting-Component
 * Copyright © 2020,  AG
 *
 * All files of this connector are licensed under the Apache 2.0 License. For details
 * see the file LICENSE on the toplevel directory.
 *
 *
 * Operation: 'putBankAccountsKey'
 * Endpoint Path: '/bank_accounts/{key}'
 * Method: 'put'
 *
 */

// how to pass the transformation function... no need
// pass the meta data
// create a new Object
// emit the message with the new emit function

// securities and auth methods
// check how to make the new ferryman and its transform functions functional // no need

const Swagger = require("swagger-client");
const spec = require("../spec.json");
const { mapFieldNames } = require("../utils/helpers");

// parameter names for this call
const PARAMETERS = [
    "key"
];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "key": "key",
    "bank_account_type_id": "bank_account_type_id",
    "ledger_account_id": "ledger_account_id",
    "nominal_code": "nominal_code",
    "default_payment_method_id": "default_payment_method_id",
    "gifi_code": "gifi_code",
    "account_name": "account_name",
    "account_number": "account_number",
    "sort_code": "sort_code",
    "bic": "bic",
    "iban": "iban",
    "bank_account_details": "bank_account_details",
    "address_line_1": "address_line_1",
    "address_line_2": "address_line_2",
    "city": "city",
    "postal_code": "postal_code",
    "country_id": "country_id",
    "bank_account_id": "bank_account_id",
    "contact_id": "contact_id",
    "address_type_id": "address_type_id",
    "name": "name",
    "region": "region",
    "country_group_id": "country_group_id",
    "is_main_address": "is_main_address",
    "main_address": "main_address",
    "job_title": "job_title",
    "telephone": "telephone",
    "mobile": "mobile",
    "email": "email",
    "fax": "fax",
    "main_contact_person": "main_contact_person",
    "code": "code",
    "journal_code_type_id": "journal_code_type_id",
    "control_name": "control_name",
    "reserved": "reserved",
    "journal_code": "journal_code",
    "bank_account": "bank_account",
    "requestBody": "requestBody"
};

function processAction(msg, cfg) {
  var isVerbose = process.env.debug || cfg.verbose;

  console.log("msg:", msg);
  console.log("cfg:", cfg);

  if (isVerbose) {
    console.log(`---MSG: ${JSON.stringify(msg)}`);
    console.log(`---CFG: ${JSON.stringify(cfg)}`);
    console.log(`---ENV: ${JSON.stringify(process.env)}`);
  }

  const contentType = 'application/json';

  const body = msg.data;
  mapFieldNames(body);

  let parameters = {};
  for (let param of PARAMETERS) {
    parameters[param] = body[param];
  }

  const oihUid =
    msg.metadata !== undefined && msg.metadata.oihUid !== undefined
      ? msg.metadata.oihUid
      : "oihUid not set yet";
  const recordUid =
    msg.metadata !== undefined && msg.metadata.recordUid !== undefined
      ? msg.metadata.recordUid
      : undefined;
  const applicationUid =
    msg.metadata !== undefined && msg.metadata.applicationUid !== undefined
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

  if (cfg.otherServer) {
    if (!spec.servers) {
      spec.servers = [];
    }
    spec.servers.push({ "url": cfg.otherServer });
  }

  let callParams = {
    spec: spec,
    operationId: 'putBankAccountsKey',
    pathName: '/bank_accounts/{key}',
    method: 'put',
    parameters: parameters,
    requestContentType: contentType,
    requestBody: body,
    securities: { authorized: securities },
    server: spec.servers[cfg.server] || cfg.otherServer,
  };
  if (callParams.method === "get") {
    delete callParams.requestBody;
  }

  if (isVerbose) {
    let out = Object.assign({}, callParams);
    out.spec = "[omitted]";
    console.log(`--SWAGGER CALL: ${JSON.stringify(out)}`);
  }

  // Call operation via Swagger client
  return Swagger.execute(callParams).then((data) => {
    // emit a single message with data
    // console.log("swagger data:",data);
    delete data.uid;
    newElement.metadata = oihMeta;
    newElement.data = data.data;
    this.emit("data", newElement);

    // if the response contains an array of entities, you can emit them one by one:

    // data.obj.someItems.forEach((item) => {
    //     this.emitData(item);
    // }
  });
}

// this wrapers offers a simplified emitData(data) function
module.exports = { process: processAction };
