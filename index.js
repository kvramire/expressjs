var express = require('express'),
    home = require('./routes/home')
    customer = require('./routes/customer');

var app = express();

app.get('/', home.index);
app.get('/customer', customer.index);
app.get('/customer/contact', customer.contact);

app.listen(3000);