const fs = require('fs');
const path = './logs/error-log.json';

function logError(errorContext, solution) {
    const logEntry = { error: errorContext, solution, timestamp: new Date() };
    let logs = [];

    // If log file exists, read and update it
    if (fs.existsSync(path)) {
        logs = JSON.parse(fs.readFileSync(path));
    }

    logs.push(logEntry);
    fs.writeFileSync(path, JSON.stringify(logs, null, 2));
}

module.exports = { logError };
