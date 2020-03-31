const server = require( 'express' )();
const middleware = require( './middleware' );

server.use( middleware );

server.get('/', (_, res) => res.status(200).json({ message: "Server Running..." }));

module.exports = server;