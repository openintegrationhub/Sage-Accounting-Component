/**
 * Auto-generated action file for "Sage Business Cloud Accounting - Accounts" API.
 *
 * Generated at: 2022-01-21T12:19:16.925Z
 * Mass generator version: 1.0.0
 *
 * : Sage-Accounting-Component
 * Copyright © 2020,  AG
 *
 * All files of this connector are licensed under the Apache 2.0 License. For details
 * see the file LICENSE on the toplevel directory.
 *
 *
 * Operation: 'putSalesInvoicesKey'
 * Endpoint Path: '/sales_invoices/{key}'
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
    "contact_id": "contact_id",
    "date": "date",
    "cis_applicable_amount": "cis_applicable_amount",
    "base_currency_cis_applicable_amount": "base_currency_cis_applicable_amount",
    "total_after_cis_deduction": "total_after_cis_deduction",
    "base_currency_total_after_cis_deduction": "base_currency_total_after_cis_deduction",
    "invoice_number_prefix": "invoice_number_prefix",
    "invoice_number": "invoice_number",
    "contact_name": "contact_name",
    "contact_reference": "contact_reference",
    "due_date": "due_date",
    "reference": "reference",
    "notes": "notes",
    "terms_and_conditions": "terms_and_conditions",
    "shipping_net_amount": "shipping_net_amount",
    "shipping_tax_rate_id": "shipping_tax_rate_id",
    "shipping_tax_amount": "shipping_tax_amount",
    "shipping_total_amount": "shipping_total_amount",
    "net_amount": "net_amount",
    "tax_amount": "tax_amount",
    "total_amount": "total_amount",
    "currency_id": "currency_id",
    "exchange_rate": "exchange_rate",
    "inverse_exchange_rate": "inverse_exchange_rate",
    "base_currency_shipping_net_amount": "base_currency_shipping_net_amount",
    "base_currency_shipping_tax_amount": "base_currency_shipping_tax_amount",
    "base_currency_shipping_total_amount": "base_currency_shipping_total_amount",
    "total_quantity": "total_quantity",
    "total_discount_amount": "total_discount_amount",
    "base_currency_total_discount_amount": "base_currency_total_discount_amount",
    "base_currency_net_amount": "base_currency_net_amount",
    "base_currency_tax_amount": "base_currency_tax_amount",
    "base_currency_total_amount": "base_currency_total_amount",
    "status_id": "status_id",
    "sent": "sent",
    "original_quote_estimate_id": "original_quote_estimate_id",
    "tax_address_region_id": "tax_address_region_id",
    "delivery_performance_date": "delivery_performance_date",
    "withholding_tax_rate": "withholding_tax_rate",
    "withholding_tax_amount": "withholding_tax_amount",
    "base_currency_withholding_tax_amount": "base_currency_withholding_tax_amount",
    "frequency": "frequency",
    "on_week_day": "on_week_day",
    "on_day_number": "on_day_number",
    "recurrence_type": "recurrence_type",
    "recurrence_status_identifier": "recurrence_status_identifier",
    "recurring_invoice": "recurring_invoice",
    "address_line_1": "address_line_1",
    "address_line_2": "address_line_2",
    "city": "city",
    "postal_code": "postal_code",
    "country_id": "country_id",
    "address_type_id": "address_type_id",
    "region": "region",
    "country_group_id": "country_group_id",
    "main_address": "main_address",
    "delivery_address": "delivery_address",
    "invoice_lines": "invoice_lines",
    "tax_analysis": "tax_analysis",
    "sales_invoice": "sales_invoice",
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
    operationId: 'putSalesInvoicesKey',
    pathName: '/sales_invoices/{key}',
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
