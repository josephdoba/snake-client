const net = require("net"); // Imports nodes' net module.
const {IP, PORT} = require("./constants"); // imports IP and Port from our constants.js object

// Establishes a connection with the game server:
const connect = function(ip, port) {
  const conn = net.createConnection({
    host: ip,
    port: port
  });
  // Interpret incoming data as text with correct encoding:
  conn.setEncoding("utf8");
  // On connection, confirm it connected
  conn.on("connect", () => {
    conn.write('Name: JD');
    console.log("connected...");
  });
  // Disconnects the client from the server if no input was detected for 10 seconds.
  conn.setTimeout(5000, ()=> {
    console.log(`5 seconds of idle time - Disconnecting from server`);
    process.exit();
  });
  return conn;
};

// allows play.js and input.js to connect to this file.
module.exports = connect(IP, PORT);