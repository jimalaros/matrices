const { typeOf } = require("mathjs");
const { generarTranspuesta } = require("../utils/operaciones");

exports.matrices = (req, res) => {
    let { url } = req;

    let n = url.split("/")[1];

    if(n!='favicon.ico') {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
        res.writeHead(200, { "Content-Type": "application/json" });
        res.write(JSON.stringify(generarTranspuesta(n)));
        res.end();
    }
    
};