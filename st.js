var bodyParser = require('body-parser');
var express = require('express');
var OAuthServer = require('express-oauth-server');

var app = express();

oauth = new OAuthServer({
  model: require('./model.js'), // See https://github.com/oauthjs/node-oauth2-server for specification
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/api/ph", function(req, res, next){
    res.json({"qq":"aa"});
});

app.get("/oauth/authorize", function(req, res) {
    res.json({"aa":"aaaa"})
});
app.post("/oauth/authorize", oauth.authorize());
app.listen(3000);
