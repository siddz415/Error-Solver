const solveError = require('./api');
const minimist = require('minimist');

const args = minimist(process.argv.slice(2));

const apiKey = args.apikey;  // API key from terminal
const errorMessage = args._.join(' ') || 'No error message provided.';

if (!apiKey && !process.env.OPENAI_API_KEY) {
    console.error('Please provide an OpenAI API key either via --apikey or through the .env file.');
    process.exit(1);
}

solveError(errorMessage, apiKey).then(solution => {
    console.log('Suggested Solution:', solution);
}).catch(err => {
    console.error('Error solving the error:', err);
});

