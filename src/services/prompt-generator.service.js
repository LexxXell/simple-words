/**
 * Creates a prompt to send to the GPT-3 model to generate a definition of a word in a given language.
 *
 * The prompt should be a complete sentence that is a request to the GPT-3 model to generate a definition of a word.
 * The prompt should be in the same language as the requested definition.
 *
 * @param {string} word - The word to generate a definition for.
 * @param {string} language - The language to generate the definition in.
 * @return {string} The prompt to send to the GPT-3 model.
 */
function createPrompt(word, language) {
    if (language === 'ru') {
        return `Дай простое определение слова "${word}" на русском языке.`;
    } else {
        return `Give a simple definition of the word "${word}" in English.`;
    }
}

module.exports = createPrompt;
