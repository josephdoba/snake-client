const net = require("net"); // Imports nodes' net module.
const {IP, PORT} = require("./constants"); // imports IP and Port from our constants.js object

// establishes a connection with the game server:
const connect = function(ip, port) {
  const conn = net.createConnection({
    host: ip,
    port: port
  });

  // interpret incoming data as text with correct encoding:
  conn.setEncoding("utf8");

  // On connection, confirm it connected
  conn.on("connect", () => {
    conn.write('Name: SNK');
    console.log("Successfully connected to game server");
  });

  // when there is no input for 5 seconds, disconnect the client from the server
  conn.setTimeout(5000, ()=> {
    console.log(`You afk'd for 5 seconds so you lost. Git gud scrub`);
    process.exit();
  });
  return conn;
};

// let connection = connect();
// module.exports = connection;
module.exports = connect(IP, PORT);