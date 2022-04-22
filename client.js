const net = require("net");
// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: 'localhost', // IP address here,
    port: 50541// PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  // when connection is made:
  conn.on("connect", () => {
    console.log("Connection established!");
  });
  // when there is no input for 5 seconds, disconnect the client from the server
  conn.setTimeout(5000, ()=> {
    console.log(`line21`);
    conn.destroy();
  });
  return conn;
};
module.exports = connect;