function buildPrompt(errorContext, language = 'JavaScript', environment = 'local') {
    return `I encountered an error in ${language} in a ${environment} environment: "${errorContext.message}". 
    Here is the stack trace: "${errorContext.stack}". Can you help resolve it?`;
}

module.exports = { buildPrompt };
