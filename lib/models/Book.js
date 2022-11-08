const pool = require('../utils/pool');

class Book {
  id;
  title;
  released;
  //   authors;

  constructor(row) {
    this.id = row.id;
    this.title = row.title;
    this.released = row.released;
    // this.authors =
    //   row.authors.length > 0
    //     ? row.authors.map((author) => new Author(author))
    //     : [];
  }

  static async getAll() {
    const { rows } = await pool.query('SELECT * from books');
    return rows.map((row) => new Book(row));
  }

  static async getById(id) {
    const { rows } = await pool.query('SELECT * from books WHERE id =$1', [id]);
    return new Book(rows[0]);
  }
}

module.exports = { Book };
