import OpenAI from 'openai'
import * as agents from '~/agents'
import dotenv from 'dotenv';

dotenv.config();

 
export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    const agent = body.agent || 'customerSupportAgent'

    if (!Object.keys(agents).includes(agent)) {
        throw new Error(`Agent ${ agent } not found`)
    }
});

    //const OPENAI_API_KEY  = process.env.OPENAI_API_KEY

   
    const openai = new OpenAI({
        apiKey: process.env.OPENAI_API_KEY
    })

    console.log('openai', openai);

    async function askOpenAI() {
        const response = await openai.chat.completions.create({
        model: 'gpt-4', 
        messages: [ 
            { role: 'system', content: 'You are an expert on travel destinations.' }, 
            { role: 'user', content: 'What are some of the best places to visit in Japan?' } 
        ], 
            temperature: 0.7, // Slightly creative but still focused 
            max_tokens: 200, // Limits response to 200 tokens 
        });
    return response.choices[0].message.content;
}
