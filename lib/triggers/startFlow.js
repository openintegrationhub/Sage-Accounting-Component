/**
 * : Sage-Accounting-Component
 * Copyright © 2020,  AG
 *
 * All files of this connector are licensed under the Apache 2.0 License. For details
 * see the file LICENSE on the toplevel directory.
 */

 // adding the template from a connctor
 // make adjustements to the new ferryman

const processWrapper = require('../services/process-wrapper');

module.exports.process = processWrapper(processTrigger);

function processTrigger(msg, cfg, snapshot) {
    this.emitData({
        now: new Date().toISOString(),
        config: cfg,
        snapshot: snapshot,
    });
}