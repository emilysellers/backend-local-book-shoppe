const { Router } = require('express');
const { Author } = require('../models/Author');

module.exports = Router()
  .get('/:id', async (req, res) => {
    const author = await Author.getById(req.params.id);
    const filteredAuthor = {
      name: author.name,
      dob: author.dob,
      pob: author.pob,
      books: author.books,
    };
    res.json(filteredAuthor);
  })
  .get('/', async (req, res) => {
    const authors = await Author.getAll();
    const filteredAuthors = authors.map(({ id, name }) => ({ id, name }));
    res.json(filteredAuthors);
  });
