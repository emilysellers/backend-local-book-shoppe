const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('authors routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('should return a list of authors', async () => {
    const res = await request(app).get('/authors');
    expect(res.status).toBe(200);
    expect(res.body.length).toEqual(11);
    expect(res.body[0]).toEqual({
      id: expect.any(String),
      name: expect.any(String),
      dob: expect.any(String),
      pob: expect.any(String),
    });
  });

  it('should return an author and their books', async () => {
    const res = await request(app).get('/authors/1');
    expect(res.status).toBe(200);
    expect(res.body).toEqual({
      name: 'Kurt Vonnegut',
      dob: '1922',
      pob: 'Indianapolis, IN, USA',
      books: [
        {
          id: 5,
          title: 'Galapagos',
          released: 1985,
        },
        {
          id: 12,
          title: 'Breakfast of Champions',
          released: 1973,
        },
      ],
    });
  });

  afterAll(() => {
    pool.end();
  });
});
