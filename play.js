// import files from input, and client.
const connect = require('./client.js');
const setupInput = require('./input.js');

// show connection status:
console.log("Connecting ...");

//run input setup and pass the connect object from client.js as its arg:
setupInput(connect);
