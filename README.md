# iXpeditie README #

### What is this repository for? ###

* This is the frontend and backend of the iXpeditie app we are making for iXperium. This is the tablet client that connects to the Smartfox 2X server
* Version 1.3

### How do I get set up? ###
  
#### Server ####
* See the desktop repo for the server setup

#### Ionic ####
* Clone this repo
* Install node from https://nodejs.org/en/download/
* Npm install -g ionic cordova (You might need administrator rights!)
* Npm install
* Cordova platform add android
* Run ionic build
* Source code can be found in platforms/ios and platforms/android. Open in it
  as you would code for any other app.
* Run ionic serve to run locally

#### Deployment ####
* In the src/assets/javascript/connection.js replace in the function autoConnect() config.host from localhost to the ip adress of the smartfox server
* Install the app on the device
      * https://ionicframework.com/docs/intro/deploying/
* Connect the mobile device to the same internet network as the server (via connectify)