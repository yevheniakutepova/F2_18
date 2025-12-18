const Book = require('../models/Book');

exports.getAll = async (req, res) => {
  const { status, sort } = req.query;

  let filter = {};
  if (status) {
    filter.status = status;
  }

  let sortOption = {};
  if (sort === 'title') sortOption.title = 1;
  if (sort === 'date') sortOption.createdAt = -1;

  const books = await Book.find({
  ...filter,
  userId: req.session.userId
}).sort(sortOption);

  res.render('index', { books });
};

exports.getAddForm = (req, res) => {
  res.render('add');
};


exports.addBook = async (req, res) => {
  await Book.create({
    ...req.body,
    userId: req.session.userId
  });
  res.redirect('/');
};


exports.getEditForm = async (req, res) => {
  const book = await Book.findById(req.params.id);
  res.render('edit', { book });
};

exports.updateBook = async (req, res) => {
  await Book.findByIdAndUpdate(req.params.id, req.body);
  res.redirect('/');
};

exports.deleteBook = async (req, res) => {
  await Book.findOneAndDelete({
    _id: req.params.id,
    userId: req.session.userId
  });
  res.redirect('/');
};

exports.getDetails = async (req, res) => {
  const book = await Book.findById(req.params.id);
  res.render('details', { book });
};
