const express = require('express');
const session = require('express-session');
const flash = require('connect-flash');

express()
  .set('view engine', 'ejs')
  .use(session({ secret: 'hjfkdajf' }))
  .use(flash())
  .use(function (req, res, next) {
    res.locals.message = req.flash('message');
    next();
  })
  .get('/', (req, res) => {
    res.render('index');
  })
  .get('/first_message', (req, res) => {
    req.flash('message', 'Aspire to be ...');
    res.redirect('/');
  })
    .get('/second_message', (req, res) => {
    req.flash('message', 'Once a Whump Allways a Wump');
    res.redirect('/');
  })
    .get('/third_message', (req, res) => {
    req.flash('message', 'In the beginning, long before the invention of poatao chips ...');
    res.redirect('/');
  })
  .listen(process.env.PORT || 3000);
