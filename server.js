const jsonServer = require('json-server');
const PORT = process.env.PORT || 3002;

const server = jsonServer.create();

const router = jsonServer.router('./db.json');

const defaults = jsonServer.defaults();

server.use(defaults);
server.use(router);
server.listen(PORT);