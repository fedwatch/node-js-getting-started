var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});
app.get('/db', function(request, response) {
    var results = [
        { id: '1', name: 'Michelle'},
        { id: '2', name: 'Amy'},
        { id: '3', name: 'Kim'},
        { id: '4', name: 'Mary'},
        { id: '5', name: 'Sunny'},
    ];
    response.render('results',results );
    response.render('pages/db');

});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


