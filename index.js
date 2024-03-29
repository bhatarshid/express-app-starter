#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const createAppStr = require('./src/create-app');
const folderStructure = require('./src/folder-structure');

// Create the folders and files
let currentDir = process.cwd();

// Extract command-line arguments
const args = process.argv.slice(2);
if (args.length === 1) {
    currentDir = path.join(currentDir, args[0]);
    fs.mkdirSync(currentDir, { recursive: true });
}

createAppStr(currentDir, folderStructure);

console.log('Project structure created successfully!');