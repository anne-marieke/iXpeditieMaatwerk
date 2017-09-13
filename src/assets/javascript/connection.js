var sfs;

function autoConnect () {
    // Create configuration object
    var config = {};
    config.host = '192.168.0.38';
    config.port = 8080;
    config.debug = true;
    config.useSSL = false;

    // Create SmartFox client instance
    sfs = new SFS2X.SmartFox(config);

    // Set logging
    sfs.logger.level = SFS2X.LogLevel.DEBUG;
    sfs.logger.enableConsoleOutput = true;
    sfs.logger.enableEventDispatching = false;

    sfs.logger.addEventListener(SFS2X.LoggerEvent.DEBUG, onDebugLogged, this);
    sfs.logger.addEventListener(SFS2X.LoggerEvent.INFO, onInfoLogged, this);
    sfs.logger.addEventListener(SFS2X.LoggerEvent.WARNING, onWarningLogged, this);
    sfs.logger.addEventListener(SFS2X.LoggerEvent.ERROR, onErrorLogged, this);

    // Add event listeners
    sfs.addEventListener(SFS2X.SFSEvent.CONNECTION, onConnection, this);
    sfs.addEventListener(SFS2X.SFSEvent.CONNECTION_LOST, onConnectionLost, this);

    sfs.connect();
}

//------------------------------------
// LOGGER EVENT HANDLERS
//------------------------------------

// The dispatched logging messages should be printed in a dedicated debug panel in the application interface
// (because the logger already prints to the console on its own, unless console output is deactivated)

function onDebugLogged(event)
{
    console.log("DEBUG MESSAGE DISPATCHED:\n" + event.message);
}

function onInfoLogged(event)
{
    console.log("INFO MESSAGE DISPATCHED:\n" + event.message);
}

function onWarningLogged(event)
{
    console.log("WARNING MESSAGE DISPATCHED:\n" + event.message);
}

function onErrorLogged(event)
{
    console.log("ERROR MESSAGE DISPATCHED:\n" + event.message);
}

//------------------------------------
// SFS EVENT HANDLERS
//------------------------------------

function onConnection(event)
{
    if (event.success)
    {
        trace("Connected to SmartFoxServer 2X!");
    }
    else
    {
        trace("Connection failed: " + (event.errorMessage ? event.errorMessage + " (" + event.errorCode + ")" : "Is the server running at all?"), true);
    }
}

function onConnectionLost(event)
{
    trace("I was disconnected; reason is: " + event.reason);
}

//------------------------------------
// OTHER METHODS
//------------------------------------

function trace(txt, showAlert)
{
    console.log(txt);

    if (showAlert)
        alert(txt);
}