/**
 * Auto-generated action file for "Sage Business Cloud Accounting - Accounts" API.
 *
 * Generated at: 2022-01-21T12:19:17.139Z
 * Mass generator version: 1.0.0
 *
 * : Sage-Accounting-Component
 * Copyright © 2020,  AG
 *
 * All files of this connector are licensed under the Apache 2.0 License. For details
 * see the file LICENSE on the toplevel directory.
 *
 *
 * Operation: 'putFinancialSettings'
 * Endpoint Path: '/financial_settings'
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
const PARAMETERS = [];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "year_end_date": "year_end_date",
    "year_end_lockdown_date": "year_end_lockdown_date",
    "accounting_type": "accounting_type",
    "accounts_start_date": "accounts_start_date",
    "base_currency_id": "base_currency_id",
    "multi_currency_enabled": "multi_currency_enabled",
    "use_live_exchange_rates": "use_live_exchange_rates",
    "mtd_activation_status": "mtd_activation_status",
    "mtd_connected": "mtd_connected",
    "mtd_authenticated_date": "mtd_authenticated_date",
    "tax_scheme_id": "tax_scheme_id",
    "tax_return_frequency_id": "tax_return_frequency_id",
    "tax_number": "tax_number",
    "general_tax_number": "general_tax_number",
    "tax_office_id": "tax_office_id",
    "default_irpf_rate": "default_irpf_rate",
    "flat_rate_tax_percentage": "flat_rate_tax_percentage",
    "recoverable_percentage": "recoverable_percentage",
    "sales_tax_calculation": "sales_tax_calculation",
    "purchase_tax_calculation": "purchase_tax_calculation",
    "financial_settings": "financial_settings",
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
    operationId: 'putFinancialSettings',
    pathName: '/financial_settings',
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
