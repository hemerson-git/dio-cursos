const http = require("http");
const HOST = "http://localhost";
const PORT = 3000;

http
  .createServer((req, res) => {
    res.end("<h1>Server Working!!</h1>");
  })
  .listen(PORT, () => console.log(`Server is Running on  ${HOST}:${PORT}`));
