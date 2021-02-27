const jsonServer = require("json-server");

const PORT = process.env.PORT || 7777;

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);
server.listen(PORT, () =>
  console.log(`JSON Server is running on: http://localhost:${PORT}`)
);
