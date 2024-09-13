const jsonServer = require("json-server");
const auth = require("json-server-auth");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

// Set up default middlewares (logger, static, cors, no-cache)
server.use(middlewares);

// Set up authentication middleware
server.db = router.db;
server.use(auth);
server.use(router);

// Listen on port 5000
server.listen(5000, () => {
  console.log("JSON Server is running on port 5000");
});
