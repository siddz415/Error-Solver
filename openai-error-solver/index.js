#!/usr/bin/env node
const { captureError } = require('./lib/errorHandler');
const { logError } = require('./lib/logger');
const { handleCli } = require('./lib/cli');

// Capture uncaught exceptions globally
process.on('uncaughtException', async (error) => {
    const errorContext = captureError(error); 
    const solution = await handleCli(errorContext);
    console.log('Proposed solution:', solution);

    // Log the error and its solution for future reference
    logError(errorContext, solution);
});
