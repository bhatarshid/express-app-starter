const fs = require('fs');
const path = require('path');

const { dbConnect, AppError, server, env, gitignore, packageJson } = require('./sample-code');

function createFolderStructure(parentDir, folderStr) {
    for(let folderName in folderStr) {
        if(folderName === 'outDir') {
            for(let fileName of folderStr[folderName]) {
                let sampleCode = '';
                
                if(fileName === 'server.js')            sampleCode = server;
                else if(fileName === '.env')            sampleCode = env;
                else if(fileName === '.gitignore')      sampleCode = gitignore;
                else if(fileName === 'package.json')    sampleCode = packageJson;
                fs.writeFileSync(path.join(parentDir, fileName), sampleCode);
            }
        }
        else {
            const folderPath = path.join(parentDir, folderName);
            fs.mkdirSync(folderPath, { recursive: true });

            if(Array.isArray(folderStr[folderName])) {
                for (let fileName of folderStr[folderName]) {
                    let sampleCode = ''
                    if(fileName === 'db-connect.js')        sampleCode = dbConnect;
                    else if(fileName === 'AppError.js')     sampleCode = AppError;
                    fs.writeFileSync(path.join(folderPath, fileName), sampleCode);
                }
            }
            else {
                createFolderStructure(folderPath, folderStr[folderName]);
            }
        }
    }    
}

module.exports = createFolderStructure;