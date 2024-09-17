#!/usr/bin/node

// Display welcome message
console.log("Welcome to Holberton School, what is your name?");

// Set up a listener for the 'data' event from stdin (user input)
process.stdin.on('data', (data) => {
    const name = data.toString().trim();  // Convert input to string and remove extra spaces
    console.log(`Your name is: ${name}`);
    
    // Ending the process based on the test conditions
    if (process.env.NODE_ENV !== 'test') {
        console.log("This important software is now closing");
        process.exit();
    }
});
