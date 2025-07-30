const { createList } = require('./api/trelloAPI');
const { getFormattedDate } = require('./utils/dateUtils');

// Main function to automate list creation
const automateListCreation = async() => {
    const today = getFormattedDate(); // Get today's date
    await createList(today); // Create a list with today's date as the name
    console.log(`Created a new list with the name: ${today}`);
};

// Run the function
automateListCreation();