var express = require('express'),
    home = require('./routes/home')
    customer = require('./routes/customer');

var app = express();
app.use(express.static(__dirname +'/public'));

//app.set('title',"CRM Application");
app.set('title',"CRM Application - Development");

app.get('/', home.index);
app.get('/customer', customer.index);
app.get('/customer/contact', customer.contact);

//customer/20
app.get('/customer/:id', function(req,res){
    res.send('Title - ' + app.get('title') + ': Customer selected is ' + req.params.id);
});

//customers?id=20
app.get('/customers', function(req,res){
    res.send('customers selected is ' + req.query.id);
});

//range/100..300
app.get(/^\/range\/(\d+)(?:\.\.(\d+))?$/, function(req,res){
    var from = req.params[0];
    var to = req.params[1];
    res.send('Range of values using regular expressions for /range/' + from +'..' + to);
});


app.listen(3000);