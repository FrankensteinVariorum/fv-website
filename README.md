This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Installation
* On your computer, install Node.js. Go to <https://nodejs.org>, and follow the instructions for your system (Mac, PC, Linux). 
* Make sure it's added to your PATH environment variable in either environment. (Windows lets you set this up in the installation process.)
* The Node script will complete installation. Also, let Node automatically install what tools it needs. 

## Available Scripts

In the project directory, you can run:

### `npm install`

At this point you may get an error indicating a problem with downloading node-sass.

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

=================
In case you need to kill the local process, on Windows in the Git Bash shell, first, view the processes running on port 3000 with:

`netstat -ano | findstr :3000`

Next, locate the PID number, which is the string of numbers all the way on the right. Kill the process with:

`taskill //PID <PIDnumber> //F`

=================

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
