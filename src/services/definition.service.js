const redisClient = require('../clients/redis.client');
const getGptDefinition = require('../clients/openai.client');
const createPrompt = require('./prompt-generator.service');

/**
 * Retrieves a definition for a given word in a given language.
 *
 * The method first checks if the definition is already cached in Redis. If it is, it returns the cached definition.
 * If not, it generates a prompt and sends it to GPT to generate a definition. Once the definition is generated,
 * it caches the result in Redis and then returns the definition.
 *
 * @param {string} word - The word to retrieve the definition for.
 * @param {string} language - The language to retrieve the definition in.
 * @return {string} The definition of the word in the given language, or an error message if the request fails.
 */
async function getDefinition(word, language) {
    const cacheKey = `${word}:${language}`;
    try {
        // Check if the definition is already cached
        const cachedDefinition = await redisClient.get(cacheKey);
        if (cachedDefinition) {
            // Return the cached definition
            return cachedDefinition;
        }

        // If not, generate a prompt and send it to GPT
        const prompt = createPrompt(word, language);

        // Send the prompt to GPT
        const definition = await getGptDefinition(prompt);
        // Cache the result in Redis
        await redisClient.set(cacheKey, definition);

        // Return the definition
        return definition;
    } catch (error) {
        console.error("Error in getDefinition:", error);
        // Return an error message if the request fails
        return "Sorry, something went wrong.";
    }
}

module.exports = { getDefinition };
