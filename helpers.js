const axios = require('axios');

const { OpenAI } = require('openai');

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

async function correctGrammar(text) {
    try {
        const completion = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: `Fix grammar for: ${text}` }]
        });
        return completion.choices[0].message.content;
    } catch (error) {
        console.error("Error correcting grammar:", error);
        return "Sorry, an error occurred while fixing grammar.";
    }
}

module.exports = { correctGrammar };


async function getUserInfo(chatId) {
    // Placeholder for user data
    return {
        username: "SampleUser",
        profilePicUrl: "https://via.placeholder.com/150"
    };
}

module.exports = { correctGrammar, getUserInfo };
