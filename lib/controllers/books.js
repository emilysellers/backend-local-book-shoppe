const { Router } = require('express');
const { Book } = require('../models/Book');

module.exports = Router()
  .get('/:id', async (req, res) => {
    const book = await Book.getById(req.params.id);
    res.json(book);
    // maybe try map here?
    // const filtered = book.map(
    //   ({ id, title, released, authors: [{ id, name, dob, pob }] }) => ({
    //     title,
    //     released,
    //     authors: [{ id, name }],
    //   })
    // );
    // res.json(filtered);
  })
  .get('/', async (req, res) => {
    const books = await Book.getAll();
    res.json(books);
  });
