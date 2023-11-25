const fs = require("fs");
const server = require("http").createServer();

server.on("request", (req, res) => {
  // solution 1
  //   fs.readFile("test-file.txt", "utf-8", (err, data) => {
  //     if (err) console.log(err);
  //     res.end(data);
  //   });

  //solution2
  const readable = fs.createReadStream("text-file.txt");
  readable.on("data", (chunk) => {
    res.write(chunk);
  });
});

server.listen(8000, () => {
  console.log("Server is listening on port 8000...");
});
