/**
 * Auto-generated action file for "Sage Business Cloud Accounting - Accounts" API.
 *
 * Generated at: 2022-01-21T12:19:17.185Z
 * Mass generator version: 1.0.0
 *
 * : Sage-Accounting-Component
 * Copyright © 2020,  AG
 *
 * All files of this connector are licensed under the Apache 2.0 License. For details
 * see the file LICENSE on the toplevel directory.
 *
 *
 * Operation: 'postMigrationTaxReturns'
 * Endpoint Path: '/migration_tax_returns'
 * Method: 'post'
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
    "from_date": "from_date",
    "to_date": "to_date",
    "total_amount": "total_amount",
    "tax_return_frequency_id": "tax_return_frequency_id",
    "box_1": "box_1",
    "box_2": "box_2",
    "box_3": "box_3",
    "box_4": "box_4",
    "box_5": "box_5",
    "box_6": "box_6",
    "box_7": "box_7",
    "box_8": "box_8",
    "box_9": "box_9",
    "gb": "gb",
    "box_T1": "box_T1",
    "box_T2": "box_T2",
    "box_T3": "box_T3",
    "box_T4": "box_T4",
    "box_E1": "box_E1",
    "box_E2": "box_E2",
    "box_ES1": "box_ES1",
    "box_ES2": "box_ES2",
    "ie": "ie",
    "migration_tax_return": "migration_tax_return",
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
    operationId: 'postMigrationTaxReturns',
    pathName: '/migration_tax_returns',
    method: 'post',
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
