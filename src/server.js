const http = require("http");

const { matrices } = require("./controller/matrices");

exports.server = http.createServer((req, res) => {
    const { url, method } = req;

    // Router
    switch (method) {
        case "GET":
            if (url === "/") {
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