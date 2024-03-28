const folderStructure = {
    src: {
        config: ['db-connect.js', 'index.js'],
        controllers: ['index.js'],
        models: ['index.js'],
        routes: ['index.js'],
        services: ['index.js'],
        middlewares: ['index.js'],
        utils: ['index.js', 'AppError.js'],
    },
    outDir: ['server.js', '.gitignore', '.env', 'package.json']
}

module.exports = folderStructure;