const { typeOf } = require("mathjs");
const { generarTranspuesta } = require("../utils/operaciones");

exports.matrices = (req, res) => {
    let { url } = req;

    let n = url.split("/")[1];

    if(n!='favicon.ico') {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.write(generarTranspuesta(n));
        res.end();
    }
    
};