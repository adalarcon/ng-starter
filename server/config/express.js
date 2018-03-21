const express 	 = require('express');
const bodyParser = require('body-parser');
const path       = require('path');
const appRoot    = require('app-root-path');
const api        = require('../routes/api');
const app        = express();

// static files
console.info("[app] Setting static directory ");
app.use(express.static(path.join(appRoot.path, 'dist')));
app.use(express.static(path.join(appRoot.path, 'public')));
app.use(express.static(path.join(appRoot.path, 'documentation')));

// CORS
console.info("[app] CORS enabled ");
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE");
  next();
});

// Body parser
console.log("[app] Body parser ");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

// Routes
app.get('/',  function(req, res) {
	res.send("Control Escolar APIs");
});

// Routes API file for interacting with MongoDB
console.log("[app] Routes APIs ");
app.use(api);

// setting port
app.set('port', process.env.PORT || 3000);

module.exports  = app;
