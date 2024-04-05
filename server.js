const http = require("http");
const app = require("./app/app");
const PORT = require("./config/config").app.port;
const chalk = require("chalk");

const server = http.createServer(app);
server.listen(PORT, () => {
  console.log(
    chalk.black.bgBlueBright(`server is running at http://localhost:${PORT}`)
  );
});
