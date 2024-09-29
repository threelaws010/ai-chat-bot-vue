import OpenAI from 'openai';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();



const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,  // API key from environment
  });

// Example function using OpenAI API
async function askOpenAI() {
  const response = await openai.chat.completions.create({
    model: 'gpt-4',
    messages: [
      { role: 'system', content: 'You are a helpful assistant.' },
      { role: 'user', content: 'Tell me an interesting fact about the ocean.' },
    ],
  });

  console.log(response.data.choices[0].message.content);
}

// Execute the function
askOpenAI();