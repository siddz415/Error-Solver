# Error-Solver

This NPM package captures terminal errors and suggests solutions using OpenAI's API.

## Setup

### Step 1: Get Your OpenAI API Key

To use this package, you'll need an API key from OpenAI. You can get it by signing up at [OpenAI](https://beta.openai.com/signup/).

### Step 2: Provide the API Key

There are two ways to provide your OpenAI API key:

1. **Environment Variable:**

   You can set the API key as an environment variable by creating a `.env` file in your project root:
   bash
  error-solver
   
2. **CLI Option:**

Alternatively, you can pass the API key directly as a command-line argument when using the package:

```bash
error-solver --apiKey your-openai-api-key


