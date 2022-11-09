const pool = require('../utils/pool');
const { Author } = require('./Author');

class Book {
  id;
  title;
  released;
  authors;

  constructor({ id, title, released, authors }) {
    this.id = id;
    this.title = title;
    this.released = released;
    this.authors = authors;
    //   .length > 0
    //     ? row.authors.map((author) => new Author(author))
    //     : [];
  }

  static async getById(id) {
    const { rows } = await pool.query(
      `
    SELECT books.*,
    COALESCE(
      json_agg(to_jsonb(authors))
      FILTER (WHERE authors.id IS NOT NULL), '[]') AS authors
    FROM books
    LEFT JOIN books_authors
    ON books.id = books_authors.book_id
    LEFT JOIN authors
    ON books_authors.author_id = authors.id
    WHERE books.id = $1
    GROUP BY books.id`,
      [id]
    );
    return new Book(rows[0]);
  }
  static async getAll() {
    const { rows } = await pool.query('SELECT * from books');
    return rows.map((row) => new Book(row));
  }
}

module.exports = { Book };
