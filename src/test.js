require('dotenv').config();
const getGptDefinition = require('./clients/openai.client');


getGptDefinition("What does the word 'hello' mean?")