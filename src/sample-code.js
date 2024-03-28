dbConnect = `
const mongoose = require('mongoose');

// Connect to your MongoDB database
function ConnectDb(){
    mongoose.connect(process.env.DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        dbName: process.env.DB_NAME,
    })
        .then(() => {
            console.log('Connected to MongoDB');
        })
        .catch((error) => {
            console.error('MongoDB connection error:', error);
        });
}

module.exports = ConnectDb;
`
AppError = `
class AppError extends Error {
    constructor(message,statuscode){
        super(message);
        this.statusCode = statuscode;
        this.explanation = message;
    }
}

module.exports = AppError
`
server = `
const express = require('express')
const app = express()
const dbConnect = require('./src/config/db-connect')
const cors = require('cors');

// middlewares
app.use(cors({
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'HEAD', 'OPTIONS'],

    allowedHeaders: ['Content-Type', 'Origin', 'X-Requested-With', 'Accept', 'x-client-key', 'x-client-token', 'x-client-secret', 'Authorization']
}))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(process.env.PORT, () => {
    dbConnect();
    console.log('Server is running on port '+ process.env.PORT);
})
`
env = `
PORT=3000
DB_URI=http://localhost:27107
DB_NAME=database_name
`
gitignore = `
node_modules/
.env
`
packageJson = `
{
    "name": "application-name",
    "version": "1.0.0",
    "description": "To make it easy for you to get started with GitLab, here's a list of recommended next steps.",
    "main": "server.js",
    "scripts": {
      "start": "node --require dotenv/config server.js"
    },
    "repository": {
      "type": "git"
    },
    "author": "",
    "license": "ISC",
    "dependencies": {
      "cors": "^2.8.5",
      "express": "^4.18.2",
      "mongoose": "^7.5.1"
    },
    "devDependencies": {
      "dotenv": "^16.3.1",
      "nodemon": "^3.0.1"
    }
  }
  
`

module.exports = {
    dbConnect,
    AppError,
    server,
    env,
    gitignore,
    packageJson
}