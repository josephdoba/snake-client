// import files from input, and client.
const connect = require('./client.js');
const setupInput = require('./input.js');

//run input setup and pass the connect object from client.js as its arg:
setupInput(connect);
