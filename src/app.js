const express = require('express');
const { getDefinition } = require('./services/definition.service');

// Create an Express app
const app = express();

// Define routes
app.get('/:word', async (req, res) => {
    const word = req.params.word;
    const language = req.query.ln || 'en';
    const definition = await getDefinition(word, language);
    res.json({ word, language, definition });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
