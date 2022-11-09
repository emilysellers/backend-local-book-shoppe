-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP TABLE IF EXISTS books CASCADE;
DROP TABLE IF EXISTS authors CASCADE;
DROP TABLE IF EXISTS books_authors CASCADE;

CREATE TABLE books (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    title VARCHAR NOT NULL,
    released BIGINT
);

CREATE TABLE authors (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name VARCHAR NOT NULL,
    dob BIGINT,
    pob VARCHAR 
);

CREATE TABLE books_authors (
    id BIGINT GENERATED ALWAYS AS IDENTITY,
    book_id BIGINT,
    author_id BIGINT,
    FOREIGN KEY (book_id) REFERENCES books(id),
    FOREIGN KEY (author_id) REFERENCES authors(id)
);

INSERT INTO books (
    title, 
    released
)
VALUES
('The Bluest Eye', 1970),
('Lonesome Dove', 1985),
('The Alchemist', 1988),
('Atlas Shrugged', 1957),
('Galapagos', 1985),
('Hatchet', 1986),
('The Sun Also Rises', 1926),
('Women Who Run With Wolves', 1989),
('The Ballad of the Sad Café', 1951),
('Love in the Time of Cholera', 1985),
('Beloved', 1987),
('Breakfast of Champions', 1973),
('The Prophet', 1923)
;

INSERT INTO authors (
    name, 
    dob,
    pob
)
VALUES 
('Kurt Vonnegut', 1922, 'Indianapolis, IN, USA'),
('Toni Morrison', 1931, 'Lorain, OH, USA'),
('Ernest Hemmingway', 1899, 'Oak Park, IL, USA'),
('Larry McMurtry', 1936, 'Archer City, TX, USA'),
('Ayn Rand', 1905, 'Saint Petersburg, Russia'),
('Gabriel García Márquez', 1927, 'Aracataca, Colombia'),
('Clarissa Pinkola Estés', 1945, 'Gary, IN, USA'),
('Gary Paulsen', 1939, 'Mineapolis, MN, USA'),
('Paulo Coelho', 1947, 'Rio de Janeiro, Brazil'),
('Khalil Gibran', 1883, 'Mount Lebanon Mutasarrifate, Syria'),
('Carson McCullers', 1917, 'Columbus, Georgia, USA');

INSERT INTO books_authors(
    book_id, 
    author_id
    )
VALUES
(1, 2),
(2, 4),
(3, 9),
(4, 5),
(5, 1),
(6, 8),
(7, 3),
(8, 7),
(9, 11),
(10, 6),
(11, 2),
(12, 1),
(13, 10)
;