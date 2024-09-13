const os = require('os');

function captureError(error) {
    return {
        message: error.message,
        stack: error.stack,
        type: error.name,
        os: os.platform(),
        nodeVersion: process.version,
    };
}

module.exports = { captureError };
