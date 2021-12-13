const http = require("http");
const HOST = "http://localhost";
const PORT = 3000;
const stats = require("./ram_usage");

http
  .createServer((req, res) => {
    let url = req.url;
    if (url === "/stats") {
      res.end(JSON.stringify(stats));
    }
  })
  .listen(PORT, () => console.log(`Server is Running on: ${HOST}:${PORT}`));
