const fs = require("fs");
const server = require("http").createServer();

server.on("request", (req, res) => {
  // solution 1 normal file presentation
  //   fs.readFile("test-file.txt", "utf-8", (err, data) => {
  //     if (err) console.log(err);
  //     res.end(data);
  //   });
  //solution2 streams for large data
  //   const readable = fs.createReadStream("test-file.txt");
  //   readable.on("data", (chunk) => {
  //     res.write(chunk);
  //   });
  //   readable.on("end", () => {
  //     res.end();
  //   });
  //   readable.on("error", (err) => {
  //     console.log(err);
  //     res.statusCode(500);
  //     res.end("File not found");
  //   });

  //solution 3
  const readable = fs.createReadStream("test-file.txt");
  readable.pipe(res);
  // readableSource.pipe(writeableDest)
});

server.listen(8000, () => {
  console.log("Server is listening on port 8000...");
});
