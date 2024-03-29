# Express App Starter

Express App Starter is a Node.js package that allows you to quickly generate a predefined folder structure for your projects.

## Installation

You can install the package globally to use it as a command-line tool:
```bash
npm install -g express-app-starter
```
Alternatively, you can install it locally in your project:
```bash
npm install express-app-starter
```
## Usage
To generate the folder structure for your project, simply run the following command:
```bash
express-app-starter [folderName]
```
or, you can run the following command in your terminal:
```bash
npx express-app-starter [folderName]
```
Replace [folderName] with the name of the folder where you want to create the folder structure. If no folder name is provided, the structure will be created in the current directory.

## Folder Structure
The generated folder structure includes the following directories and files:
```markdown
- src
  - config
    - db-connect.js
    - index.js
  - controllers
    - index.js
  - models
    - index.js
  - routes
    - index.js
  - services
    - index.js
  - middlewares
    - index.js
  - utils
    - index.js
    - AppError.js
- server.js
- .gitignore
- .env
- package.json
```

## Sample Code
The package also includes sample code snippets that can be found in the src directory:

- db-connect.js: Sample code for connecting to a MongoDB database using Mongoose.
- AppError.js: Sample code for creating a custom error class.
- server.js: Sample code for setting up an Express.js server.
- .env: Sample environment configuration file.
- .gitignore: Sample Git ignore file.
- package.json: Sample package.json file with dependencies and scripts.
Contributing
Contributions are welcome! If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request on GitHub.

## License
This project is licensed under the MIT License - see the LICENSE file for details.