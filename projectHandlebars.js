var express = require('express');

var app = express();
var handlebars = require('express-handlebars').create({defaultLayout:'main'});

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', 6749);

app.get('/',function(req,res){
  res.render('home');
});

app.get('/cs',function(req,res){
  res.render('cs');
});

app.get('/psy',function(req,res){
  res.render('psy');
});

app.get('/stats',function(req,res){
  res.render('stats');
});

var path = require('path'); 
app.use(express.static(path.join(__dirname, '/public')));

app.use(function(req,res){
  res.status(404);
  res.render('404');
});

app.use(function(err, req, res, next){
  console.error(err.stack);
  res.type('plain/text');
  res.status(500);
  res.render('500');
});

app.listen(app.get('port'), function(){
  console.log('Express started on http://flip3.engr.oregonstate.edu:' + app.get('port') + '; press Ctrl-C to terminate.');
});

