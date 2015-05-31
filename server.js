var express    = require('express'),
    app        = express(),
    bodyParser = require('body-parser'),
    mongoose   = require('mongoose'),
    userCtrl   = require('./server/controllers/user-controller');

mongoose.connect('mongodb://localhost:27017/simple-mean');

app.use(bodyParser());

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/client/views/index.html');
});

app.use('/bower', express.static(__dirname + '/client/bower_components'));

app.use('/js', express.static(__dirname + '/client/js'));

app.get('/api/users', userCtrl.list);
app.post('/api/users', userCtrl.create);

app.listen(3000, function() {
    console.log('Listening on port 3000');
});
