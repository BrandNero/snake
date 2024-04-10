const connect = require("./client");

const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};
const handleUserInput = function(data) {
  if (data === '\u0003') {
    console.log("GoodBye!");
    process.exit();
  }
  if (data === "w") {
    connect.write("Move: up");
  }
  if (data === "a") {
    connect.write("Move: left");
  }
  if (data === "s") {
    connect.write("Move: down");
  }
  if (data === "d") {
    connect.write("Move: right");
  }
};
module.exports = setupInput;