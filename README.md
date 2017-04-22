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
This project can be installed in several ways, either using `gulp` or simply navigate to the `/dist/` directory and click on the `index.html` file which will open in your browser. All implemented functionality should work in the browser without a web server.

### Gulp
If you have all the required gulp packages installed you should simply be able to run the command `gulp` from within the root directory and it will spawn a browser window running the app in the browser. The url will be something like http://localhost:3000. When you run the `gulp` command the URL will be displayed in the terminal output if your browser window doesn't load the site.

## Notes about the work completed
FONTS & COLOUR: I'm not 100% sure I have used the fonts correctly as I find it difficult to distinguish these fonts via a JPEG. If I had the source files I would be able to ensure that the fonts and colours area correctly displayed.

SELECT BOXES: Select boxes on the Cart don't match the design.

POPOVER: The popover has been implemented but it is not responsive for mobile devices as I was unsure of the design that I should implement.
