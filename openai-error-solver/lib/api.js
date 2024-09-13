require('dotenv').config();
const { OpenAI } = require('openai');

function createOpenAIClient(apiKey) {
    return new OpenAI({
        apiKey: apiKey || process.env.OPENAI_API_KEY,
    });
}

async function solveError(errorMessage, apiKey) {
    const openai = createOpenAIClient(apiKey);

    try {
        const response = await openai.chat.completions.create({
            model: 'gpt-4',
            messages: [
                { role: 'system', content: 'You are a helpful assistant specialized in solving programming errors.' },
                { role: 'user', content: `Here is an error message I encountered:\n\n${errorMessage}\n\nPlease analyze this error and provide a detailed solution or explanation.` }
            ],
        });
        return response.choices[0].message.content;
    } catch (error) {
        console.error('Error calling OpenAI API:', error);
        return 'Could not get a solution. Please try again later.';
    }
}

module.exports = solveError;



