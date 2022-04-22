let connection = require('./client.js');

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
  if (key === "w" || key === "W") {
    console.log(`${key} pressed - Move up`);
    connection.write('Move: up');
  } else if (key === "s" || key === "S") {
    console.log(`${key} pressed - Move down`);
    connection.write('Move: down');
  } else if (key === "a" || key === "A") {
    console.log(`${key} pressed - Move left`);
    connection.write("Move: left");
  } else if (key === "d" || key === "D") {
    console.log(`${key} pressed - Move right`);
    connection.write("Move: right");
  } else if (key === '\u0003') { // exit with control+c
    console.log(`Control+C pressed - disconnecting from server`);
    process.exit();
  }
};

module.exports = setupInput;