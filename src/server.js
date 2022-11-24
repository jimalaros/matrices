const http = require("http");

const { matrices } = require("./controller/matrices");

exports.server = http.createServer((req, res) => {
    const { url, method } = req;

    // Router
    switch (method) {
        case "GET":
            if (url === "/") {
                res.header('Access-Control-Allow-Origin', '*');
                res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
                res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
                res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
                res.writeHead(200, { "Content-Type": "text/plain" });
                res.write("Bienvenido");
                res.end();
            }
            matrices(req, res);
            break;
        default:
            res.writeHead(404, { "Content-Type": "text/plain" });
            res.write("404 Not Found");
            res.end();
    }
});