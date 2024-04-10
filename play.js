const connect = require("./client");
// establishes a connection with the game server
console.log("Connecting ...");

const setupInput = function() {
  const handleUserInput = function(data) {
    if (data === '\u0003') {
      console.log("GoodBye!");
      process.exit();
    }
  };
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};
connect();
setupInput();