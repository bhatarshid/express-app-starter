#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const createAppStr = require('./src/create-app');
const folderStructure = require('./src/folder-structure');

// Create the folders and files
const currentDir = process.cwd();

createAppStr(currentDir, folderStructure);

console.log('Project structure created successfully!');