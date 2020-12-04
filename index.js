var express = require('express');

var app = express();
var handlebars = require('express-handlebars').create({defaultLayout:'main'});
var bodyParser = require('body-parser');
var session = require('express-session');

app.use(session({secret:'1a2b3c'}));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', process.argv[2]);

app.use(express.static('public'));

//renders home page
app.get('/',function(req,res){

  res.render('home');
});

//renders submit page with form
app.get('/submit',function(req,res){

  res.render('submit');
});
//renders broad recipe page with books
app.get('/recipes',function(req,res){
  let context = {};
  let recipes = [
    {
      title: "Pasta"
    },
    {
      title: "peanut noodles"
    },
    {
      title: "Sesame scallops"
    },
    {
      title: "Matzah ball soup"
    },
    {
      title: "Gingerbread Men"
    },
    {
      title: "Cookie tower"
    },
    {
      title: "Cinnamon rolls"
    },
    {
      title: "Pasta"
    },
    {
      title: "Filler to make this scrolly"
    },
    {
      title: "Filler to make this scrolly"
    },
    {
      title: "Filler to make this scrolly"
    },
    {
      title: "Filler to make this scrolly"
    },
    {
      title: "Filler to make this scrolly"
    },
    {
      title: "Filler to make this scrolly"
    },
    {
      title: "Filler to make this scrolly"
    },
    {
      title: "Filler to make this scrolly"
    },
  ];
context.recipes = recipes;

  res.render('recipes', context);
});

//asian recipe collection
app.get('/asian',function(req,res){
  let context = {};
  let recipes = [
    {
      img: "img/noodles.jpg",
      title: "peanut noodles",
      ingredients: "Some peanuts and some noodles",
      instructions: "Boil the noodles, make peanuts into butter, combine and top with what you want"
    },
    {
      img: "img/scallops.jpg",
      title: "Sesame scallops",
      ingredients: "Sesame seeds, scallops",
      instructions: "Feed seeds to scallops, put scallops on stove top"
    },
  ];
context.recipes = recipes;
  res.render('asian', context);
});

//jewish recipe collection
app.get('/jewish',function(req,res){
  let context = {};
  let recipes = [
    {
      img: "img/cake.jpg",
      title: "Matzah ball soup",
      ingredients: "Matzah balls, soup",
      instructions: "Put the matzah balls in the soup"
    }
  ];
context.recipes = recipes;

  res.render('jewish', context);
});

//jewish recipe collection
app.get('/baked_goods',function(req,res){
  let context = {};
  let recipes = [
    {
      img: "img/gingerbread.jpg",
      title: "Gingerbread Men",
      ingredients: "Ginger, bread",
      instructions: "put ginger in bread, and then give it life"
    },
    {
      img: "img/cookies.jpg",
      title: "Cookie tower",
      ingredients: "Cookies, the will to fight gravity",
      instructions: "Stack cookies until they fall, then do it again with one less cookie"
    },
    {
      img: "img/rolls.jpg",
      title: "Cinnamon rolls",
      ingredients: "cinnamon, bread",
      instructions: "Like gingerbread, but more circular"
    }
  ];
context.recipes = recipes;

  res.render('baked_goods', context);
});

//jewish recipe collection
app.get('/italian',function(req,res){
  let context = {};
  let recipes = [
    {
      img: "img/cake.jpg",
      title: "Pasta",
      ingredients: "Pasta",
      instructions: "Just do the pasta thing, it's easy"
    }
  ];
context.recipes = recipes;

  res.render('italian', context);
});


//renders random recipe page
app.get('/random',function(req,res){

  res.render('random');
});

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
  console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});
