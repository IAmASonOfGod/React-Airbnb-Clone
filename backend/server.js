const jsonServer = require("json-server");
const auth = require("json-server-auth");
const cors = require("cors"); 
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();


server.use(cors({ origin: "https://majestic-macaron-bc4906.netlify.app" }));

server.use(middlewares);


server.db = router.db;
server.use(auth);

server.use(router);

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});
