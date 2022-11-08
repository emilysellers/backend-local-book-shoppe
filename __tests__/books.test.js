const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('books routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('should return a list of books', async () => {
    const res = await request(app).get('/books');
    expect(res.status).toBe(200);
    expect(res.body.length).toEqual(13);
    expect(res.body[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      released: expect.any(String),
    });
  });

  it('/books/:id should return book and author', async () => {
    const res = await request(app).get('/books/1');
    expect(res.status).toBe(200);
    expect(res.body[0]).toEqual({
      id: '1',
      title: 'The Bluest Eye',
      released: '1970',
      authors: [{ id: '2', name: 'Toni Morrison' }], // author id and name
    });
  });

  afterAll(() => {
    pool.end();
  });
});
