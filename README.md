# Browzzin Coding Challenge

* Date: 18th April, 2017
* Author: Colin Burns
* Email: ccburns@gmail.com

## Requirements
This project uses GULP to combine, minify and build the final source code. See **gulpfile.js** in the project root directory for more information about the required gulp packages.

## Directory Structure
* `/app` // This directory holds the source code for the website
* `/dist` // This directory holds the final files that has been built using the `gulpfile.js` workflow. These are the final files that should be used in production.
* `/node_modules` // These are the modules required for the gulp workflow used in this project
* `gulfile.js` // Contains the `gulp` workflow
* `package.json` // Stores all the node requirements for this project

## Installation Instructions
This project can be installed in several ways, either using `gulp` or using a standard web server.

### Standard Web server
Either clone or download this repository. If you are using a standard webserver then copy the files and directories that are in the `/dist` directory and place them in your webroot. Open your web browser and visit http://localhost or enter the URL that accesses your webroot.

**NOTE: This can not be run by simply double clicking the index.html file in the file browser because the application uses AJAX to load various bit of content**

### Gulp
If you have all the required gulp packages installed you should simply be able to run the command `gulp` from within the root directory and it will spawn a browser window running the app in the browser. The url will be something like http://localhost:3000. When you run the `gulp` command the URL will be displayed in the terminal output if your browser window doesn't load the site.



## Notes about the work completed


## Bugs
