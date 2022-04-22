const net = require("net");
// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: 'localhost', // IP address here,
    port: 50541// PORT number here,
  });

  // interpret incoming data as text with correct encoding:
  conn.setEncoding("utf8");
  // when connection is made:
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
module.exports = connect();