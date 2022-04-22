// import functions from client.js
const connection = require('./client');
// show connection status:
console.log("Connecting ...");


// setup input from player:
const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function(key) {
  console.log(key);
  if (key === "w") {
    connection.write('Move: up');

  } else if (key === '\u0003') {
    process.exit();
  }
  // write if key is w, go up

  // or if control c close program


};

// connect();
setupInput();
