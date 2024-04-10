const connect = require("./client");

let connectVar = connect();

const setupInput = function() {
  const handleUserInput = function(data) {
    if (data === '\u0003') {
      console.log("GoodBye!");
      process.exit();
    }
    if (data === "w") {
      console.log(`Up`);
      connectVar.write("Move: up");
    }
    if (data === "a") {
      console.log(`Left`);
      connectVar.write("Move: left");
    }
    if (data === "s") {
      console.log(`Down`);
      connectVar.write("Move: down");
    }
    if (data === "d") {
      console.log(`Right`);
      connectVar.write("Move: right");
    }
    return data;
  };
  
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
  
};
module.exports = setupInput;