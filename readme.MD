# Eclo App View

Eclo App View is a web application, that allows the user to view and manage the settings and variable of an Eclo Application. 


##Getting started:
- Install node.js
- Install: Yeoman, Bower and Grunt: **npm install -g yo grunt-cli bower**
- Run the command: npm install (to install grunt and other stuff locally).
- Download the dependencies using Bower: run the command: bower install (you can run bower list to see the missing dependencies).


##Prerequisite:
- An eclo application released.
- An activated system using eclo.
- A default client ID (it can be changed in **config.js** file).
- By default the application use auto-branch server, you can change the server under **config.js** file.



Running the application:

- Run the command: grunt server (it will open a new window in your browser just ignore it or close it)
- You must connect Eclo App View to your system, to do so, use this url pattern: **{yourLocalServer}/#/connect/{yourSystemUid}/application/{applicationUid}**
- Accept the connection authorization and enjoy :)






---------------------------------------------------------------
TODO: Run the unit tests.
TODO: Fix aProvider bug in minified version.
TODO: Improve Readme File.