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
  // perhaps write an if statement? or is it going straight to the return statement and skipping the timeout since it happens later? Ooh.. perhaps write a new function for the disconnect?
  // conn.on("timeout", () => {
  //   console.log("you ded cuz you idled");
  // });

  conn.setTimeout(5000, ()=> {
    console.log(`line21`);
    conn.destroy();
  });
  return conn;
};

console.log("Connecting ...");
connect();