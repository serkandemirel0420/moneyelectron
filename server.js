
const Hapi = require('@hapi/hapi');
 
server = Hapi.server({
    port: 3000,
    host: 'localhost'
});

server.start();
    console.log('Server running on %s', server.info.uri);


process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});


server.route({
    method: 'GET',
    path: '/',
    handler: (request, h) => {
        return 'CRYPTO and FOREX.';
    }
});

