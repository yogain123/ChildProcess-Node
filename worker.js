process.on("message", data => {
  console.log(data, "From Worker");

  for (let i = 0; i < 1000000000; i++) {
    Math.random();
  }
  process.send(222);
  process.exit();
});
