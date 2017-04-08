var express = require('express');
var app = express();
var settings = require('./settings.js');
var mongoose = require('mongoose');

var mongoCreds = require('./config/mongoConfig');

// Connect To Settings Database
var mongoConnection = 'mongodb://' + mongoCreds.user + ':' + mongoCreds.password + '@' + mongoCreds.url;
mongoose.connect(mongoConnection, function (err, res) {
  if (err) {
    console.log('ERROR connecting to: ' + mongoConnection + '. ' + err);
  } else {
    console.log("[Socket] MongoDB Connected.");
  }
});
var settingsDB = require('./models/settings');

app.get('/', function (req, res) {
  settingsDB.findOne({}, function (e, r) {
    if (e || !r || r.length == 0){
      console.log("Serving cold settings");
      res.send(settings);
    }else{
      console.log("Serving hot settings");
      res.send(r);
    }
  });
  
})

var port = (process.env.PORT || 3030)
app.listen(port, function () {
  console.log("------------------------------------------------------------------------------------");
  console.log("-------       Sportimo v2.0 Settings Server 1.0.0 listening on port %d        --------", port);
  console.log("-------       Environment: " + process.env.NODE_ENV);
  console.log("------------------------------------------------------------------------------------");
});