require('dotenv').config();

const server = require("./api/server.js");

const PORT = process.env.PORT || 8000;

const greeting = "Hi, Samantha!";
server.listen(PORT, () => {
  console.log(
    `\n*** ${greeting} Server Running on http://localhost:${PORT} ***\n`
  );
});