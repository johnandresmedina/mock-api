const jsonServer = require("json-server");
const mockData = require("./mock-data");

const PORT = process.env.PORT || 7777;

const server = jsonServer.create();

// You can read a configuration from a json file
//const dbJson = jsonServer.router("db.json");
////server.use("/api", dbJson);

const data = jsonServer.router(mockData);
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use("/api", data);
server.listen(PORT, () =>
  console.log(`JSON Server is running on: http://localhost:${PORT}`)
);
