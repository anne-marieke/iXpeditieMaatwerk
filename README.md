# iXpeditie README #

### What is this repository for? ###

* This is the frontend and backend of the iXpeditie app we are making for iXperium. This is the tablet client that connects to the Smartfox 2X server
* Version 0.1

### How do I get set up? ###
  
#### Server ####
* download the smartfox 2x server from http://www.smartfoxserver.com/download/sfs2x#p=installer
* install the smartfox server
* launch the smartfox admin panel, default location at localhost:8080/admin/, and navigate to 'Server Configuration' and add the soccet address 192.168.0.38 with port 9933 and the TCP protocol
* navigate to 'Server Configuration' -> 'Web server' and make sure that all the sliders are turned on

#### Ionic ####
* npm install -g ionic cordova (You might need administrator rights!)
* npm install
* cordova platform add android
* cordova platform add ios
* run ionic build
* source code can be found in platforms/ios and platforms/android. Open in it
  as you would code for any other app.
* Connect the mobile device to the same internet network as the server