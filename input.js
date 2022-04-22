const connection = require('./client.js');

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
  if (key === "w" || key === "W") {
    connection.write('Move: up');
  } else if (key === "s" || key === "S") {
    connection.write('Move: down');
  } else if (key === "a" || key === "A") {
    connection.write("Move: left");
  } else if (key === "d" || key === "D") {
    connection.write("Move: right");
  } else if (key === '\u0003') { // exit with control+c
    process.exit();
  }

  // or if control c close program
};

module.exports = setupInput;