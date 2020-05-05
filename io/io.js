module.exports.decodeHexFileContent = (filePath) => {
    return new Promise((resolve, reject) => {
        const file = require('fs').readFileSync(filePath);
        const fileBuffer = Buffer.from(file, 'base64').toString('utf8');
        const fileContent = Buffer.from(fileBuffer, 'hex').toString('utf8');
        //Il y a certainement un moyen plus rapide de le faire.
        resolve(fileContent);
    });
}