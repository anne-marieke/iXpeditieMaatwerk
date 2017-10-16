# iXpeditie README #

### What is this repository for? ###

* This is the frontend and backend of the iXpeditie app we are making for iXperium. This is the tablet client that connects to the Smartfox 2X server
* Version 1.1

### How do I get set up? ###
  
#### Server ####
* Download the smartfox 2x server from http://www.smartfoxserver.com/download/sfs2x#p=installer
* Install the smartfox server (installing as service not recomended for development)
* Launch the smartfox admin panel, default location at localhost:8080/admin/
* Login with the default credentials -> host: 127.0.0.1, port: 9933, username: sfsadmin, password: sfsadmin
* In the admin panel navigate to 'Server Configuration' -> 'Web server' and make sure that all the sliders are turned on (don't forget to submit the changes and restart the server)

#### Ionic ####
* npm install -g ionic cordova (You might need administrator rights!)
* npm install
* cordova platform add android
* cordova platform add ios
* run ionic build
* source code can be found in platforms/ios and platforms/android. Open in it
  as you would code for any other app.
* Connect the mobile device to the same internet network as the server