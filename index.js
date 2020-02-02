const express = require("express");
const app = express();
//const { isPrime } = require("./worker");
const { fork } = require("child_process");

app.get("/", async (req, res) => {
  let worker = fork("./worker");
  worker.send(222);
  worker.on("message", response => {
    res.send({ response });
  });
});

app.get("/simple", (req, res) => {
  res.send("Done exexuting /simple");
});

app.listen(3000, () => {
  console.log("App listening on port 3000!");
});
