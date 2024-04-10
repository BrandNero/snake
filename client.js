const net = require("net");
const connect = function() {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");
  //message
  conn.on("connect", () => {
    console.log("Successfully connected to game server!");
    conn.write("Name: SR");
  });
  //take is in data
  conn.on("data", (data) => {
    console.log(data);
  });
  
  return conn;
};

module.exports = connect;