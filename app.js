
var express = require('express');
var app = express();
var passport = require('passport')
var session = require('express-session')
var bodyParser = require('body-parser')
var env = require('dotenv').load()
var exphbs = require('express-handlebars')


// //For BodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// //For Passport

app.use(session({ secret: 'husky love', resave: true, saveUninitialized:true}));

app.use(passport.initialize());

app.use(passport.session());

//For Handlebars
app.set('views', './app/views')
app.engine('handlebars', exphbs({
	extname: '.handlebars'
}));
app.set('view engine', '.handlebars');




// app.get('/', function(req, res) {
// 	res.send('Husky Love Server Working ');
// });



// //Models 
var models = require("./app/models");

//Routes
var authRoute = require('./app/routes/auth.js')(app);



// //Sync Database
models.sequelize.sync().then(function() {
	console.log("Nice! Database looks fine")
}).catch(function(err) {
	console.log(err, "Something went wrong with the Database Update")
});


app.listen(3000, function(err) {

	if (!err)
		console.log("Site is live");

	else console.log(err)
});