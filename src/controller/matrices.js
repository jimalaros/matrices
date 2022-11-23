const { generarTranspuesta } = require("../utils/operaciones");

exports.matrices = (req, res) => {
    let { url } = req;

    console.log(url);
    let query = url.split("?")[1];
    let n = query.split("=")[1];
    console.log(n)

    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write(generarTranspuesta(n));
    res.end();
};