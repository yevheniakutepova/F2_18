const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
require('dotenv').config();

const bookRoutes = require('./routes/bookRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(session({
  secret: 'sekret',
  resave: false,
  saveUninitialized: false
}));

app.use((req, res, next) => {
  const openPaths = ['/login', '/register', '/logout'];
  if (!req.session.userId && !openPaths.includes(req.path)) {
    return res.redirect('/login');
  }
  next();
});

app.use('/', userRoutes);

app.use('/', bookRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Połączono z MongoDB'))
  .catch(err => console.log(err));

app.use((req, res) => {
  res.status(404).render('error');
});

app.listen(3982, () => {
  console.log('Serwer działa `http://localhost:3982`');
});
