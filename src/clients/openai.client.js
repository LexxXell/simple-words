const OpenAI = require('openai');

// Настройка клиента с использованием API-ключа
const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

async function getGptDefinition(prompt) {
    try {
        const response = await client.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages: [{ role: 'user', content: prompt }],
        });
        return response.choices[0].message.content.trim();
    } catch (error) {
        if (error instanceof OpenAI.RateLimitError) {
            console.error("Rate limit exceeded, retrying after delay...");
            await new Promise(res => setTimeout(res, 10000)); // задержка на 10 секунд
            return getGptDefinition(prompt); // повторить попытку
        } else {
            console.error("Error fetching GPT definition:", error);
            return "Sorry, something went wrong.";
        }
    }
}


module.exports = getGptDefinition;
