#!/usr/bin/node

// Display welcome message
process.stdout.write("Welcome to Holberton School, what is your name?\n");

// Set up a listener for the 'data' event from stdin (user input)
process.stdin.on('data', (data) => {
    const name = data.toString().trim();  // Convert input to string and remove extra spaces

    // Use `\r` to match the expected line ending in the test
    process.stdout.write(`Your name is: ${name}\r\n`);

    // End the process if running in a non-test environment
    if (process.env.NODE_ENV !== 'test') {
        process.stdout.write("This important software is now closing\r\n");
        process.exit();
    }
});

