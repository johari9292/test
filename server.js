const express = require('express');
const favicon = require('express-favicon');
const path = require('path');
var config = require("./db/confiq");

const cors = require('cors');
const popupController = require('./Controller/popupController');
const newsletterController = require('./Controller/newsletterController')
const http = require("http");

const port = process.env.PORT || 8080;
const app = express();
app.use(favicon(__dirname + '/build/digna_icon.ico'));
app.use(cors());
app.options('*', cors());
const server = http.createServer(app);
// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));
app.get('/ping', function (req, res) {
 return res.send('pong');
});



app
  .route('/addpopup/:firstname/:lastname/:email/:phone/:job/:question')
  .get(popupController.addpopup);

 app
  .route('/addnewsletter/:name/:emailsub')
  .get(newsletterController.addnewsletter); 
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
server.listen(port, () => console.log(`Listening on port ${port}`))