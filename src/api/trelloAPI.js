require('dotenv').config();
const axios = require('axios');

// Create a new list on Trello board
const createList = async(listName) => {
    const url = `https://api.trello.com/1/lists`;
    const response = await axios.post(url, null, {
        params: {
            name: listName,
            idBoard: process.env.TRELLO_BOARD_ID,
            key: process.env.TRELLO_API_KEY,
            token: process.env.TRELLO_OAUTH_TOKEN,
        }
    });
    return response.data;
};

module.exports = { createList };