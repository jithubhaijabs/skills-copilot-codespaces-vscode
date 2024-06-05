// Create web server
// Create a new web server with the HTTP module
// The server listens on port 3000 and sends a response to all requests with the text "hello world"

const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Hello World\n');
});

server.listen(3000, () => {
  console.log('The server is listening on port 3000 now');
});
// Run the server
// Run the server with the node command

// $ node comments.js
// Output
// The server is listening on port 3000 now
// Open a web browser and navigate to http://localhost:3000. You should see the text "Hello World" displayed in the browser window.

// To stop the server, press Ctrl + C in the terminal where the server is running. 
// This will stop the server and return you to the command prompt.

// Summary
// In this guide, you created a simple web server with Node.js using the HTTP module. 
// The server listens on port 3000 and sends a response to all requests with the text "hello world". 
// You also learned how to run the server and how to stop it. 
// You can now build on this knowledge to create more complex web servers with Node.js.

// Congratulations, you have created a simple web server with Node.js! Happy coding! 🎉
// Next steps
// Check out the following resources to learn more about Node.js:

// Node.js documentation - The official Node.js documentation.
// Node.js on MDN - The Mozilla Developer Network (MDN) provides tutorials, references, and guides for web developers.
// Node.js on W3Schools - W3Schools offers tutorials, references, and examples for web developers.
// Node.js on Stack Overflow - Stack Overflow is a question and answer site for professional and enthusiast programmers.
// Node.js on GitHub - The Node.js GitHub repository contains the source code for Node.js.
// Node.js on Reddit - The Node.js subreddit is a forum for discussions about Node.js.
// Node.js on Twitter - Follow the official Node.js Twitter account for the latest news and updates.
// Node.js on YouTube - The Node.js YouTube channel features tutorials, talks, and other videos about Node.js.
// Node.js on LinkedIn - Follow the official Node.js LinkedIn page for news, updates, and articles about Node.js.
// Node.js on Facebook - Follow