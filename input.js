// import client and constants
let connection = require('./client.js');
let constants = require("./constants.js");

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function(key) {
  // movement keys:
  if (key === "w" || key === "W") {
    connection.write(constants.moveUP);
  } else if (key === "s" || key === "S") {
    connection.write(constants.moveDOWN);
  } else if (key === "a" || key === "A") {
    connection.write(constants.moveLEFT);
  } else if (key === "d" || key === "D") {
    connection.write(constants.moveRIGHT);

  // canned messages:
  } else if (key === "g" || key === "G") {
    connection.write(constants.sayGG);
  } else if (key === "t" || key === "T") {
    connection.write(constants.sayTHX);
  } else if (key === "f" || key === "F") {
    connection.write(constants.sayGLHF);

    // disconnect from server:
  } else if (key === '\u0003') {
    console.log(`Control+C pressed - disconnecting from server`);
    process.exit();
  }
};

module.exports = setupInput;