const http = require("http");
const { generarTranspuesta } = require("./utils/operaciones");

const matrices = (req, res) => {
    let { url } = req;
    
    let n = url.split(":")[1];

    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write(generarTranspuesta(n));
    res.end();
};

const server = http.createServer((req, res) => {
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

server.listen(3000);
console.log("Server on port", 3000);
