// importing here triggers it to load up devices and will show errors faster
var dm = require('./services/deviceManager')

var settings = require('./config/config')

var http = require('http');
var express = require('express');
var application = express();
var bodyParser = require('body-parser');
var routeConfig = require('./routes/route-config');
var settings = require('./config/config.json');

function configureWorker(application) {
  configureApplication(application);
  configureRoutes(application);
  
  startServer(application);
}

function configureApplication(application) {
  application.use(bodyParser.json());

  application.use(function(req, res, next) {
    res.set('Cache-Control', 'no-cache, no-store, must-revalidate');
    res.set('Pragma', 'no-cache');
    res.set('Expires', '0');
    res.type('application/json');
    next();
  });
}

function configureRoutes(application) {
  routeConfig.registerRoutes(application);
}

function startServer(application) {
  var server = http.createServer(application);

  server.listen(settings.workerPort, settings.hostName, settings.queueLength, function() {
    console.log('listening at http://%s:%s', settings.hostName, settings.workerPort);
  });
}

configureWorker(application);