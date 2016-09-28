var movies = [
  {
    "name": "The Shawshank Redemption",
    "outline": "Description maybe.",
    "rating": 9.3,
    "director": "Frank Darabont",
    "year": 1994,
    "stars": [
      "Tim Robbins",
      "Morgan Freeman",
      "Bob Gunton"
    ],
    "runtime": 142,
    "genre": [
      "Crime",
      "Drama"
    ],
    "certificate": "R",
    "date": "1974-04-30T10:29:29+05:30",
    "actor": "Tim Robbins",
    "id": 1
  },
  {
    "name": "The Godfather",
    "outline": "Description maybe.",
    "rating": 9.2,
    "director": "Francis Ford Coppola",
    "year": 1972,
    "stars": [
      "Marlon Brando",
      "Al Pacino",
      "James Caan"
    ],
    "runtime": 175,
    "genre": [
      "Crime",
      "Drama"
    ],
    "certificate": "R",
    "date": "1974-07-12T10:29:29+05:30",
    "actor": "Marlon Brando",
    "id": 2
  },
  {
    "name": "The Godfather: Part II",
    "outline": "Description maybe.",
    "rating": 9.1,
    "director": "Francis Ford Coppola",
    "year": 1974,
    "stars": [
      "Al Pacino",
      "Robert De Niro",
      "Robert Duvall"
    ],
    "runtime": 200,
    "genre": [
      "Crime",
      "Drama"
    ],
    "certificate": "R",
    "date": "1992-08-23T10:29:29+05:30",
    "actor": "Al Pacino",
    "id": 3
  },
  {
    "name": "Pulp Fiction",
    "outline": "Description maybe.",
    "rating": 9.0,
    "director": "Quentin Tarantino",
    "year": 1994,
    "stars": [
      "John Travolta",
      "Uma Thurman",
      "Samuel L. Jackson"
    ],
    "runtime": 154,
    "genre": [
      "Crime",
      "Thriller"
    ],
    "certificate": "R",
    "date": "1994-02-09T10:29:29+05:30",
    "actor": "John Travolta",
    "id": 4
  },
  {
    "name": "The Good, the Bad and the Ugly",
    "outline": "Description maybe.",
    "rating": 9.0,
    "director": "Sergio Leone",
    "year": 1966,
    "stars": [
      "Clint Eastwood",
      "Eli Wallach",
      "Lee Van Cleef"
    ],
    "runtime": 161,
    "genre": [
      "Adventure",
      "Western"
    ],
    "certificate": "TV_14",
    "date": "1980-10-05T10:29:29+05:30",
    "actor": "Clint Eastwood",
    "id": 5
  },
  {
    "name": "The Dark Knight",
    "outline": "Description maybe.",
    "rating": 9.0,
    "director": "Christopher Nolan",
    "year": 2008,
    "stars": [
      "Christian Bale",
      "Heath Ledger",
      "Aaron Eckhart"
    ],
    "runtime": 152,
    "genre": [
      "Action",
      "Crime",
      "Drama",
      "Thriller"
    ],
    "certificate": "PG_13",
    "date": "2002-09-14T10:29:29+05:30",
    "actor": "Christian Bale",
    "id": 6
  },
  {
    "name": "12 Angry Men",
    "outline": "Description maybe.",
    "rating": 8.9,
    "director": "Sidney Lumet",
    "year": 1957,
    "stars": [
      "Henry Fonda",
      "Lee J. Cobb",
      "Martin Balsam"
    ],
    "runtime": 96,
    "genre": [
      "Drama"
    ],
    "certificate": "APPROVED",
    "date": "1993-11-21T10:29:29+05:30",
    "actor": "Henry Fonda",
    "id": 7
  },
  {
    "name": "Schindler's List",
    "outline": "Description maybe.",
    "rating": 8.9,
    "director": "Steven Spielberg",
    "year": 1993,
    "stars": [
      "Liam Neeson",
      "Ralph Fiennes",
      "Ben Kingsley"
    ],
    "runtime": 195,
    "genre": [
      "Biography",
      "Drama",
      "History",
      "War"
    ],
    "certificate": "R",
    "date": "1991-03-02T10:29:29+05:30",
    "actor": "Liam Neeson",
    "id": 8
  },
  {
    "name": "The Lord of the Rings: The Return of the King",
    "outline": "Description maybe.",
    "rating": 8.9,
    "director": "Peter Jackson",
    "year": 2003,
    "stars": [
      "Elijah Wood",
      "Viggo Mortensen",
      "Ian McKellen"
    ],
    "runtime": 201,
    "genre": [
      "Action",
      "Adventure",
      "Fantasy"
    ],
    "certificate": "PG_13",
    "date": "2007-01-29T10:29:29+05:30",
    "actor": "Elijah Wood",
    "id": 9
  },
  {
    "name": "Fight Club",
    "outline": "Description maybe...",
    "rating": 8.9,
    "director": "David Fincher",
    "year": 1999,
    "stars": [
      "Brad Pitt",
      "Edward Norton",
      "Helena Bonham Carter"
    ],
    "runtime": 139,
    "genre": [
      "Drama"
    ],
    "certificate": "R",
    "date": "1989-05-06T10:29:29+05:30",
    "actor": "Brad Pitt",
    "id": 10
  },
  {
    "name": "Star Wars: Episode V - The Empire Strikes Back",
    "outline": "Description maybe.",
    "rating": 8.8,
    "director": "Irvin Kershner",
    "year": 1980,
    "stars": [
      "Mark Hamill",
      "Harrison Ford",
      "Carrie Fisher"
    ],
    "runtime": 124,
    "genre": [
      "Action",
      "Adventure",
      "Sci-Fi"
    ],
    "certificate": "PG",
    "date": "1993-02-18T10:29:29+05:30",
    "actor": "Mark Hamill",
    "id": 11
  },
  {
    "name": "The Lord of the Rings: The Fellowship of the Ring",
    "outline": "Description maybe.",
    "rating": 8.8,
    "director": "Peter Jackson",
    "year": 2001,
    "stars": [
      "Elijah Wood",
      "Ian McKellen",
      "Orlando Bloom"
    ],
    "runtime": 178,
    "genre": [
      "Action",
      "Adventure",
      "Fantasy"
    ],
    "certificate": "PG_13",
    "date": "1984-11-28T10:29:29+05:30",
    "actor": "Elijah Wood",
    "id": 12
  },
  {
    "name": "Inception",
    "outline": "Description maybe.",
    "rating": 8.8,
    "director": "Christopher Nolan",
    "year": 2010,
    "stars": [
      "Leonardo DiCaprio",
      "Joseph Gordon-Levitt",
      "Ellen Page"
    ],
    "runtime": 148,
    "genre": [
      "Action",
      "Adventure",
      "Mystery",
      "Sci-Fi",
      "Thriller"
    ],
    "certificate": "PG_13",
    "date": "2009-02-18T10:29:29+05:30",
    "actor": "Leonardo DiCaprio",
    "id": 13
  },
  {
    "name": "One Flew Over the Cuckoo's Nest",
    "outline": "Description maybe.",
    "rating": 8.8,
    "director": "Milos Forman",
    "year": 1975,
    "stars": [
      "Jack Nicholson",
      "Louise Fletcher",
      "Michael Berryman"
    ],
    "runtime": 133,
    "genre": [
      "Drama"
    ],
    "certificate": "R",
    "date": "1962-04-17T10:29:29+05:30",
    "actor": "Jack Nicholson",
    "id": 14
  },
  {
    "name": "Seven Samurai",
    "outline": "Description maybe.",
    "rating": 8.8,
    "director": "Akira Kurosawa",
    "year": 1954,
    "stars": [
      "Toshirô Mifune",
      "Takashi Shimura",
      "Keiko Tsushima"
    ],
    "runtime": 207,
    "genre": [
      "Action",
      "Drama"
    ],
    "certificate": "UNRATED",
    "date": "2011-01-08T10:29:29+05:30",
    "actor": "Toshirô Mifune",
    "id": 15
  },
  {
    "name": "Goodfellas",
    "outline": "Description maybe.",
    "rating": 8.8,
    "director": "Martin Scorsese",
    "year": 1990,
    "stars": [
      "Robert De Niro",
      "Ray Liotta",
      "Joe Pesci"
    ],
    "runtime": 146,
    "genre": [
      "Biography",
      "Crime",
      "Drama",
      "Thriller"
    ],
    "certificate": "R",
    "date": "1980-08-13T10:29:29+05:30",
    "actor": "Robert De Niro",
    "id": 16
  },
  {
    "name": "Star Wars",
    "outline": "Description maybe.",
    "rating": 8.8,
    "director": "George Lucas",
    "year": 1977,
    "stars": [
      "Mark Hamill",
      "Harrison Ford",
      "Carrie Fisher"
    ],
    "runtime": 121,
    "genre": [
      "Action",
      "Adventure",
      "Fantasy",
      "Sci-Fi"
    ],
    "certificate": "PG",
    "date": "1978-05-18T10:29:29+05:30",
    "actor": "Mark Hamill",
    "id": 17
  },
  {
    "name": "Forrest Gump",
    "outline": "Description maybe.",
    "rating": 8.7,
    "director": "Robert Zemeckis",
    "year": 1994,
    "stars": [
      "Tom Hanks",
      "Robin Wright",
      "Gary Sinise"
    ],
    "runtime": 142,
    "genre": [
      "Drama",
      "Romance"
    ],
    "certificate": "PG_13",
    "date": "1981-11-14T10:29:29+05:30",
    "actor": "Tom Hanks",
    "id": 18
  },
  {
    "name": "The Lord of the Rings: The Two Towers",
    "outline": "Description maybe.",
    "rating": 8.7,
    "director": "Peter Jackson",
    "year": 2002,
    "stars": [
      "Elijah Wood",
      "Ian McKellen",
      "Viggo Mortensen"
    ],
    "runtime": 179,
    "genre": [
      "Action",
      "Adventure",
      "Fantasy"
    ],
    "certificate": "PG_13",
    "date": "1965-05-08T10:29:29+05:30",
    "actor": "Elijah Wood",
    "id": 19
  },
  {
    "name": "The Matrix",
    "outline": "Description maybe.",
    "rating": 8.7,
    "director": "Andy Wachowski",
    "year": 1999,
    "stars": [
      "Lana Wachowski",
      "Keanu Reeves",
      "Laurence Fishburne",
      "Carrie-Anne Moss"
    ],
    "runtime": 136,
    "genre": [
      "Action",
      "Adventure",
      "Sci-Fi"
    ],
    "certificate": "R",
    "date": "1990-11-29T10:29:29+05:30",
    "actor": "Lana Wachowski",
    "id": 20
  },
  {
    "name": "City of God",
    "outline": "Description maybe.",
    "rating": 8.7,
    "director": "Fernando Meirelles",
    "year": 2002,
    "stars": [
      "Kátia Lund",
      "Alexandre Rodrigues",
      "Matheus Nachtergaele",
      "Leandro Firmino"
    ],
    "runtime": 130,
    "genre": [
      "Crime",
      "Drama"
    ],
    "certificate": "R",
    "date": "2004-10-25T10:29:29+05:30",
    "actor": "Kátia Lund",
    "id": 21
  },
  {
    "name": "Once Upon a Time in the West",
    "outline": "Description maybe.",
    "rating": 8.7,
    "director": "Sergio Leone",
    "year": 1968,
    "stars": [
      "Henry Fonda",
      "Charles Bronson",
      "Claudia Cardinale"
    ],
    "runtime": 175,
    "genre": [
      "Adventure",
      "Western"
    ],
    "certificate": "United States-M",
    "date": "2009-01-30T10:29:29+05:30",
    "actor": "Henry Fonda",
    "id": 22
  },
  {
    "name": "Casablanca",
    "outline": "Description maybe.",
    "rating": 8.7,
    "director": "Michael Curtiz",
    "year": 1942,
    "stars": [
      "Humphrey Bogart",
      "Ingrid Bergman",
      "Paul Henreid"
    ],
    "runtime": 102,
    "genre": [
      "Drama",
      "Romance",
      "War"
    ],
    "certificate": "APPROVED",
    "date": "1970-04-10T10:29:29+05:30",
    "actor": "Humphrey Bogart",
    "id": 23
  },
  {
    "name": "The Usual Suspects",
    "outline": "Description maybe.",
    "rating": 8.7,
    "director": "Bryan Singer",
    "year": 1995,
    "stars": [
      "Kevin Spacey",
      "Gabriel Byrne",
      "Chazz Palminteri"
    ],
    "runtime": 106,
    "genre": [
      "Crime",
      "Mystery",
      "Thriller"
    ],
    "certificate": "R",
    "date": "1984-06-14T10:29:29+05:30",
    "actor": "Kevin Spacey",
    "id": 24
  },
  {
    "name": "Se7en",
    "outline": "Description maybe.",
    "rating": 8.7,
    "director": "David Fincher",
    "year": 1995,
    "stars": [
      "Morgan Freeman",
      "Brad Pitt",
      "Kevin Spacey"
    ],
    "runtime": 127,
    "genre": [
      "Crime",
      "Mystery",
      "Thriller"
    ],
    "certificate": "R",
    "date": "1989-07-10T10:29:29+05:30",
    "actor": "Morgan Freeman",
    "id": 25
  },
  {
    "name": "The Silence of the Lambs",
    "outline": "Description maybe.",
    "rating": 8.7,
    "director": "Jonathan Demme",
    "year": 1991,
    "stars": [
      "Jodie Foster",
      "Anthony Hopkins",
      "Lawrence A. Bonney"
    ],
    "runtime": 118,
    "genre": [
      "Crime",
      "Drama",
      "Thriller"
    ],
    "certificate": "R",
    "date": "2009-10-29T10:29:29+05:30",
    "actor": "Jodie Foster",
    "id": 26
  },
  {
    "name": "It's a Wonderful Life",
    "outline": "Description maybe.",
    "rating": 8.7,
    "director": "Frank Capra",
    "year": 1946,
    "stars": [
      "James Stewart",
      "Donna Reed",
      "Lionel Barrymore"
    ],
    "runtime": 130,
    "genre": [
      "Drama",
      "Family",
      "Fantasy"
    ],
    "certificate": "APPROVED",
    "date": "1982-05-20T10:29:29+05:30",
    "actor": "James Stewart",
    "id": 27
  },
  {
    "name": "Rear Window",
    "outline": "Description maybe.",
    "rating": 8.7,
    "director": "Alfred Hitchcock",
    "year": 1954,
    "stars": [
      "James Stewart",
      "Grace Kelly",
      "Wendell Corey"
    ],
    "runtime": 112,
    "genre": [
      "Mystery",
      "Thriller"
    ],
    "certificate": "APPROVED",
    "date": "1968-10-12T10:29:29+05:30",
    "actor": "James Stewart",
    "id": 28
  },
  {
    "name": "Raiders of the Lost Ark",
    "outline": "Description maybe.",
    "rating": 8.7,
    "director": "Steven Spielberg",
    "year": 1981,
    "stars": [
      "Harrison Ford",
      "Karen Allen",
      "Paul Freeman"
    ],
    "runtime": 115,
    "genre": [
      "Action",
      "Adventure"
    ],
    "certificate": "PG",
    "date": "2014-05-17T10:29:29+05:30",
    "actor": "Harrison Ford",
    "id": 29
  },
  {
    "name": "Léon: The Professional",
    "outline": "Description maybe.",
    "rating": 8.6,
    "director": "Luc Besson",
    "year": 1994,
    "stars": [
      "Jean Reno",
      "Gary Oldman",
      "Natalie Portman"
    ],
    "runtime": 110,
    "genre": [
      "Crime",
      "Drama",
      "Thriller"
    ],
    "certificate": "UNRATED",
    "date": "2004-02-02T10:29:29+05:30",
    "actor": "Jean Reno",
    "id": 30
  },
  {
    "name": "Psycho",
    "outline": "Description maybe.",
    "rating": 8.6,
    "director": "Alfred Hitchcock",
    "year": 1960,
    "stars": [
      "Anthony Perkins",
      "Janet Leigh",
      "Vera Miles"
    ],
    "runtime": 109,
    "genre": [
      "Horror",
      "Mystery",
      "Thriller"
    ],
    "certificate": "TV_14",
    "date": "1999-12-23T10:29:29+05:30",
    "actor": "Anthony Perkins",
    "id": 31
  },
  {
    "name": "The Dark Knight Rises",
    "outline": "Description maybe.",
    "rating": 8.6,
    "director": "Christopher Nolan",
    "year": 2012,
    "stars": [
      "Christian Bale",
      "Tom Hardy",
      "Anne Hathaway"
    ],
    "runtime": 165,
    "genre": [
      "Action",
      "Crime",
      "Thriller"
    ],
    "certificate": "PG_13",
    "date": "2013-09-06T10:29:29+05:30",
    "actor": "Christian Bale",
    "id": 32
  },
  {
    "name": "Sunset Blvd.",
    "outline": "Description maybe.",
    "rating": 8.6,
    "director": "Billy Wilder",
    "year": 1950,
    "stars": [
      "William Holden",
      "Gloria Swanson",
      "Erich von Stroheim"
    ],
    "runtime": 110,
    "genre": [
      "Drama",
      "Film-Noir"
    ],
    "certificate": "APPROVED",
    "date": "1998-06-21T10:29:29+05:30",
    "actor": "William Holden",
    "id": 33
  },
  {
    "name": "City Lights",
    "outline": "Description maybe.",
    "rating": 8.6,
    "director": "Charles Chaplin",
    "year": 1931,
    "stars": [
      "Charles Chaplin",
      "Virginia Cherrill",
      "Florence Lee"
    ],
    "runtime": 87,
    "genre": [
      "Comedy",
      "Drama",
      "Romance"
    ],
    "certificate": "United States-PASSED",
    "date": "2000-05-05T10:29:29+05:30",
    "actor": "Charles Chaplin",
    "id": 34
  },
  {
    "name": "American History X",
    "outline": "Description maybe.",
    "rating": 8.6,
    "director": "Tony Kaye",
    "year": 1998,
    "stars": [
      "Edward Norton",
      "Edward Furlong",
      "Beverly D'Angelo"
    ],
    "runtime": 119,
    "genre": [
      "Crime",
      "Drama"
    ],
    "certificate": "R",
    "date": "2001-07-07T10:29:29+05:30",
    "actor": "Edward Norton",
    "id": 35
  },
  {
    "name": "Django Unchained",
    "outline": "Description maybe.",
    "rating": 8.6,
    "director": "Quentin Tarantino",
    "year": 2012,
    "stars": [
      "Jamie Foxx",
      "Christoph Waltz",
      "Leonardo DiCaprio"
    ],
    "runtime": 165,
    "genre": [
      "Adventure",
      "Crime",
      "Drama",
      "Western"
    ],
    "certificate": "R",
    "date": "1966-10-17T10:29:29+05:30",
    "actor": "Jamie Foxx",
    "id": 36
  },
  {
    "name": "Memento",
    "outline": "Description maybe.",
    "rating": 8.6,
    "director": "Christopher Nolan",
    "year": 2000,
    "stars": [
      "Guy Pearce",
      "Carrie-Anne Moss",
      "Joe Pantoliano"
    ],
    "runtime": 113,
    "genre": [
      "Mystery",
      "Thriller"
    ],
    "certificate": "R",
    "date": "1976-06-23T10:29:29+05:30",
    "actor": "Guy Pearce",
    "id": 37
  },
  {
    "name": "Apocalypse Now",
    "outline": "Description maybe",
    "rating": 8.6,
    "director": "Francis Ford Coppola",
    "year": 1979,
    "stars": [
      "Martin Sheen",
      "Marlon Brando",
      "Robert Duvall"
    ],
    "runtime": 153,
    "genre": [
      "Drama",
      "War"
    ],
    "certificate": "R",
    "date": "1969-12-13T10:29:29+05:30",
    "actor": "Martin Sheen",
    "id": 38
  },
  {
    "name": "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
    "outline": "Description maybe.",
    "rating": 8.6,
    "director": "Stanley Kubrick",
    "year": 1964,
    "stars": [
      "Peter Sellers",
      "George C. Scott",
      "Sterling Hayden"
    ],
    "runtime": 95,
    "genre": [
      "Comedy",
      "War"
    ],
    "certificate": "APPROVED",
    "date": "2014-01-13T10:29:29+05:30",
    "actor": "Peter Sellers",
    "id": 39
  },
  {
    "name": "Spirited Away",
    "outline": "Description maybe.",
    "rating": 8.6,
    "director": "Hayao Miyazaki",
    "year": 2001,
    "stars": [
      "Daveigh Chase",
      "Suzanne Pleshette",
      "Miyu Irino"
    ],
    "runtime": 125,
    "genre": [
      "Animation",
      "Adventure",
      "Family",
      "Fantasy"
    ],
    "certificate": "PG",
    "date": "1972-07-29T10:29:29+05:30",
    "actor": "Daveigh Chase",
    "id": 40
  },
  {
    "name": "Terminator 2: Judgment Day",
    "outline": "Description maybe.",
    "rating": 8.6,
    "director": "James Cameron",
    "year": 1991,
    "stars": [
      "Arnold Schwarzenegger",
      "Linda Hamilton",
      "Edward Furlong"
    ],
    "runtime": 137,
    "genre": [
      "Action",
      "Sci-Fi",
      "Thriller"
    ],
    "certificate": "R",
    "date": "1993-11-14T10:29:29+05:30",
    "actor": "Arnold Schwarzenegger",
    "id": 41
  },
  {
    "name": "Saving Private Ryan",
    "outline": "Description maybe.",
    "rating": 8.6,
    "director": "Steven Spielberg",
    "year": 1998,
    "stars": [
      "Tom Hanks",
      "Matt Damon",
      "Tom Sizemore"
    ],
    "runtime": 169,
    "genre": [
      "Action",
      "Drama",
      "War"
    ],
    "certificate": "R",
    "date": "1961-11-27T10:29:29+05:30",
    "actor": "Tom Hanks",
    "id": 42
  },
  {
    "name": "Modern Times",
    "outline": "Description maybe.",
    "rating": 8.6,
    "director": "Charles Chaplin",
    "year": 1936,
    "stars": [
      "Charles Chaplin",
      "Paulette Goddard",
      "Henry Bergman"
    ],
    "runtime": 87,
    "genre": [
      "Comedy",
      "Drama"
    ],
    "certificate": "APPROVED",
    "date": "1973-06-27T10:29:29+05:30",
    "actor": "Charles Chaplin",
    "id": 43
  },
  {
    "name": "The Intouchables",
    "outline": "Description maybe.",
    "rating": 8.5,
    "director": "Olivier Nakache",
    "year": 2011,
    "stars": [
      "Eric Toledano",
      "François Cluzet",
      "Omar Sy",
      "Anne Le Ny"
    ],
    "runtime": 112,
    "genre": [
      "Biography",
      "Comedy",
      "Drama"
    ],
    "certificate": "R",
    "date": "2001-02-01T10:29:29+05:30",
    "actor": "Eric Toledano",
    "id": 44
  },
  {
    "name": "North by Northwest",
    "outline": "Description maybe.",
    "rating": 8.5,
    "director": "Alfred Hitchcock",
    "year": 1959,
    "stars": [
      "Cary Grant",
      "Eva Marie Saint",
      "James Mason"
    ],
    "runtime": 136,
    "genre": [
      "Action",
      "Adventure",
      "Mystery",
      "Thriller"
    ],
    "certificate": "APPROVED",
    "date": "1977-07-07T10:29:29+05:30",
    "actor": "Cary Grant",
    "id": 45
  },
  {
    "name": "Alien",
    "outline": "Description maybe.",
    "rating": 8.5,
    "director": "Ridley Scott",
    "year": 1979,
    "stars": [
      "Sigourney Weaver",
      "Tom Skerritt",
      "John Hurt"
    ],
    "runtime": 117,
    "genre": [
      "Horror",
      "Sci-Fi"
    ],
    "certificate": "TV_14",
    "date": "1982-09-09T10:29:29+05:30",
    "actor": "Sigourney Weaver",
    "id": 46
  },
  {
    "name": "M",
    "outline": "Description maybe.",
    "rating": 8.5,
    "director": "Fritz Lang",
    "year": 1931,
    "stars": [
      "Peter Lorre",
      "Ellen Widmann",
      "Inge Landgut"
    ],
    "runtime": 117,
    "genre": [
      "Crime",
      "Drama",
      "Film-Noir",
      "Thriller"
    ],
    "certificate": "TV_14",
    "date": "2007-09-24T10:29:29+05:30",
    "actor": "Peter Lorre",
    "id": 47
  },
  {
    "name": "Life Is Beautiful",
    "outline": "Description maybe.",
    "rating": 8.5,
    "director": "Roberto Benigni",
    "year": 1997,
    "stars": [
      "Rod Dean",
      "Roberto Benigni",
      "Nicoletta Braschi",
      "Giorgio Cantarini"
    ],
    "runtime": 116,
    "genre": [
      "Comedy",
      "Drama",
      "Romance",
      "War"
    ],
    "certificate": "PG_13",
    "date": "1967-12-05T10:29:29+05:30",
    "actor": "Rod Dean",
    "id": 48
  },
  {
    "name": "Paths of Glory",
    "outline": "Description maybe.",
    "rating": 8.5,
    "director": "Stanley Kubrick",
    "year": 1957,
    "stars": [
      "Kirk Douglas",
      "Ralph Meeker",
      "Adolphe Menjou"
    ],
    "runtime": 88,
    "genre": [
      "Drama",
      "War"
    ],
    "certificate": "TV_14",
    "date": "1974-10-26T10:29:29+05:30",
    "actor": "Kirk Douglas",
    "id": 49
  },
  {
    "name": "Citizen Kane",
    "outline": "Description maybe.",
    "rating": 8.5,
    "director": "Orson Welles",
    "year": 1941,
    "stars": [
      "Orson Welles",
      "Joseph Cotten",
      "Dorothy Comingore"
    ],
    "runtime": 119,
    "genre": [
      "Drama",
      "Mystery"
    ],
    "certificate": "APPROVED",
    "date": "1968-08-28T10:29:29+05:30",
    "actor": "Orson Welles",
    "id": 50
  },
  {
    "name": "Double Indemnity",
    "outline": "Description maybe.",
    "rating": 8.5,
    "director": "Billy Wilder",
    "year": 1944,
    "stars": [
      "Fred MacMurray",
      "Barbara Stanwyck",
      "Edward G. Robinson"
    ],
    "runtime": 107,
    "genre": [
      "Crime",
      "Drama",
      "Film-Noir",
      "Thriller"
    ],
    "certificate": "APPROVED",
    "date": "1994-03-21T10:29:29+05:30",
    "actor": "Fred MacMurray",
    "id": 51
  },
  {
    "name": "The Pianist",
    "outline": "Description maybe.",
    "rating": 8.5,
    "director": "Roman Polanski",
    "year": 2002,
    "stars": [
      "Adrien Brody",
      "Thomas Kretschmann",
      "Frank Finlay"
    ],
    "runtime": 150,
    "genre": [
      "Biography",
      "Drama",
      "History",
      "War"
    ],
    "certificate": "R",
    "date": "1995-10-02T10:29:29+05:30",
    "actor": "Adrien Brody",
    "id": 52
  },
  {
    "name": "Back to the Future",
    "outline": "Description maybe.",
    "rating": 8.5,
    "director": "Robert Zemeckis",
    "year": 1985,
    "stars": [
      "Michael J. Fox",
      "Christopher Lloyd",
      "Lea Thompson"
    ],
    "runtime": 116,
    "genre": [
      "Adventure",
      "Comedy",
      "Sci-Fi"
    ],
    "certificate": "PG",
    "date": "1991-09-15T10:29:29+05:30",
    "actor": "Michael J. Fox",
    "id": 53
  },
  {
    "name": "The Departed",
    "outline": "Description maybe.",
    "rating": 8.5,
    "director": "Martin Scorsese",
    "year": 2006,
    "stars": [
      "Leonardo DiCaprio",
      "Matt Damon",
      "Jack Nicholson"
    ],
    "runtime": 151,
    "genre": [
      "Crime",
      "Thriller"
    ],
    "certificate": "R",
    "date": "1972-04-28T10:29:29+05:30",
    "actor": "Leonardo DiCaprio",
    "id": 54
  },
  {
    "name": "The Shining",
    "outline": "Description maybe.",
    "rating": 8.5,
    "director": "Stanley Kubrick",
    "year": 1980,
    "stars": [
      "Jack Nicholson",
      "Shelley Duvall",
      "Danny Lloyd"
    ],
    "runtime": 146,
    "genre": [
      "Horror",
      "Mystery"
    ],
    "certificate": "R",
    "date": "2006-07-27T10:29:29+05:30",
    "actor": "Jack Nicholson",
    "id": 55
  },
  {
    "name": "Vertigo",
    "outline": "Description maybe.",
    "rating": 8.5,
    "director": "Alfred Hitchcock",
    "year": 1958,
    "stars": [
      "James Stewart",
      "Kim Novak",
      "Barbara Bel Geddes"
    ],
    "runtime": 128,
    "genre": [
      "Mystery",
      "Romance",
      "Thriller"
    ],
    "certificate": "APPROVED",
    "date": "1993-02-25T10:29:29+05:30",
    "actor": "James Stewart",
    "id": 56
  },
  {
    "name": "The Lives of Others",
    "outline": "Description maybe.",
    "rating": 8.5,
    "director": "Florian Henckel von Donnersmarck",
    "year": 2006,
    "stars": [
      "Ulrich Mühe",
      "Martina Gedeck",
      "Sebastian Koch"
    ],
    "runtime": 137,
    "genre": [
      "Drama",
      "Thriller"
    ],
    "certificate": "R",
    "date": "1996-10-03T10:29:29+05:30",
    "actor": "Ulrich Mühe",
    "id": 57
  },
  {
    "name": "American Beauty",
    "outline": "Description maybe.",
    "rating": 8.5,
    "director": "Sam Mendes",
    "year": 1999,
    "stars": [
      "Kevin Spacey",
      "Annette Bening",
      "Thora Birch"
    ],
    "runtime": 122,
    "genre": [
      "Drama"
    ],
    "certificate": "R",
    "date": "1967-03-31T10:29:29+05:30",
    "actor": "Kevin Spacey",
    "id": 58
  },
  {
    "name": "Toy Story 3",
    "outline": "Description maybe.",
    "rating": 8.5,
    "director": "Lee Unkrich",
    "year": 2010,
    "stars": [
      "Tom Hanks",
      "Tim Allen",
      "Joan Cusack"
    ],
    "runtime": 103,
    "genre": [
      "Animation",
      "Adventure",
      "Comedy",
      "Family",
      "Fantasy"
    ],
    "certificate": "G",
    "date": "1960-04-11T10:29:29+05:30",
    "actor": "Tom Hanks",
    "id": 59
  },
  {
    "name": "Aliens",
    "outline": "Description maybe.",
    "rating": 8.5,
    "director": "James Cameron",
    "year": 1986,
    "stars": [
      "Sigourney Weaver",
      "Michael Biehn",
      "Carrie Henn"
    ],
    "runtime": 137,
    "genre": [
      "Action",
      "Adventure",
      "Sci-Fi",
      "Thriller"
    ],
    "certificate": "R",
    "date": "1988-09-08T10:29:29+05:30",
    "actor": "Sigourney Weaver",
    "id": 60
  },
  {
    "name": "The Great Dictator",
    "outline": "Description maybe.",
    "rating": 8.5,
    "director": "Charles Chaplin",
    "year": 1940,
    "stars": [
      "Charles Chaplin",
      "Paulette Goddard",
      "Jack Oakie"
    ],
    "runtime": 125,
    "genre": [
      "Comedy",
      "Drama",
      "War"
    ],
    "certificate": "APPROVED",
    "date": "2010-04-06T10:29:29+05:30",
    "actor": "Charles Chaplin",
    "id": 61
  },
  {
    "name": "Taxi Driver",
    "outline": "Description maybe.",
    "rating": 8.5,
    "director": "Martin Scorsese",
    "year": 1976,
    "stars": [
      "Robert De Niro",
      "Jodie Foster",
      "Cybill Shepherd"
    ],
    "runtime": 113,
    "genre": [
      "Crime",
      "Drama"
    ],
    "certificate": "R",
    "date": "2012-02-27T10:29:29+05:30",
    "actor": "Robert De Niro",
    "id": 62
  },
  {
    "name": "WALL·E",
    "outline": "Description maybe.",
    "rating": 8.5,
    "director": "Andrew Stanton",
    "year": 2008,
    "stars": [
      "Ben Burtt",
      "Elissa Knight",
      "Jeff Garlin"
    ],
    "runtime": 98,
    "genre": [
      "Animation",
      "Adventure",
      "Family",
      "Romance",
      "Sci-Fi"
    ],
    "certificate": "G",
    "date": "1985-05-21T10:29:29+05:30",
    "actor": "Ben Burtt",
    "id": 63
  },
  {
    "name": "A Separation",
    "outline": "Description maybe.",
    "rating": 8.5,
    "director": "Asghar Farhadi",
    "year": 2011,
    "stars": [
      "Payman Maadi",
      "Leila Hatami",
      "Sareh Bayat"
    ],
    "runtime": 123,
    "genre": [
      "Drama"
    ],
    "certificate": "PG_13",
    "date": "2013-11-07T10:29:29+05:30",
    "actor": "Payman Maadi",
    "id": 64
  },
  {
    "name": "Gladiator",
    "outline": "Description maybe.",
    "rating": 8.5,
    "director": "Ridley Scott",
    "year": 2000,
    "stars": [
      "Russell Crowe",
      "Joaquin Phoenix",
      "Connie Nielsen"
    ],
    "runtime": 155,
    "genre": [
      "Action",
      "Adventure",
      "Drama"
    ],
    "certificate": "R",
    "date": "1981-02-25T10:29:29+05:30",
    "actor": "Russell Crowe",
    "id": 65
  },
  {
    "name": "Amélie",
    "outline": "Description maybe.",
    "rating": 8.5,
    "director": "Jean-Pierre Jeunet",
    "year": 2001,
    "stars": [
      "Audrey Tautou",
      "Mathieu Kassovitz",
      "Rufus"
    ],
    "runtime": 122,
    "genre": [
      "Comedy",
      "Romance"
    ],
    "certificate": "R",
    "date": "1980-01-24T10:29:29+05:30",
    "actor": "Audrey Tautou",
    "id": 66
  },
  {
    "name": "The Green Mile",
    "outline": "Description maybe.",
    "rating": 8.5,
    "director": "Frank Darabont",
    "year": 1999,
    "stars": [
      "Tom Hanks",
      "Michael Clarke Duncan",
      "David Morse"
    ],
    "runtime": 189,
    "genre": [
      "Crime",
      "Drama",
      "Fantasy",
      "Mystery"
    ],
    "certificate": "R",
    "date": "1974-12-20T10:29:29+05:30",
    "actor": "Tom Hanks",
    "id": 67
  },
  {
    "name": "A Clockwork Orange",
    "outline": "Description maybe... but not all goes to plan.",
    "rating": 8.5,
    "director": "Stanley Kubrick",
    "year": 1971,
    "stars": [
      "Malcolm McDowell",
      "Patrick Magee",
      "Michael Bates"
    ],
    "runtime": 136,
    "genre": [
      "Crime",
      "Drama",
      "Sci-Fi"
    ],
    "certificate": "R",
    "date": "2006-07-03T10:29:29+05:30",
    "actor": "Malcolm McDowell",
    "id": 68
  },
  {
    "name": "Lawrence of Arabia",
    "outline": "Description maybe.",
    "rating": 8.5,
    "director": "David Lean",
    "year": 1962,
    "stars": [
      "Peter O'Toole",
      "Alec Guinness",
      "Anthony Quinn"
    ],
    "runtime": 216,
    "genre": [
      "Adventure",
      "Biography",
      "Drama",
      "History",
      "War"
    ],
    "certificate": "TV_14",
    "date": "1992-06-01T10:29:29+05:30",
    "actor": "Peter O'Toole",
    "id": 69
  },
  {
    "name": "The Prestige",
    "outline": "Description maybe.",
    "rating": 8.4,
    "director": "Christopher Nolan",
    "year": 2006,
    "stars": [
      "Christian Bale",
      "Hugh Jackman",
      "Scarlett Johansson"
    ],
    "runtime": 130,
    "genre": [
      "Drama",
      "Mystery",
      "Thriller"
    ],
    "certificate": "PG_13",
    "date": "1963-10-05T10:29:29+05:30",
    "actor": "Christian Bale",
    "id": 70
  },
  {
    "name": "Cinema Paradiso",
    "outline": "Description maybe.",
    "rating": 8.4,
    "director": "Giuseppe Tornatore",
    "year": 1988,
    "stars": [
      "Philippe Noiret",
      "Enzo Cannavale",
      "Antonella Attili"
    ],
    "runtime": 155,
    "genre": [
      "Drama"
    ],
    "certificate": "R",
    "date": "2000-08-16T10:29:29+05:30",
    "actor": "Philippe Noiret",
    "id": 71
  },
  {
    "name": "To Kill a Mockingbird",
    "outline": "Description maybe.",
    "rating": 8.4,
    "director": "Robert Mulligan",
    "year": 1962,
    "stars": [
      "Gregory Peck",
      "John Megna",
      "Frank Overton"
    ],
    "runtime": 129,
    "genre": [
      "Crime",
      "Drama",
      "Mystery"
    ],
    "certificate": "APPROVED",
    "date": "2013-08-20T10:29:29+05:30",
    "actor": "Gregory Peck",
    "id": 72
  },
  {
    "name": "Das Boot",
    "outline": "Description maybe.",
    "rating": 8.4,
    "director": "Wolfgang Petersen",
    "year": 1981,
    "stars": [
      "Jürgen Prochnow",
      "Herbert Grönemeyer",
      "Klaus Wennemann"
    ],
    "runtime": 149,
    "genre": [
      "Action",
      "Adventure",
      "Drama",
      "History",
      "War"
    ],
    "certificate": "UNRATED",
    "date": "1971-02-06T10:29:29+05:30",
    "actor": "Jürgen Prochnow",
    "id": 73
  },
  {
    "name": "The Treasure of the Sierra Madre",
    "outline": "Description maybe.",
    "rating": 8.4,
    "director": "John Huston",
    "year": 1948,
    "stars": [
      "Humphrey Bogart",
      "Walter Huston",
      "Tim Holt"
    ],
    "runtime": 126,
    "genre": [
      "Action",
      "Adventure",
      "Drama",
      "Western"
    ],
    "certificate": "TV_PG",
    "date": "2007-01-28T10:29:29+05:30",
    "actor": "Humphrey Bogart",
    "id": 74
  },
  {
    "name": "The Third Man",
    "outline": "Description maybe.",
    "rating": 8.4,
    "director": "Carol Reed",
    "year": 1949,
    "stars": [
      "Orson Welles",
      "Joseph Cotten",
      "Alida Valli"
    ],
    "runtime": 104,
    "genre": [
      "Film-Noir",
      "Mystery",
      "Thriller"
    ],
    "certificate": "APPROVED",
    "date": "1978-07-18T10:29:29+05:30",
    "actor": "Orson Welles",
    "id": 75
  },
  {
    "name": "Reservoir Dogs",
    "outline": "Description maybe.",
    "rating": 8.4,
    "director": "Quentin Tarantino",
    "year": 1992,
    "stars": [
      "Harvey Keitel",
      "Tim Roth",
      "Michael Madsen"
    ],
    "runtime": 99,
    "genre": [
      "Crime",
      "Thriller"
    ],
    "certificate": "R",
    "date": "2005-12-28T10:29:29+05:30",
    "actor": "Harvey Keitel",
    "id": 76
  },
  {
    "name": "Requiem for a Dream",
    "outline": "Description maybe.",
    "rating": 8.4,
    "director": "Darren Aronofsky",
    "year": 2000,
    "stars": [
      "Ellen Burstyn",
      "Jared Leto",
      "Jennifer Connelly"
    ],
    "runtime": 102,
    "genre": [
      "Drama"
    ],
    "certificate": "UNRATED",
    "date": "1972-12-28T10:29:29+05:30",
    "actor": "Ellen Burstyn",
    "id": 77
  },
  {
    "name": "Eternal Sunshine of the Spotless Mind",
    "outline": "Description maybe.",
    "rating": 8.4,
    "director": "Michel Gondry",
    "year": 2004,
    "stars": [
      "Jim Carrey",
      "Kate Winslet",
      "Tom Wilkinson"
    ],
    "runtime": 108,
    "genre": [
      "Drama",
      "Romance",
      "Sci-Fi"
    ],
    "certificate": "R",
    "date": "2005-03-14T10:29:29+05:30",
    "actor": "Jim Carrey",
    "id": 78
  },
  {
    "name": "The Lion King",
    "outline": "Description maybe.",
    "rating": 8.4,
    "director": "Roger Allers",
    "year": 1994,
    "stars": [
      "Rob Minkoff",
      "Matthew Broderick",
      "Jeremy Irons",
      "James Earl Jones"
    ],
    "runtime": 89,
    "genre": [
      "Animation",
      "Adventure",
      "Drama",
      "Family",
      "Musical"
    ],
    "certificate": "G",
    "date": "1976-10-25T10:29:29+05:30",
    "actor": "Rob Minkoff",
    "id": 79
  },
  {
    "name": "Once Upon a Time in America",
    "outline": "Description maybe.",
    "rating": 8.4,
    "director": "Sergio Leone",
    "year": 1984,
    "stars": [
      "Robert De Niro",
      "James Woods",
      "Elizabeth McGovern"
    ],
    "runtime": 229,
    "genre": [
      "Crime",
      "Drama"
    ],
    "certificate": "R",
    "date": "1984-10-13T10:29:29+05:30",
    "actor": "Robert De Niro",
    "id": 80
  },
  {
    "name": "Bicycle Thieves",
    "outline": "Description maybe.",
    "rating": 8.4,
    "director": "Vittorio De Sica",
    "year": 1948,
    "stars": [
      "Lamberto Maggiorani",
      "Enzo Staiola",
      "Lianella Carell"
    ],
    "runtime": 93,
    "genre": [
      "Crime",
      "Drama"
    ],
    "certificate": "NOT_RATED",
    "date": "2000-05-19T10:29:29+05:30",
    "actor": "Lamberto Maggiorani",
    "id": 81
  },
  {
    "name": "All About Eve",
    "outline": "Description maybe.",
    "rating": 8.4,
    "director": "Joseph L. Mankiewicz",
    "year": 1950,
    "stars": [
      "Bette Davis",
      "Anne Baxter",
      "George Sanders"
    ],
    "runtime": 138,
    "genre": [
      "Drama"
    ],
    "certificate": "APPROVED",
    "date": "1993-09-20T10:29:29+05:30",
    "actor": "Bette Davis",
    "id": 82
  },
  {
    "name": "Grave of the Fireflies",
    "outline": "Description maybe.",
    "rating": 8.4,
    "director": "Isao Takahata",
    "year": 1988,
    "stars": [
      "Tsutomu Tatsumi",
      "Ayano Shiraishi",
      "Akemi Yamaguchi"
    ],
    "runtime": 89,
    "genre": [
      "Animation",
      "Drama",
      "War"
    ],
    "certificate": "TV_14",
    "date": "2006-12-19T10:29:29+05:30",
    "actor": "Tsutomu Tatsumi",
    "id": 83
  },
  {
    "name": "Singin' in the Rain",
    "outline": "Description maybe.",
    "rating": 8.4,
    "director": "Stanley Donen",
    "year": 1952,
    "stars": [
      "Gene Kelly",
      "Gene Kelly",
      "Donald O'Connor",
      "Debbie Reynolds"
    ],
    "runtime": 103,
    "genre": [
      "Comedy",
      "Musical",
      "Romance"
    ],
    "certificate": "APPROVED",
    "date": "1981-01-01T10:29:29+05:30",
    "actor": "Gene Kelly",
    "id": 84
  },
  {
    "name": "Witness for the Prosecution",
    "outline": "Description maybe.",
    "rating": 8.4,
    "director": "Billy Wilder",
    "year": 1957,
    "stars": [
      "Tyrone Power",
      "Marlene Dietrich",
      "Charles Laughton"
    ],
    "runtime": 116,
    "genre": [
      "Drama",
      "Mystery"
    ],
    "certificate": "APPROVED",
    "date": "1966-03-12T10:29:29+05:30",
    "actor": "Tyrone Power",
    "id": 85
  },
  {
    "name": "Braveheart",
    "outline": "Description maybe.",
    "rating": 8.4,
    "director": "Mel Gibson",
    "year": 1995,
    "stars": [
      "Mel Gibson",
      "Sophie Marceau",
      "Patrick McGoohan"
    ],
    "runtime": 177,
    "genre": [
      "Action",
      "Biography",
      "Drama",
      "History",
      "War"
    ],
    "certificate": "R",
    "date": "1971-10-30T10:29:29+05:30",
    "actor": "Mel Gibson",
    "id": 86
  },
  {
    "name": "Princess Mononoke",
    "outline": "Description maybe.",
    "rating": 8.4,
    "director": "Hayao Miyazaki",
    "year": 1997,
    "stars": [
      "Yôji Matsuda",
      "Yuriko Ishida",
      "Yûko Tanaka"
    ],
    "runtime": 134,
    "genre": [
      "Animation",
      "Adventure",
      "Fantasy"
    ],
    "certificate": "TV_14",
    "date": "1980-07-16T10:29:29+05:30",
    "actor": "Yôji Matsuda",
    "id": 87
  },
  {
    "name": "Star Wars: Episode VI - Return of the Jedi",
    "outline": "Description maybe.",
    "rating": 8.4,
    "director": "Richard Marquand",
    "year": 1983,
    "stars": [
      "Mark Hamill",
      "Harrison Ford",
      "Carrie Fisher"
    ],
    "runtime": 134,
    "genre": [
      "Action",
      "Adventure",
      "Fantasy",
      "Sci-Fi"
    ],
    "certificate": "PG",
    "date": "1994-11-14T10:29:29+05:30",
    "actor": "Mark Hamill",
    "id": 88
  },
  {
    "name": "Rashomon",
    "outline": "Description maybe.",
    "rating": 8.4,
    "director": "Akira Kurosawa",
    "year": 1950,
    "stars": [
      "Toshirô Mifune",
      "Machiko Kyô",
      "Masayuki Mori"
    ],
    "runtime": 88,
    "genre": [
      "Crime",
      "Drama"
    ],
    "certificate": "UNRATED",
    "date": "1966-07-13T10:29:29+05:30",
    "actor": "Toshirô Mifune",
    "id": 89
  },
  {
    "name": "Metropolis",
    "outline": "Description maybe.",
    "rating": 8.4,
    "director": "Fritz Lang",
    "year": 1927,
    "stars": [
      "Brigitte Helm",
      "Alfred Abel",
      "Gustav Fröhlich"
    ],
    "runtime": 153,
    "genre": [
      "Drama",
      "Sci-Fi"
    ],
    "certificate": "NOT_RATED",
    "date": "1987-01-19T10:29:29+05:30",
    "actor": "Brigitte Helm",
    "id": 90
  },
  {
    "name": "Oldboy",
    "outline": "Description maybe.",
    "rating": 8.4,
    "director": "Chan-wook Park",
    "year": 2003,
    "stars": [
      "Min-sik Choi",
      "Ji-tae Yu",
      "Hye-jeong Kang"
    ],
    "runtime": 120,
    "genre": [
      "Drama",
      "Mystery",
      "Thriller"
    ],
    "certificate": "R",
    "date": "1988-12-24T10:29:29+05:30",
    "actor": "Min-sik Choi",
    "id": 91
  },
  {
    "name": "Monty Python and the Holy Grail",
    "outline": "Description maybe.",
    "rating": 8.4,
    "director": "Terry Gilliam",
    "year": 1975,
    "stars": [
      "Terry Jones",
      "Graham Chapman",
      "John Cleese",
      "Eric Idle"
    ],
    "runtime": 91,
    "genre": [
      "Adventure",
      "Comedy",
      "Fantasy"
    ],
    "certificate": "PG",
    "date": "1964-09-26T10:29:29+05:30",
    "actor": "Terry Jones",
    "id": 92
  },
  {
    "name": "Some Like It Hot",
    "outline": "Description maybe.",
    "rating": 8.4,
    "director": "Billy Wilder",
    "year": 1959,
    "stars": [
      "Marilyn Monroe",
      "Tony Curtis",
      "Jack Lemmon"
    ],
    "runtime": 120,
    "genre": [
      "Comedy"
    ],
    "certificate": "APPROVED",
    "date": "1978-10-07T10:29:29+05:30",
    "actor": "Marilyn Monroe",
    "id": 93
  },
  {
    "name": "Chinatown",
    "outline": "Description maybe.",
    "rating": 8.4,
    "director": "Roman Polanski",
    "year": 1974,
    "stars": [
      "Jack Nicholson",
      "Faye Dunaway",
      "John Huston"
    ],
    "runtime": 130,
    "genre": [
      "Crime",
      "Drama",
      "Mystery"
    ],
    "certificate": "TV_14",
    "date": "2013-10-22T10:29:29+05:30",
    "actor": "Jack Nicholson",
    "id": 94
  },
  {
    "name": "Full Metal Jacket",
    "outline": "Description maybe.",
    "rating": 8.4,
    "director": "Stanley Kubrick",
    "year": 1987,
    "stars": [
      "Matthew Modine",
      "R. Lee Ermey",
      "Vincent D'Onofrio"
    ],
    "runtime": 116,
    "genre": [
      "Drama",
      "War"
    ],
    "certificate": "R",
    "date": "1964-12-23T10:29:29+05:30",
    "actor": "Matthew Modine",
    "id": 95
  },
  {
    "name": "The Apartment",
    "outline": "Description maybe.",
    "rating": 8.4,
    "director": "Billy Wilder",
    "year": 1960,
    "stars": [
      "Jack Lemmon",
      "Shirley MacLaine",
      "Fred MacMurray"
    ],
    "runtime": 125,
    "genre": [
      "Comedy",
      "Drama",
      "Romance"
    ],
    "certificate": "APPROVED",
    "date": "1981-02-09T10:29:29+05:30",
    "actor": "Jack Lemmon",
    "id": 96
  },
  {
    "name": "Amadeus",
    "outline": "Description maybe.",
    "rating": 8.4,
    "director": "Milos Forman",
    "year": 1984,
    "stars": [
      "F. Murray Abraham",
      "Tom Hulce",
      "Elizabeth Berridge"
    ],
    "runtime": 160,
    "genre": [
      "Biography",
      "Drama",
      "Music"
    ],
    "certificate": "R",
    "date": "2012-03-04T10:29:29+05:30",
    "actor": "F. Murray Abraham",
    "id": 97
  },
  {
    "name": "L.A. Confidential",
    "outline": "Description maybe.",
    "rating": 8.4,
    "director": "Curtis Hanson",
    "year": 1997,
    "stars": [
      "Kevin Spacey",
      "Russell Crowe",
      "Guy Pearce"
    ],
    "runtime": 138,
    "genre": [
      "Crime",
      "Drama",
      "Mystery",
      "Thriller"
    ],
    "certificate": "R",
    "date": "1982-07-10T10:29:29+05:30",
    "actor": "Kevin Spacey",
    "id": 98
  },
  {
    "name": "Like Stars on Earth",
    "outline": "Description maybe.",
    "rating": 8.4,
    "director": "Aamir Khan",
    "year": 2007,
    "stars": [
      "Darsheel Safary",
      "Aamir Khan",
      "Tanay Chheda"
    ],
    "runtime": 165,
    "genre": [
      "Drama"
    ],
    "certificate": "PG",
    "date": "2005-04-11T10:29:29+05:30",
    "actor": "Darsheel Safary",
    "id": 99
  },
  {
    "name": "The Sting",
    "outline": "Description maybe.",
    "rating": 8.4,
    "director": "George Roy Hill",
    "year": 1973,
    "stars": [
      "Paul Newman",
      "Robert Redford",
      "Robert Shaw"
    ],
    "runtime": 129,
    "genre": [
      "Comedy",
      "Crime",
      "Drama"
    ],
    "certificate": "TV_14",
    "date": "1968-04-03T10:29:29+05:30",
    "actor": "Paul Newman",
    "id": 100
  },
  {
    "name": "Yojimbo",
    "outline": "Description maybe.",
    "rating": 8.4,
    "director": "Akira Kurosawa",
    "year": 1961,
    "stars": [
      "Toshirô Mifune",
      "Eijirô Tôno",
      "Tatsuya Nakadai"
    ],
    "runtime": 110,
    "genre": [
      "Action",
      "Adventure"
    ],
    "certificate": "TV_MA",
    "date": "1981-08-02T10:29:29+05:30",
    "actor": "Toshirô Mifune",
    "id": 101
  },
  {
    "name": "2001: A Space Odyssey",
    "outline": "Description maybe.A.L. 9000, sets off on a quest.",
    "rating": 8.4,
    "director": "Stanley Kubrick",
    "year": 1968,
    "stars": [
      "Keir Dullea",
      "Gary Lockwood",
      "William Sylvester"
    ],
    "runtime": 141,
    "genre": [
      "Adventure",
      "Mystery",
      "Sci-Fi"
    ],
    "certificate": "TV_PG",
    "date": "1970-07-02T10:29:29+05:30",
    "actor": "Keir Dullea",
    "id": 102
  },
  {
    "name": "The Bridge on the River Kwai",
    "outline": "Description maybe.",
    "rating": 8.3,
    "director": "David Lean",
    "year": 1957,
    "stars": [
      "William Holden",
      "Alec Guinness",
      "Jack Hawkins"
    ],
    "runtime": 161,
    "genre": [
      "Adventure",
      "Drama",
      "History",
      "War"
    ],
    "certificate": "APPROVED",
    "date": "2001-09-25T10:29:29+05:30",
    "actor": "William Holden",
    "id": 103
  },
  {
    "name": "Raging Bull",
    "outline": "Description maybe.",
    "rating": 8.3,
    "director": "Martin Scorsese",
    "year": 1980,
    "stars": [
      "Robert De Niro",
      "Cathy Moriarty",
      "Joe Pesci"
    ],
    "runtime": 129,
    "genre": [
      "Biography",
      "Drama",
      "Sport"
    ],
    "certificate": "R",
    "date": "2000-04-30T10:29:29+05:30",
    "actor": "Robert De Niro",
    "id": 104
  },
  {
    "name": "Unforgiven",
    "outline": "Description maybe.",
    "rating": 8.3,
    "director": "Clint Eastwood",
    "year": 1992,
    "stars": [
      "Clint Eastwood",
      "Gene Hackman",
      "Morgan Freeman"
    ],
    "runtime": 131,
    "genre": [
      "Western"
    ],
    "certificate": "R",
    "date": "2005-11-24T10:29:29+05:30",
    "actor": "Clint Eastwood",
    "id": 105
  },
  {
    "name": "Mr. Smith Goes to Washington",
    "outline": "Description maybe.",
    "rating": 8.3,
    "director": "Frank Capra",
    "year": 1939,
    "stars": [
      "James Stewart",
      "Jean Arthur",
      "Claude Rains"
    ],
    "runtime": 129,
    "genre": [
      "Drama"
    ],
    "certificate": "APPROVED",
    "date": "1962-07-24T10:29:29+05:30",
    "actor": "James Stewart",
    "id": 106
  },
  {
    "name": "The General",
    "outline": "Description maybe.",
    "rating": 8.3,
    "director": "Clyde Bruckman",
    "year": 1926,
    "stars": [
      "Buster Keaton",
      "Buster Keaton",
      "Marion Mack",
      "Glen Cavender"
    ],
    "runtime": 107,
    "genre": [
      "Action",
      "Adventure",
      "Comedy",
      "Romance",
      "War"
    ],
    "certificate": "UNRATED",
    "date": "1983-06-04T10:29:29+05:30",
    "actor": "Buster Keaton",
    "id": 107
  },
  {
    "name": "Indiana Jones and the Last Crusade",
    "outline": "Description maybe.",
    "rating": 8.3,
    "director": "Steven Spielberg",
    "year": 1989,
    "stars": [
      "Harrison Ford",
      "Sean Connery",
      "Alison Doody"
    ],
    "runtime": 127,
    "genre": [
      "Action",
      "Adventure"
    ],
    "certificate": "United States-E",
    "date": "2014-03-19T10:29:29+05:30",
    "actor": "Harrison Ford",
    "id": 108
  },
  {
    "name": "Batman Begins",
    "outline": "Description maybe.",
    "rating": 8.3,
    "director": "Christopher Nolan",
    "year": 2005,
    "stars": [
      "Christian Bale",
      "Michael Caine",
      "Ken Watanabe"
    ],
    "runtime": 140,
    "genre": [
      "Action",
      "Adventure",
      "Crime",
      "Drama"
    ],
    "certificate": "PG_13",
    "date": "2003-03-20T10:29:29+05:30",
    "actor": "Christian Bale",
    "id": 109
  },
  {
    "name": "For a Few Dollars More",
    "outline": "Description maybe.",
    "rating": 8.3,
    "director": "Sergio Leone",
    "year": 1965,
    "stars": [
      "Clint Eastwood",
      "Lee Van Cleef",
      "Gian Maria Volonté"
    ],
    "runtime": 132,
    "genre": [
      "Western"
    ],
    "certificate": "APPROVED",
    "date": "2006-07-25T10:29:29+05:30",
    "actor": "Clint Eastwood",
    "id": 110
  },
  {
    "name": "The Great Escape",
    "outline": "Description maybe.",
    "rating": 8.3,
    "director": "John Sturges",
    "year": 1963,
    "stars": [
      "Steve McQueen",
      "James Garner",
      "Richard Attenborough"
    ],
    "runtime": 172,
    "genre": [
      "Adventure",
      "Drama",
      "History",
      "Thriller",
      "War"
    ],
    "certificate": "UNRATED",
    "date": "1999-04-14T10:29:29+05:30",
    "actor": "Steve McQueen",
    "id": 111
  },
  {
    "name": "On the Waterfront",
    "outline": "Description maybe.",
    "rating": 8.3,
    "director": "Elia Kazan",
    "year": 1954,
    "stars": [
      "Marlon Brando",
      "Karl Malden",
      "Lee J. Cobb"
    ],
    "runtime": 108,
    "genre": [
      "Crime",
      "Drama"
    ],
    "certificate": "APPROVED",
    "date": "1997-02-11T10:29:29+05:30",
    "actor": "Marlon Brando",
    "id": 112
  },
  {
    "name": "The Kid",
    "outline": "Description maybe.",
    "rating": 8.3,
    "director": "Charles Chaplin",
    "year": 1921,
    "stars": [
      "Charles Chaplin",
      "Edna Purviance",
      "Jackie Coogan"
    ],
    "runtime": 68,
    "genre": [
      "Comedy",
      "Drama",
      "Family"
    ],
    "certificate": "NOT_RATED",
    "date": "1964-12-04T10:29:29+05:30",
    "actor": "Charles Chaplin",
    "id": 113
  },
  {
    "name": "Die Hard",
    "outline": "Description maybe.",
    "rating": 8.3,
    "director": "John McTiernan",
    "year": 1988,
    "stars": [
      "Bruce Willis",
      "Alan Rickman",
      "Bonnie Bedelia"
    ],
    "runtime": 131,
    "genre": [
      "Action",
      "Thriller"
    ],
    "certificate": "R",
    "date": "1995-05-19T10:29:29+05:30",
    "actor": "Bruce Willis",
    "id": 114
  },
  {
    "name": "Downfall",
    "outline": "Description maybe.",
    "rating": 8.3,
    "director": "Oliver Hirschbiegel",
    "year": 2004,
    "stars": [
      "Bruno Ganz",
      "Alexandra Maria Lara",
      "Ulrich Matthes"
    ],
    "runtime": 156,
    "genre": [
      "Biography",
      "Drama",
      "History",
      "War"
    ],
    "certificate": "R",
    "date": "2005-07-08T10:29:29+05:30",
    "actor": "Bruno Ganz",
    "id": 115
  },
  {
    "name": "Snatch.",
    "outline": "Description maybe.",
    "rating": 8.3,
    "director": "Guy Ritchie",
    "year": 2000,
    "stars": [
      "Jason Statham",
      "Brad Pitt",
      "Benicio Del Toro"
    ],
    "runtime": 104,
    "genre": [
      "Crime",
      "Thriller"
    ],
    "certificate": "R",
    "date": "1989-12-16T10:29:29+05:30",
    "actor": "Jason Statham",
    "id": 116
  },
  {
    "name": "The Seventh Seal",
    "outline": "Description maybe.",
    "rating": 8.3,
    "director": "Ingmar Bergman",
    "year": 1957,
    "stars": [
      "Max von Sydow",
      "Gunnar Björnstrand",
      "Bengt Ekerot"
    ],
    "runtime": 96,
    "genre": [
      "Drama",
      "Fantasy"
    ],
    "certificate": "TV_PG",
    "date": "1971-09-29T10:29:29+05:30",
    "actor": "Max von Sydow",
    "id": 117
  },
  {
    "name": "Pan's Labyrinth",
    "outline": "Description maybe.",
    "rating": 8.3,
    "director": "Guillermo del Toro",
    "year": 2006,
    "stars": [
      "Ivana Baquero",
      "Ariadna Gil",
      "Sergi López"
    ],
    "runtime": 118,
    "genre": [
      "Drama",
      "Fantasy",
      "War"
    ],
    "certificate": "R",
    "date": "1971-04-20T10:29:29+05:30",
    "actor": "Ivana Baquero",
    "id": 118
  },
  {
    "name": "Wild Strawberries",
    "outline": "Description maybe.",
    "rating": 8.3,
    "director": "Ingmar Bergman",
    "year": 1957,
    "stars": [
      "Victor Sjöström",
      "Bibi Andersson",
      "Ingrid Thulin"
    ],
    "runtime": 91,
    "genre": [
      "Drama"
    ],
    "certificate": "UNRATED",
    "date": "1959-12-14T10:29:29+05:30",
    "actor": "Victor Sjöström",
    "id": 119
  },
  {
    "name": "Inglourious Basterds",
    "outline": "Description maybe",
    "rating": 8.3,
    "director": "Quentin Tarantino",
    "year": 2009,
    "stars": [
      "Brad Pitt",
      "Diane Kruger",
      "Eli Roth"
    ],
    "runtime": 153,
    "genre": [
      "Adventure",
      "Drama",
      "War"
    ],
    "certificate": "R",
    "date": "1960-08-07T10:29:29+05:30",
    "actor": "Brad Pitt",
    "id": 120
  },
  {
    "name": "Up",
    "outline": "Description maybe.",
    "rating": 8.3,
    "director": "Pete Docter",
    "year": 2009,
    "stars": [
      "Bob Peterson",
      "Edward Asner",
      "Jordan Nagai",
      "John Ratzenberger"
    ],
    "runtime": 96,
    "genre": [
      "Animation",
      "Adventure",
      "Comedy",
      "Drama",
      "Family",
      "Fantasy"
    ],
    "certificate": "PG",
    "date": "1977-01-18T10:29:29+05:30",
    "actor": "Bob Peterson",
    "id": 121
  },
  {
    "name": "The Elephant Man",
    "outline": "Description maybe.",
    "rating": 8.3,
    "director": "David Lynch",
    "year": 1980,
    "stars": [
      "Anthony Hopkins",
      "John Hurt",
      "Anne Bancroft"
    ],
    "runtime": 124,
    "genre": [
      "Biography",
      "Drama"
    ],
    "certificate": "PG",
    "date": "1964-11-29T10:29:29+05:30",
    "actor": "Anthony Hopkins",
    "id": 122
  },
  {
    "name": "The Maltese Falcon",
    "outline": "Description maybe.",
    "rating": 8.3,
    "director": "John Huston",
    "year": 1941,
    "stars": [
      "Humphrey Bogart",
      "Mary Astor",
      "Gladys George"
    ],
    "runtime": 100,
    "genre": [
      "Crime",
      "Drama",
      "Film-Noir",
      "Mystery"
    ],
    "certificate": "APPROVED",
    "date": "1985-12-06T10:29:29+05:30",
    "actor": "Humphrey Bogart",
    "id": 123
  },
  {
    "name": "Rebecca",
    "outline": "Description maybe.",
    "rating": 8.3,
    "director": "Alfred Hitchcock",
    "year": 1940,
    "stars": [
      "Laurence Olivier",
      "Joan Fontaine",
      "George Sanders"
    ],
    "runtime": 130,
    "genre": [
      "Drama",
      "Mystery",
      "Thriller"
    ],
    "certificate": "APPROVED",
    "date": "2007-01-08T10:29:29+05:30",
    "actor": "Laurence Olivier",
    "id": 124
  },
  {
    "name": "The Avengers",
    "outline": "Description maybe",
    "rating": 8.3,
    "director": "Joss Whedon",
    "year": 2012,
    "stars": [
      "Robert Downey Jr.",
      "Chris Evans",
      "Scarlett Johansson"
    ],
    "runtime": 143,
    "genre": [
      "Action"
    ],
    "certificate": "PG_13",
    "date": "1994-03-18T10:29:29+05:30",
    "actor": "Robert Downey Jr.",
    "id": 125
  },
  {
    "name": "3 Idiots",
    "outline": "Description maybe.",
    "rating": 8.3,
    "director": "Rajkumar Hirani",
    "year": 2009,
    "stars": [
      "Aamir Khan",
      "Madhavan",
      "Mona Singh"
    ],
    "runtime": 170,
    "genre": [
      "Comedy",
      "Drama",
      "Romance"
    ],
    "certificate": "PG_13",
    "date": "2009-04-24T10:29:29+05:30",
    "actor": "Aamir Khan",
    "id": 126
  },
  {
    "name": "Heat",
    "outline": "Description maybe.",
    "rating": 8.3,
    "director": "Michael Mann",
    "year": 1995,
    "stars": [
      "Al Pacino",
      "Robert De Niro",
      "Val Kilmer"
    ],
    "runtime": 170,
    "genre": [
      "Action",
      "Crime",
      "Drama",
      "Thriller"
    ],
    "certificate": "R",
    "date": "1999-12-12T10:29:29+05:30",
    "actor": "Al Pacino",
    "id": 127
  },
  {
    "name": "Toy Story",
    "outline": "Description maybe.",
    "rating": 8.3,
    "director": "John Lasseter",
    "year": 1995,
    "stars": [
      "Tom Hanks",
      "Tim Allen",
      "Don Rickles"
    ],
    "runtime": 81,
    "genre": [
      "Animation",
      "Adventure",
      "Comedy",
      "Family",
      "Fantasy"
    ],
    "certificate": "G",
    "date": "2008-09-07T10:29:29+05:30",
    "actor": "Tom Hanks",
    "id": 128
  },
  {
    "name": "Blade Runner",
    "outline": "Description maybe.",
    "rating": 8.3,
    "director": "Ridley Scott",
    "year": 1982,
    "stars": [
      "Harrison Ford",
      "Rutger Hauer",
      "Sean Young"
    ],
    "runtime": 117,
    "genre": [
      "Drama",
      "Sci-Fi",
      "Thriller"
    ],
    "certificate": "R",
    "date": "1981-02-09T10:29:29+05:30",
    "actor": "Harrison Ford",
    "id": 129
  },
  {
    "name": "Ran",
    "outline": "Description maybe.",
    "rating": 8.3,
    "director": "Akira Kurosawa",
    "year": 1985,
    "stars": [
      "Tatsuya Nakadai",
      "Akira Terao",
      "Jinpachi Nezu"
    ],
    "runtime": 162,
    "genre": [
      "Action",
      "Drama",
      "War"
    ],
    "certificate": "R",
    "date": "1985-07-11T10:29:29+05:30",
    "actor": "Tatsuya Nakadai",
    "id": 130
  },
  {
    "name": "Scarface",
    "outline": "Description maybe.",
    "rating": 8.3,
    "director": "Brian De Palma",
    "year": 1983,
    "stars": [
      "Al Pacino",
      "Michelle Pfeiffer",
      "Steven Bauer"
    ],
    "runtime": 170,
    "genre": [
      "Crime",
      "Drama",
      "Thriller"
    ],
    "certificate": "R",
    "date": "1986-01-27T10:29:29+05:30",
    "actor": "Al Pacino",
    "id": 131
  },
  {
    "name": "Touch of Evil",
    "outline": "Description maybe.",
    "rating": 8.3,
    "director": "Orson Welles",
    "year": 1958,
    "stars": [
      "Charlton Heston",
      "Orson Welles",
      "Janet Leigh"
    ],
    "runtime": 95,
    "genre": [
      "Crime",
      "Film-Noir",
      "Thriller"
    ],
    "certificate": "UNRATED",
    "date": "2004-07-12T10:29:29+05:30",
    "actor": "Charlton Heston",
    "id": 132
  },
  {
    "name": "The Gold Rush",
    "outline": "Description maybe.",
    "rating": 8.2,
    "director": "Charles Chaplin",
    "year": 1925,
    "stars": [
      "Charles Chaplin",
      "Mack Swain",
      "Tom Murray"
    ],
    "runtime": 95,
    "genre": [
      "Adventure",
      "Comedy",
      "Family",
      "Romance",
      "Western"
    ],
    "certificate": "NOT_RATED",
    "date": "2010-05-05T10:29:29+05:30",
    "actor": "Charles Chaplin",
    "id": 133
  },
  {
    "name": "Gran Torino",
    "outline": "Description maybe.",
    "rating": 8.2,
    "director": "Clint Eastwood",
    "year": 2008,
    "stars": [
      "Clint Eastwood",
      "Bee Vang",
      "Christopher Carley"
    ],
    "runtime": 116,
    "genre": [
      "Drama"
    ],
    "certificate": "R",
    "date": "1986-03-28T10:29:29+05:30",
    "actor": "Clint Eastwood",
    "id": 134
  },
  {
    "name": "The Big Lebowski",
    "outline": "Description maybe.",
    "rating": 8.2,
    "director": "Joel Coen",
    "year": 1998,
    "stars": [
      "Jeff Bridges",
      "John Goodman",
      "Julianne Moore"
    ],
    "runtime": 117,
    "genre": [
      "Comedy",
      "Crime"
    ],
    "certificate": "R",
    "date": "1987-01-01T10:29:29+05:30",
    "actor": "Jeff Bridges",
    "id": 135
  },
  {
    "name": "It Happened One Night",
    "outline": "Description maybe.",
    "rating": 8.2,
    "director": "Frank Capra",
    "year": 1934,
    "stars": [
      "Clark Gable",
      "Claudette Colbert",
      "Walter Connolly"
    ],
    "runtime": 105,
    "genre": [
      "Comedy",
      "Romance"
    ],
    "certificate": "UNRATED",
    "date": "1968-02-03T10:29:29+05:30",
    "actor": "Clark Gable",
    "id": 136
  },
  {
    "name": "Cool Hand Luke",
    "outline": "Description maybe.",
    "rating": 8.2,
    "director": "Stuart Rosenberg",
    "year": 1967,
    "stars": [
      "Paul Newman",
      "George Kennedy",
      "Strother Martin"
    ],
    "runtime": 126,
    "genre": [
      "Crime",
      "Drama"
    ],
    "certificate": "APPROVED",
    "date": "2001-04-06T10:29:29+05:30",
    "actor": "Paul Newman",
    "id": 137
  },
  {
    "name": "Fargo",
    "outline": "Description maybe.",
    "rating": 8.2,
    "director": "Joel Coen",
    "year": 1996,
    "stars": [
      "William H. Macy",
      "Frances McDormand",
      "Steve Buscemi"
    ],
    "runtime": 98,
    "genre": [
      "Crime",
      "Drama"
    ],
    "certificate": "R",
    "date": "1986-05-30T10:29:29+05:30",
    "actor": "William H. Macy",
    "id": 138
  },
  {
    "name": "Warrior",
    "outline": "Description maybe.",
    "rating": 8.2,
    "director": "Gavin O'Connor",
    "year": 2011,
    "stars": [
      "Tom Hardy",
      "Nick Nolte",
      "Joel Edgerton"
    ],
    "runtime": 140,
    "genre": [
      "Drama",
      "Sport"
    ],
    "certificate": "PG_13",
    "date": "1988-01-17T10:29:29+05:30",
    "actor": "Tom Hardy",
    "id": 139
  },
  {
    "name": "The Deer Hunter",
    "outline": "Description maybe.",
    "rating": 8.2,
    "director": "Michael Cimino",
    "year": 1978,
    "stars": [
      "Robert De Niro",
      "Christopher Walken",
      "John Cazale"
    ],
    "runtime": 182,
    "genre": [
      "Drama",
      "War"
    ],
    "certificate": "R",
    "date": "1967-06-11T10:29:29+05:30",
    "actor": "Robert De Niro",
    "id": 140
  },
  {
    "name": "The Secret in Their Eyes",
    "outline": "Description maybe.",
    "rating": 8.2,
    "director": "Juan José Campanella",
    "year": 2009,
    "stars": [
      "Ricardo Darín",
      "Soledad Villamil",
      "Pablo Rago"
    ],
    "runtime": 129,
    "genre": [
      "Drama",
      "Mystery",
      "Thriller"
    ],
    "certificate": "R",
    "date": "2013-04-11T10:29:29+05:30",
    "actor": "Ricardo Darín",
    "id": 141
  },
  {
    "name": "Strangers on a Train",
    "outline": "Description maybe.",
    "rating": 8.2,
    "director": "Alfred Hitchcock",
    "year": 1951,
    "stars": [
      "Farley Granger",
      "Robert Walker",
      "Ruth Roman"
    ],
    "runtime": 101,
    "genre": [
      "Crime",
      "Thriller"
    ],
    "certificate": "APPROVED",
    "date": "1995-09-01T10:29:29+05:30",
    "actor": "Farley Granger",
    "id": 142
  },
  {
    "name": "The Best Years of Our Lives",
    "outline": "Description maybe.",
    "rating": 8.2,
    "director": "William Wyler",
    "year": 1946,
    "stars": [
      "Fredric March",
      "Dana Andrews",
      "Myrna Loy"
    ],
    "runtime": 172,
    "genre": [
      "Drama",
      "Romance",
      "War"
    ],
    "certificate": "APPROVED",
    "date": "2008-06-05T10:29:29+05:30",
    "actor": "Fredric March",
    "id": 143
  },
  {
    "name": "Lock, Stock and Two Smoking Barrels",
    "outline": "Description maybe.",
    "rating": 8.2,
    "director": "Guy Ritchie",
    "year": 1998,
    "stars": [
      "Jason Flemyng",
      "Dexter Fletcher",
      "Nick Moran"
    ],
    "runtime": 107,
    "genre": [
      "Crime",
      "Thriller"
    ],
    "certificate": "R",
    "date": "2007-01-07T10:29:29+05:30",
    "actor": "Jason Flemyng",
    "id": 144
  },
  {
    "name": "High Noon",
    "outline": "Description maybe.",
    "rating": 8.2,
    "director": "Fred Zinnemann",
    "year": 1952,
    "stars": [
      "Gary Cooper",
      "Grace Kelly",
      "Thomas Mitchell"
    ],
    "runtime": 85,
    "genre": [
      "Drama",
      "Western"
    ],
    "certificate": "APPROVED",
    "date": "1963-12-31T10:29:29+05:30",
    "actor": "Gary Cooper",
    "id": 145
  },
  {
    "name": "My Neighbor Totoro",
    "outline": "Description maybe.",
    "rating": 8.2,
    "director": "Hayao Miyazaki",
    "year": 1988,
    "stars": [
      "Hitoshi Takagi",
      "Noriko Hidaka",
      "Toshiyuki Amagasa"
    ],
    "runtime": 86,
    "genre": [
      "Animation",
      "Family",
      "Fantasy"
    ],
    "certificate": "G",
    "date": "1959-12-20T10:29:29+05:30",
    "actor": "Hitoshi Takagi",
    "id": 146
  },
  {
    "name": "Sin City",
    "outline": "Description maybe.",
    "rating": 8.2,
    "director": "Frank Miller",
    "year": 2005,
    "stars": [
      "Robert Rodriguez",
      "Mickey Rourke",
      "Clive Owen",
      "Bruce Willis"
    ],
    "runtime": 124,
    "genre": [
      "Crime",
      "Thriller"
    ],
    "certificate": "UNRATED",
    "date": "1964-01-23T10:29:29+05:30",
    "actor": "Robert Rodriguez",
    "id": 147
  },
  {
    "name": "The Grapes of Wrath",
    "outline": "Description maybe.",
    "rating": 8.2,
    "director": "John Ford",
    "year": 1940,
    "stars": [
      "Henry Fonda",
      "Jane Darwell",
      "John Carradine"
    ],
    "runtime": 129,
    "genre": [
      "Drama"
    ],
    "certificate": "APPROVED",
    "date": "1980-05-29T10:29:29+05:30",
    "actor": "Henry Fonda",
    "id": 148
  },
  {
    "name": "Gone with the Wind",
    "outline": "Description maybe.",
    "rating": 8.2,
    "director": "Victor Fleming",
    "year": 1939,
    "stars": [
      "Clark Gable",
      "Vivien Leigh",
      "Thomas Mitchell"
    ],
    "runtime": 238,
    "genre": [
      "Drama",
      "Romance",
      "War"
    ],
    "certificate": "APPROVED",
    "date": "1986-11-12T10:29:29+05:30",
    "actor": "Clark Gable",
    "id": 149
  },
  {
    "name": "Butch Cassidy and the Sundance Kid",
    "outline": "Description maybe.",
    "rating": 8.2,
    "director": "George Roy Hill",
    "year": 1969,
    "stars": [
      "Paul Newman",
      "Robert Redford",
      "Katharine Ross"
    ],
    "runtime": 110,
    "genre": [
      "Adventure",
      "Biography",
      "Crime",
      "Western"
    ],
    "certificate": "United States-M",
    "date": "2008-02-25T10:29:29+05:30",
    "actor": "Paul Newman",
    "id": 150
  },
  {
    "name": "The Thing",
    "outline": "Description maybe.",
    "rating": 8.2,
    "director": "John Carpenter",
    "year": 1982,
    "stars": [
      "Kurt Russell",
      "Wilford Brimley",
      "Keith David"
    ],
    "runtime": 109,
    "genre": [
      "Horror",
      "Mystery",
      "Sci-Fi",
      "Thriller"
    ],
    "certificate": "R",
    "date": "2004-07-06T10:29:29+05:30",
    "actor": "Kurt Russell",
    "id": 151
  },
  {
    "name": "Hotel Rwanda",
    "outline": "Description maybe.",
    "rating": 8.2,
    "director": "Terry George",
    "year": 2004,
    "stars": [
      "Don Cheadle",
      "Sophie Okonedo",
      "Joaquin Phoenix"
    ],
    "runtime": 121,
    "genre": [
      "Biography",
      "Drama",
      "History",
      "War"
    ],
    "certificate": "R",
    "date": "1996-05-04T10:29:29+05:30",
    "actor": "Don Cheadle",
    "id": 152
  },
  {
    "name": "No Country for Old Men",
    "outline": "Description maybe.",
    "rating": 8.2,
    "director": "Ethan Coen",
    "year": 2007,
    "stars": [
      "Joel Coen",
      "Tommy Lee Jones",
      "Javier Bardem",
      "Josh Brolin"
    ],
    "runtime": 122,
    "genre": [
      "Crime",
      "Drama",
      "Thriller"
    ],
    "certificate": "R",
    "date": "1992-04-24T10:29:29+05:30",
    "actor": "Joel Coen",
    "id": 153
  },
  {
    "name": "Casino",
    "outline": "Description maybe.",
    "rating": 8.2,
    "director": "Martin Scorsese",
    "year": 1995,
    "stars": [
      "Robert De Niro",
      "Sharon Stone",
      "Joe Pesci"
    ],
    "runtime": 178,
    "genre": [
      "Biography",
      "Crime",
      "Drama"
    ],
    "certificate": "R",
    "date": "1976-04-01T10:29:29+05:30",
    "actor": "Robert De Niro",
    "id": 154
  },
  {
    "name": "Notorious",
    "outline": "Description maybe",
    "rating": 8.2,
    "director": "Alfred Hitchcock",
    "year": 1946,
    "stars": [
      "Cary Grant",
      "Ingrid Bergman",
      "Claude Rains"
    ],
    "runtime": 101,
    "genre": [
      "Drama",
      "Romance",
      "Thriller"
    ],
    "certificate": "UNRATED",
    "date": "2002-06-13T10:29:29+05:30",
    "actor": "Cary Grant",
    "id": 155
  },
  {
    "name": "Trainspotting",
    "outline": "Description maybe.",
    "rating": 8.2,
    "director": "Danny Boyle",
    "year": 1996,
    "stars": [
      "Ewan McGregor",
      "Ewen Bremner",
      "Jonny Lee Miller"
    ],
    "runtime": 94,
    "genre": [
      "Crime",
      "Drama"
    ],
    "certificate": "R",
    "date": "1997-12-06T10:29:29+05:30",
    "actor": "Ewan McGregor",
    "id": 156
  },
  {
    "name": "V for Vendetta",
    "outline": "Description maybe.",
    "rating": 8.2,
    "director": "James McTeigue",
    "year": 2005,
    "stars": [
      "Hugo Weaving",
      "Natalie Portman",
      "Rupert Graves"
    ],
    "runtime": 132,
    "genre": [
      "Action",
      "Fantasy",
      "Thriller"
    ],
    "certificate": "R",
    "date": "1966-08-13T10:29:29+05:30",
    "actor": "Hugo Weaving",
    "id": 157
  },
  {
    "name": "The Wizard of Oz",
    "outline": "Description maybe.",
    "rating": 8.2,
    "director": "Victor Fleming",
    "year": 1939,
    "stars": [
      "Judy Garland",
      "Frank Morgan",
      "Ray Bolger"
    ],
    "runtime": 101,
    "genre": [
      "Adventure",
      "Family",
      "Fantasy",
      "Musical"
    ],
    "certificate": "APPROVED",
    "date": "1977-09-11T10:29:29+05:30",
    "actor": "Judy Garland",
    "id": 158
  },
  {
    "name": "Good Will Hunting",
    "outline": "Description maybe.",
    "rating": 8.2,
    "director": "Gus Van Sant",
    "year": 1997,
    "stars": [
      "Robin Williams",
      "Matt Damon",
      "Ben Affleck"
    ],
    "runtime": 126,
    "genre": [
      "Drama"
    ],
    "certificate": "R",
    "date": "1999-07-28T10:29:29+05:30",
    "actor": "Robin Williams",
    "id": 159
  },
  {
    "name": "Platoon",
    "outline": "Description maybe.",
    "rating": 8.2,
    "director": "Oliver Stone",
    "year": 1986,
    "stars": [
      "Charlie Sheen",
      "Tom Berenger",
      "Willem Dafoe"
    ],
    "runtime": 120,
    "genre": [
      "Action",
      "Drama",
      "War"
    ],
    "certificate": "R",
    "date": "1977-05-20T10:29:29+05:30",
    "actor": "Charlie Sheen",
    "id": 160
  },
  {
    "name": "The Hobbit: An Unexpected Journey",
    "outline": "Description maybe.",
    "rating": 8.2,
    "director": "Peter Jackson",
    "year": 2012,
    "stars": [
      "Martin Freeman",
      "Ian McKellen",
      "Richard Armitage"
    ],
    "runtime": 169,
    "genre": [
      "Adventure",
      "Fantasy"
    ],
    "certificate": "PG_13",
    "date": "1991-12-01T10:29:29+05:30",
    "actor": "Martin Freeman",
    "id": 161
  },
  {
    "name": "Jaws",
    "outline": "Description maybe.",
    "rating": 8.2,
    "director": "Steven Spielberg",
    "year": 1975,
    "stars": [
      "Roy Scheider",
      "Robert Shaw",
      "Richard Dreyfuss"
    ],
    "runtime": 124,
    "genre": [
      "Adventure",
      "Horror",
      "Thriller"
    ],
    "certificate": "TV_14",
    "date": "2004-08-25T10:29:29+05:30",
    "actor": "Roy Scheider",
    "id": 162
  },
  {
    "name": "Annie Hall",
    "outline": "Description maybe.",
    "rating": 8.2,
    "director": "Woody Allen",
    "year": 1977,
    "stars": [
      "Woody Allen",
      "Diane Keaton",
      "Tony Roberts"
    ],
    "runtime": 93,
    "genre": [
      "Comedy",
      "Drama",
      "Romance"
    ],
    "certificate": "PG",
    "date": "2002-11-01T10:29:29+05:30",
    "actor": "Woody Allen",
    "id": 163
  },
  {
    "name": "Into the Wild",
    "outline": "Description maybe.",
    "rating": 8.2,
    "director": "Sean Penn",
    "year": 2007,
    "stars": [
      "Emile Hirsch",
      "Vince Vaughn",
      "Catherine Keener"
    ],
    "runtime": 148,
    "genre": [
      "Adventure",
      "Biography",
      "Drama"
    ],
    "certificate": "R",
    "date": "1984-08-02T10:29:29+05:30",
    "actor": "Emile Hirsch",
    "id": 164
  },
  {
    "name": "The Sixth Sense",
    "outline": "Description maybe.",
    "rating": 8.2,
    "director": "M. Night Shyamalan",
    "year": 1999,
    "stars": [
      "Bruce Willis",
      "Haley Joel Osment",
      "Toni Collette"
    ],
    "runtime": 107,
    "genre": [
      "Drama",
      "Mystery",
      "Thriller"
    ],
    "certificate": "PG_13",
    "date": "1994-12-14T10:29:29+05:30",
    "actor": "Bruce Willis",
    "id": 165
  },
  {
    "name": "The Night of the Hunter",
    "outline": "Description maybe.",
    "rating": 8.2,
    "director": "Charles Laughton",
    "year": 1955,
    "stars": [
      "Robert Mitchum",
      "Shelley Winters",
      "Lillian Gish"
    ],
    "runtime": 93,
    "genre": [
      "Drama",
      "Film-Noir",
      "Thriller"
    ],
    "certificate": "UNRATED",
    "date": "1968-12-29T10:29:29+05:30",
    "actor": "Robert Mitchum",
    "id": 166
  },
  {
    "name": "How to Train Your Dragon",
    "outline": "Description maybe.",
    "rating": 8.2,
    "director": "Dean DeBlois",
    "year": 2010,
    "stars": [
      "Chris Sanders",
      "Jay Baruchel",
      "Gerard Butler",
      "Christopher Mintz-Plasse"
    ],
    "runtime": 98,
    "genre": [
      "Animation",
      "Adventure",
      "Comedy",
      "Drama",
      "Family",
      "Fantasy"
    ],
    "certificate": "PG",
    "date": "1972-09-24T10:29:29+05:30",
    "actor": "Chris Sanders",
    "id": 167
  },
  {
    "name": "The Big Sleep",
    "outline": "Description maybe.",
    "rating": 8.2,
    "director": "Howard Hawks",
    "year": 1946,
    "stars": [
      "Humphrey Bogart",
      "Lauren Bacall",
      "John Ridgely"
    ],
    "runtime": 114,
    "genre": [
      "Crime",
      "Film-Noir",
      "Mystery",
      "Thriller"
    ],
    "certificate": "TV_PG",
    "date": "1982-01-11T10:29:29+05:30",
    "actor": "Humphrey Bogart",
    "id": 168
  },
  {
    "name": "Kill Bill: Vol. 1",
    "outline": "Description maybe.",
    "rating": 8.2,
    "director": "Quentin Tarantino",
    "year": 2003,
    "stars": [
      "Uma Thurman",
      "David Carradine",
      "Daryl Hannah"
    ],
    "runtime": 111,
    "genre": [
      "Action",
      "Crime",
      "Thriller"
    ],
    "certificate": "TV_14",
    "date": "1961-04-16T10:29:29+05:30",
    "actor": "Uma Thurman",
    "id": 169
  },
  {
    "name": "Dial M for Murder",
    "outline": "Description maybe. When things go wrong, he improvises a brilliant plan B.",
    "rating": 8.2,
    "director": "Alfred Hitchcock",
    "year": 1954,
    "stars": [
      "Ray Milland",
      "Grace Kelly",
      "Robert Cummings"
    ],
    "runtime": 105,
    "genre": [
      "Crime",
      "Mystery",
      "Thriller"
    ],
    "certificate": "APPROVED",
    "date": "1961-12-22T10:29:29+05:30",
    "actor": "Ray Milland",
    "id": 170
  },
  {
    "name": "Persona",
    "outline": "Description maybe.",
    "rating": 8.2,
    "director": "Ingmar Bergman",
    "year": 1966,
    "stars": [
      "Bibi Andersson",
      "Liv Ullmann",
      "Margaretha Krook"
    ],
    "runtime": 85,
    "genre": [
      "Drama"
    ],
    "certificate": "NOT_RATED",
    "date": "2000-11-13T10:29:29+05:30",
    "actor": "Bibi Andersson",
    "id": 171
  },
  {
    "name": "Mary and Max",
    "outline": "Description maybe.",
    "rating": 8.2,
    "director": "Adam Elliot",
    "year": 2009,
    "stars": [
      "Toni Collette",
      "Philip Seymour Hoffman",
      "Eric Bana"
    ],
    "runtime": 92,
    "genre": [
      "Animation",
      "Comedy",
      "Drama"
    ],
    "certificate": "NOT_RATED",
    "date": "1973-11-16T10:29:29+05:30",
    "actor": "Toni Collette",
    "id": 172
  },
  {
    "name": "Life of Brian",
    "outline": "Description maybe.",
    "rating": 8.1,
    "director": "Terry Jones",
    "year": 1979,
    "stars": [
      "Graham Chapman",
      "John Cleese",
      "Michael Palin"
    ],
    "runtime": 94,
    "genre": [
      "Comedy"
    ],
    "certificate": "R",
    "date": "1972-08-06T10:29:29+05:30",
    "actor": "Graham Chapman",
    "id": 173
  },
  {
    "name": "Network",
    "outline": "Description maybe.",
    "rating": 8.1,
    "director": "Sidney Lumet",
    "year": 1976,
    "stars": [
      "Faye Dunaway",
      "William Holden",
      "Peter Finch"
    ],
    "runtime": 121,
    "genre": [
      "Drama"
    ],
    "certificate": "R",
    "date": "1980-06-03T10:29:29+05:30",
    "actor": "Faye Dunaway",
    "id": 174
  },
  {
    "name": "The 400 Blows",
    "outline": "Description maybe.",
    "rating": 8.1,
    "director": "François Truffaut",
    "year": 1959,
    "stars": [
      "Jean-Pierre Léaud",
      "Albert Rémy",
      "Claire Maurier"
    ],
    "runtime": 99,
    "genre": [
      "Crime",
      "Drama"
    ],
    "certificate": "NOT_RATED",
    "date": "1987-10-10T10:29:29+05:30",
    "actor": "Jean-Pierre Léaud",
    "id": 175
  },
  {
    "name": "Finding Nemo",
    "outline": "Description maybe.",
    "rating": 8.1,
    "director": "Andrew Stanton",
    "year": 2003,
    "stars": [
      "Lee Unkrich",
      "Albert Brooks",
      "Ellen DeGeneres",
      "Alexander Gould"
    ],
    "runtime": 100,
    "genre": [
      "Animation",
      "Adventure",
      "Comedy",
      "Family"
    ],
    "certificate": "G",
    "date": "1983-04-19T10:29:29+05:30",
    "actor": "Lee Unkrich",
    "id": 176
  },
  {
    "name": "Ben-Hur",
    "outline": "Description maybe.",
    "rating": 8.1,
    "director": "William Wyler",
    "year": 1959,
    "stars": [
      "Charlton Heston",
      "Jack Hawkins",
      "Stephen Boyd"
    ],
    "runtime": 212,
    "genre": [
      "Action",
      "Adventure",
      "Drama",
      "History",
      "Romance"
    ],
    "certificate": "APPROVED",
    "date": "1963-03-08T10:29:29+05:30",
    "actor": "Charlton Heston",
    "id": 177
  },
  {
    "name": "Life of Pi",
    "outline": "Description maybe.",
    "rating": 8.1,
    "director": "Ang Lee",
    "year": 2012,
    "stars": [
      "Suraj Sharma",
      "Irrfan Khan",
      "Adil Hussain"
    ],
    "runtime": 127,
    "genre": [
      "Adventure",
      "Drama",
      "Fantasy"
    ],
    "certificate": "PG",
    "date": "1996-09-27T10:29:29+05:30",
    "actor": "Suraj Sharma",
    "id": 178
  },
  {
    "name": "Donnie Darko",
    "outline": "Description maybe.",
    "rating": 8.1,
    "director": "Richard Kelly",
    "year": 2001,
    "stars": [
      "Jake Gyllenhaal",
      "Jena Malone",
      "Mary McDonnell"
    ],
    "runtime": 113,
    "genre": [
      "Drama",
      "Mystery",
      "Sci-Fi"
    ],
    "certificate": "R",
    "date": "1980-06-16T10:29:29+05:30",
    "actor": "Jake Gyllenhaal",
    "id": 179
  },
  {
    "name": "The King's Speech",
    "outline": "Description maybe.",
    "rating": 8.1,
    "director": "Tom Hooper",
    "year": 2010,
    "stars": [
      "Colin Firth",
      "Geoffrey Rush",
      "Helena Bonham Carter"
    ],
    "runtime": 118,
    "genre": [
      "Biography",
      "Drama",
      "History"
    ],
    "certificate": "R",
    "date": "1977-08-20T10:29:29+05:30",
    "actor": "Colin Firth",
    "id": 180
  },
  {
    "name": "Howl's Moving Castle",
    "outline": "Description maybe.",
    "rating": 8.1,
    "director": "Hayao Miyazaki",
    "year": 2004,
    "stars": [
      "Chieko Baishô",
      "Takuya Kimura",
      "Tatsuya Gashûin"
    ],
    "runtime": 119,
    "genre": [
      "Animation",
      "Action",
      "Adventure",
      "Family",
      "Fantasy",
      "Romance"
    ],
    "certificate": "TV_PG",
    "date": "1979-08-01T10:29:29+05:30",
    "actor": "Chieko Baishô",
    "id": 181
  },
  {
    "name": "There Will Be Blood",
    "outline": "Description maybe.",
    "rating": 8.1,
    "director": "Paul Thomas Anderson",
    "year": 2007,
    "stars": [
      "Daniel Day-Lewis",
      "Paul Dano",
      "Ciarán Hinds"
    ],
    "runtime": 158,
    "genre": [
      "Drama"
    ],
    "certificate": "R",
    "date": "1994-01-11T10:29:29+05:30",
    "actor": "Daniel Day-Lewis",
    "id": 182
  },
  {
    "name": "Stand by Me",
    "outline": "Description maybe.",
    "rating": 8.1,
    "director": "Rob Reiner",
    "year": 1986,
    "stars": [
      "Wil Wheaton",
      "River Phoenix",
      "Corey Feldman"
    ],
    "runtime": 89,
    "genre": [
      "Adventure",
      "Drama"
    ],
    "certificate": "R",
    "date": "2001-12-12T10:29:29+05:30",
    "actor": "Wil Wheaton",
    "id": 183
  },
  {
    "name": "La strada",
    "outline": "Description maybe.",
    "rating": 8.1,
    "director": "Federico Fellini",
    "year": 1954,
    "stars": [
      "Anthony Quinn",
      "Giulietta Masina",
      "Richard Basehart"
    ],
    "runtime": 108,
    "genre": [
      "Drama"
    ],
    "certificate": "TV_PG",
    "date": "1999-03-20T10:29:29+05:30",
    "actor": "Anthony Quinn",
    "id": 184
  },
  {
    "name": "The Killing",
    "outline": "Description maybe.",
    "rating": 8.1,
    "director": "Stanley Kubrick",
    "year": 1956,
    "stars": [
      "Sterling Hayden",
      "Coleen Gray",
      "Vince Edwards"
    ],
    "runtime": 85,
    "genre": [
      "Crime",
      "Film-Noir",
      "Thriller"
    ],
    "certificate": "APPROVED",
    "date": "2011-11-26T10:29:29+05:30",
    "actor": "Sterling Hayden",
    "id": 185
  },
  {
    "name": "The Princess Bride",
    "outline": "Description maybe.",
    "rating": 8.1,
    "director": "Rob Reiner",
    "year": 1987,
    "stars": [
      "Cary Elwes",
      "Mandy Patinkin",
      "Robin Wright"
    ],
    "runtime": 98,
    "genre": [
      "Adventure",
      "Comedy",
      "Family",
      "Fantasy",
      "Romance"
    ],
    "certificate": "PG",
    "date": "1992-03-30T10:29:29+05:30",
    "actor": "Cary Elwes",
    "id": 186
  },
  {
    "name": "Million Dollar Baby",
    "outline": "Description maybe.",
    "rating": 8.1,
    "director": "Clint Eastwood",
    "year": 2004,
    "stars": [
      "Hilary Swank",
      "Clint Eastwood",
      "Morgan Freeman"
    ],
    "runtime": 132,
    "genre": [
      "Drama",
      "Sport"
    ],
    "certificate": "PG_13",
    "date": "1969-03-03T10:29:29+05:30",
    "actor": "Hilary Swank",
    "id": 187
  },
  {
    "name": "Amores Perros",
    "outline": "Description maybe.",
    "rating": 8.1,
    "director": "Alejandro González Iñárritu",
    "year": 2000,
    "stars": [
      "Emilio Echevarría",
      "Gael García Bernal",
      "Goya Toledo"
    ],
    "runtime": 154,
    "genre": [
      "Drama",
      "Thriller"
    ],
    "certificate": "R",
    "date": "1982-08-06T10:29:29+05:30",
    "actor": "Emilio Echevarría",
    "id": 188
  },
  {
    "name": "Who's Afraid of Virginia Woolf?",
    "outline": "Description maybe.",
    "rating": 8.1,
    "director": "Mike Nichols",
    "year": 1966,
    "stars": [
      "Elizabeth Taylor",
      "Richard Burton",
      "George Segal"
    ],
    "runtime": 131,
    "genre": [
      "Drama"
    ],
    "certificate": "APPROVED",
    "date": "1968-04-16T10:29:29+05:30",
    "actor": "Elizabeth Taylor",
    "id": 189
  },
  {
    "name": "Stalker",
    "outline": "Description maybe.",
    "rating": 8.1,
    "director": "Andrey Tarkovskiy",
    "year": 1979,
    "stars": [
      "Alisa Freyndlikh",
      "Aleksandr Kaydanovskiy",
      "Anatoliy Solonitsyn"
    ],
    "runtime": 163,
    "genre": [
      "Adventure",
      "Drama",
      "Fantasy",
      "Mystery",
      "Sci-Fi"
    ],
    "certificate": "NOT_RATED",
    "date": "1972-08-23T10:29:29+05:30",
    "actor": "Alisa Freyndlikh",
    "id": 190
  },
  {
    "name": "8½",
    "outline": "Description maybe.",
    "rating": 8.1,
    "director": "Federico Fellini",
    "year": 1963,
    "stars": [
      "Marcello Mastroianni",
      "Anouk Aimée",
      "Claudia Cardinale"
    ],
    "runtime": 138,
    "genre": [
      "Drama",
      "Fantasy"
    ],
    "certificate": "NOT_RATED",
    "date": "1977-06-04T10:29:29+05:30",
    "actor": "Marcello Mastroianni",
    "id": 191
  },
  {
    "name": "The Terminator",
    "outline": "Description maybe.",
    "rating": 8.1,
    "director": "James Cameron",
    "year": 1984,
    "stars": [
      "Arnold Schwarzenegger",
      "Linda Hamilton",
      "Michael Biehn"
    ],
    "runtime": 107,
    "genre": [
      "Action",
      "Sci-Fi"
    ],
    "certificate": "R",
    "date": "1973-06-20T10:29:29+05:30",
    "actor": "Arnold Schwarzenegger",
    "id": 192
  },
  {
    "name": "Gandhi",
    "outline": "Description maybe.",
    "rating": 8.1,
    "director": "Richard Attenborough",
    "year": 1982,
    "stars": [
      "Ben Kingsley",
      "John Gielgud",
      "Candice Bergen"
    ],
    "runtime": 191,
    "genre": [
      "Biography",
      "Drama",
      "History"
    ],
    "certificate": "PG",
    "date": "1986-07-08T10:29:29+05:30",
    "actor": "Ben Kingsley",
    "id": 193
  },
  {
    "name": "Groundhog Day",
    "outline": "Description maybe.",
    "rating": 8.1,
    "director": "Harold Ramis",
    "year": 1993,
    "stars": [
      "Bill Murray",
      "Andie MacDowell",
      "Chris Elliott"
    ],
    "runtime": 101,
    "genre": [
      "Comedy",
      "Drama",
      "Fantasy",
      "Romance"
    ],
    "certificate": "PG",
    "date": "2011-07-02T10:29:29+05:30",
    "actor": "Bill Murray",
    "id": 194
  },
  {
    "name": "Dog Day Afternoon",
    "outline": "Description maybe.",
    "rating": 8.1,
    "director": "Sidney Lumet",
    "year": 1975,
    "stars": [
      "Al Pacino",
      "John Cazale",
      "Penelope Allen"
    ],
    "runtime": 125,
    "genre": [
      "Crime",
      "Drama"
    ],
    "certificate": "R",
    "date": "2008-06-01T10:29:29+05:30",
    "actor": "Al Pacino",
    "id": 195
  },
  {
    "name": "Incendies",
    "outline": "Description maybe.",
    "rating": 8.1,
    "director": "Denis Villeneuve",
    "year": 2010,
    "stars": [
      "Lubna Azabal",
      "Mélissa Désormeaux-Poulin",
      "Maxim Gaudette"
    ],
    "runtime": 139,
    "genre": [
      "Drama",
      "Mystery",
      "War"
    ],
    "certificate": "R",
    "date": "2011-10-05T10:29:29+05:30",
    "actor": "Lubna Azabal",
    "id": 196
  },
  {
    "name": "The Bourne Ultimatum",
    "outline": "Description maybe.",
    "rating": 8.1,
    "director": "Paul Greengrass",
    "year": 2007,
    "stars": [
      "Matt Damon",
      "Édgar Ramírez",
      "Joan Allen"
    ],
    "runtime": 115,
    "genre": [
      "Action",
      "Crime",
      "Thriller"
    ],
    "certificate": "PG_13",
    "date": "2012-10-17T10:29:29+05:30",
    "actor": "Matt Damon",
    "id": 197
  },
  {
    "name": "The Perks of Being a Wallflower",
    "outline": "Description maybe.",
    "rating": 8.1,
    "director": "Stephen Chbosky",
    "year": 2012,
    "stars": [
      "Logan Lerman",
      "Emma Watson",
      "Ezra Miller"
    ],
    "runtime": 102,
    "genre": [
      "Drama",
      "Romance"
    ],
    "certificate": "PG_13",
    "date": "1995-12-28T10:29:29+05:30",
    "actor": "Logan Lerman",
    "id": 198
  },
  {
    "name": "The Hustler",
    "outline": "Description maybe.",
    "rating": 8.1,
    "director": "Robert Rossen",
    "year": 1961,
    "stars": [
      "Paul Newman",
      "Jackie Gleason",
      "Piper Laurie"
    ],
    "runtime": 134,
    "genre": [
      "Drama",
      "Sport"
    ],
    "certificate": "UNRATED",
    "date": "1985-10-15T10:29:29+05:30",
    "actor": "Paul Newman",
    "id": 199
  },
  {
    "name": "Twelve Monkeys",
    "outline": "Description maybe.",
    "rating": 8.1,
    "director": "Terry Gilliam",
    "year": 1995,
    "stars": [
      "Bruce Willis",
      "Madeleine Stowe",
      "Brad Pitt"
    ],
    "runtime": 129,
    "genre": [
      "Mystery",
      "Sci-Fi",
      "Thriller"
    ],
    "certificate": "R",
    "date": "1979-02-25T10:29:29+05:30",
    "actor": "Bruce Willis",
    "id": 200
  },
  {
    "name": "Black Swan",
    "outline": "Description maybe.",
    "rating": 8.1,
    "director": "Darren Aronofsky",
    "year": 2010,
    "stars": [
      "Natalie Portman",
      "Mila Kunis",
      "Vincent Cassel"
    ],
    "runtime": 108,
    "genre": [
      "Drama",
      "Mystery",
      "Thriller"
    ],
    "certificate": "R",
    "date": "2000-11-12T10:29:29+05:30",
    "actor": "Natalie Portman",
    "id": 201
  },
  {
    "name": "Memories of Murder",
    "outline": "Description maybe...",
    "rating": 8.1,
    "director": "Joon-ho Bong",
    "year": 2003,
    "stars": [
      "Kang-ho Song",
      "Sang-kyung Kim",
      "Roe-ha Kim"
    ],
    "runtime": 130,
    "genre": [
      "Crime",
      "Drama",
      "Mystery",
      "Thriller"
    ],
    "certificate": "UNRATED",
    "date": "1975-11-03T10:29:29+05:30",
    "actor": "Kang-ho Song",
    "id": 202
  },
  {
    "name": "Anatomy of a Murder",
    "outline": "Description maybe.",
    "rating": 8.1,
    "director": "Otto Preminger",
    "year": 1959,
    "stars": [
      "James Stewart",
      "Lee Remick",
      "Ben Gazzara"
    ],
    "runtime": 160,
    "genre": [
      "Crime",
      "Drama",
      "Mystery"
    ],
    "certificate": "UNRATED",
    "date": "1971-02-13T10:29:29+05:30",
    "actor": "James Stewart",
    "id": 203
  },
  {
    "name": "Stalag 17",
    "outline": "Description maybe.",
    "rating": 8.1,
    "director": "Billy Wilder",
    "year": 1953,
    "stars": [
      "William Holden",
      "Don Taylor",
      "Otto Preminger"
    ],
    "runtime": 120,
    "genre": [
      "Comedy",
      "Drama",
      "Thriller",
      "War"
    ],
    "certificate": "APPROVED",
    "date": "2010-06-27T10:29:29+05:30",
    "actor": "William Holden",
    "id": 204
  },
  {
    "name": "Sleuth",
    "outline": "Description maybe.",
    "rating": 8.1,
    "director": "Joseph L. Mankiewicz",
    "year": 1972,
    "stars": [
      "Laurence Olivier",
      "Michael Caine",
      "Alec Cawthorne"
    ],
    "runtime": 138,
    "genre": [
      "Mystery",
      "Thriller"
    ],
    "certificate": "PG",
    "date": "1968-12-07T10:29:29+05:30",
    "actor": "Laurence Olivier",
    "id": 205
  },
  {
    "name": "The Graduate",
    "outline": "Description maybe.",
    "rating": 8.1,
    "director": "Mike Nichols",
    "year": 1967,
    "stars": [
      "Dustin Hoffman",
      "Anne Bancroft",
      "Katharine Ross"
    ],
    "runtime": 106,
    "genre": [
      "Comedy",
      "Drama",
      "Romance"
    ],
    "certificate": "APPROVED",
    "date": "2011-05-09T10:29:29+05:30",
    "actor": "Dustin Hoffman",
    "id": 206
  },
  {
    "name": "The Man Who Shot Liberty Valance",
    "outline": "Description maybe.",
    "rating": 8.1,
    "director": "John Ford",
    "year": 1962,
    "stars": [
      "James Stewart",
      "John Wayne",
      "Vera Miles"
    ],
    "runtime": 123,
    "genre": [
      "Drama",
      "Romance",
      "Western"
    ],
    "certificate": "UNRATED",
    "date": "1965-05-31T10:29:29+05:30",
    "actor": "James Stewart",
    "id": 207
  },
  {
    "name": "The Manchurian Candidate",
    "outline": "Description maybe.",
    "rating": 8.1,
    "director": "John Frankenheimer",
    "year": 1962,
    "stars": [
      "Frank Sinatra",
      "Laurence Harvey",
      "Janet Leigh"
    ],
    "runtime": 126,
    "genre": [
      "Drama",
      "Mystery",
      "Romance",
      "Thriller",
      "War"
    ],
    "certificate": "APPROVED",
    "date": "1982-11-29T10:29:29+05:30",
    "actor": "Frank Sinatra",
    "id": 208
  },
  {
    "name": "A Beautiful Mind",
    "outline": "Description maybe.",
    "rating": 8.1,
    "director": "Ron Howard",
    "year": 2001,
    "stars": [
      "Russell Crowe",
      "Ed Harris",
      "Jennifer Connelly"
    ],
    "runtime": 135,
    "genre": [
      "Biography",
      "Drama"
    ],
    "certificate": "PG_13",
    "date": "2005-03-20T10:29:29+05:30",
    "actor": "Russell Crowe",
    "id": 209
  },
  {
    "name": "Harry Potter and the Deathly Hallows: Part 2",
    "outline": "Description maybe.",
    "rating": 8.1,
    "director": "David Yates",
    "year": 2011,
    "stars": [
      "Daniel Radcliffe",
      "Emma Watson",
      "Rupert Grint"
    ],
    "runtime": 130,
    "genre": [
      "Adventure",
      "Family",
      "Fantasy",
      "Mystery"
    ],
    "certificate": "PG_13",
    "date": "2013-04-05T10:29:29+05:30",
    "actor": "Daniel Radcliffe",
    "id": 210
  },
  {
    "name": "Barry Lyndon",
    "outline": "Description maybe.",
    "rating": 8.1,
    "director": "Stanley Kubrick",
    "year": 1975,
    "stars": [
      "Ryan O'Neal",
      "Marisa Berenson",
      "Patrick Magee"
    ],
    "runtime": 184,
    "genre": [
      "Adventure",
      "Drama",
      "Romance",
      "War"
    ],
    "certificate": "PG",
    "date": "1963-07-12T10:29:29+05:30",
    "actor": "Ryan O'Neal",
    "id": 211
  },
  {
    "name": "Infernal Affairs",
    "outline": "Description maybe.",
    "rating": 8.1,
    "director": "Wai-keung Lau",
    "year": 2002,
    "stars": [
      "Alan Mak",
      "Andy Lau",
      "Tony Leung Chiu Wai",
      "Anthony Wong Chau-Sang"
    ],
    "runtime": 101,
    "genre": [
      "Crime",
      "Mystery",
      "Thriller"
    ],
    "certificate": "R",
    "date": "1973-06-08T10:29:29+05:30",
    "actor": "Alan Mak",
    "id": 212
  },
  {
    "name": "The Wild Bunch",
    "outline": "Description maybe.",
    "rating": 8.1,
    "director": "Sam Peckinpah",
    "year": 1969,
    "stars": [
      "William Holden",
      "Ernest Borgnine",
      "Robert Ryan"
    ],
    "runtime": 145,
    "genre": [
      "Western"
    ],
    "certificate": "R",
    "date": "1976-01-02T10:29:29+05:30",
    "actor": "William Holden",
    "id": 213
  },
  {
    "name": "Slumdog Millionaire",
    "outline": "Description maybe.",
    "rating": 8.1,
    "director": "Danny Boyle",
    "year": 2008,
    "stars": [
      "Loveleen Tandan",
      "Dev Patel",
      "Freida Pinto",
      "Saurabh Shukla"
    ],
    "runtime": 120,
    "genre": [
      "Drama",
      "Romance",
      "Thriller"
    ],
    "certificate": "R",
    "date": "1996-09-22T10:29:29+05:30",
    "actor": "Loveleen Tandan",
    "id": 214
  },
  {
    "name": "Ip Man",
    "outline": "Description maybe.",
    "rating": 8.1,
    "director": "Wilson Yip",
    "year": 2008,
    "stars": [
      "Donnie Yen",
      "Simon Yam",
      "Siu-Wong Fan"
    ],
    "runtime": 106,
    "genre": [
      "Action",
      "Biography",
      "Drama",
      "History"
    ],
    "certificate": "R",
    "date": "2004-09-07T10:29:29+05:30",
    "actor": "Donnie Yen",
    "id": 215
  },
  {
    "name": "Roman Holiday",
    "outline": "Description maybe.",
    "rating": 8.1,
    "director": "William Wyler",
    "year": 1953,
    "stars": [
      "Gregory Peck",
      "Audrey Hepburn",
      "Eddie Albert"
    ],
    "runtime": 118,
    "genre": [
      "Comedy",
      "Drama",
      "Romance"
    ],
    "certificate": "APPROVED",
    "date": "2008-03-19T10:29:29+05:30",
    "actor": "Gregory Peck",
    "id": 216
  },
  {
    "name": "Rocky",
    "outline": "Description maybe.",
    "rating": 8.1,
    "director": "John G. Avildsen",
    "year": 1976,
    "stars": [
      "Sylvester Stallone",
      "Talia Shire",
      "Burt Young"
    ],
    "runtime": 119,
    "genre": [
      "Drama",
      "Sport"
    ],
    "certificate": "PG",
    "date": "1987-08-18T10:29:29+05:30",
    "actor": "Sylvester Stallone",
    "id": 217
  },
  {
    "name": "Nausicaä of the Valley of the Wind",
    "outline": "Description maybe.",
    "rating": 8.1,
    "director": "Hayao Miyazaki",
    "year": 1984,
    "stars": [
      "Sumi Shimamoto",
      "Mahito Tsujimura",
      "Hisako Kyôda"
    ],
    "runtime": 117,
    "genre": [
      "Animation",
      "Action",
      "Adventure",
      "Fantasy",
      "Sci-Fi"
    ],
    "certificate": "PG",
    "date": "2004-11-02T10:29:29+05:30",
    "actor": "Sumi Shimamoto",
    "id": 218
  },
  {
    "name": "In the Name of the Father",
    "outline": "Description maybe.",
    "rating": 8.1,
    "director": "Jim Sheridan",
    "year": 1993,
    "stars": [
      "Daniel Day-Lewis",
      "Pete Postlethwaite",
      "Alison Crosbie"
    ],
    "runtime": 133,
    "genre": [
      "Biography",
      "Drama",
      "Thriller"
    ],
    "certificate": "R",
    "date": "1981-12-14T10:29:29+05:30",
    "actor": "Daniel Day-Lewis",
    "id": 219
  },
  {
    "name": "The Artist",
    "outline": "Description maybe.",
    "rating": 8.1,
    "director": "Michel Hazanavicius",
    "year": 2011,
    "stars": [
      "Jean Dujardin",
      "Bérénice Bejo",
      "John Goodman"
    ],
    "runtime": 100,
    "genre": [
      "Comedy",
      "Drama",
      "Romance"
    ],
    "certificate": "PG_13",
    "date": "1966-12-02T10:29:29+05:30",
    "actor": "Jean Dujardin",
    "id": 220
  },
  {
    "name": "Rope",
    "outline": "Description maybe.",
    "rating": 8.1,
    "director": "Alfred Hitchcock",
    "year": 1948,
    "stars": [
      "James Stewart",
      "John Dall",
      "Farley Granger"
    ],
    "runtime": 80,
    "genre": [
      "Crime",
      "Drama",
      "Thriller"
    ],
    "certificate": "APPROVED",
    "date": "1971-07-30T10:29:29+05:30",
    "actor": "James Stewart",
    "id": 221
  },
  {
    "name": "La Haine",
    "outline": "Description maybe.",
    "rating": 8.1,
    "director": "Mathieu Kassovitz",
    "year": 1995,
    "stars": [
      "Vincent Cassel",
      "Hubert Koundé",
      "Saïd Taghmaoui"
    ],
    "runtime": 98,
    "genre": [
      "Drama"
    ],
    "certificate": "NOT_RATED",
    "date": "1990-10-11T10:29:29+05:30",
    "actor": "Vincent Cassel",
    "id": 222
  },
  {
    "name": "The Celebration",
    "outline": "Description maybe.",
    "rating": 8.1,
    "director": "Ulrich Thomsen",
    "year": 1998,
    "stars": [
      "Henning Moritzen",
      "Thomas Bo Larsen"
    ],
    "runtime": 105,
    "genre": [
      "Drama"
    ],
    "certificate": "R",
    "date": "1963-07-23T10:29:29+05:30",
    "actor": "Henning Moritzen",
    "id": 223
  },
  {
    "name": "Harvey",
    "outline": "Description maybe.",
    "rating": 8.1,
    "director": "Henry Koster",
    "year": 1950,
    "stars": [
      "James Stewart",
      "Josephine Hull",
      "Peggy Dow"
    ],
    "runtime": 104,
    "genre": [
      "Comedy",
      "Drama"
    ],
    "certificate": "APPROVED",
    "date": "1996-09-09T10:29:29+05:30",
    "actor": "James Stewart",
    "id": 224
  },
  {
    "name": "All Quiet on the Western Front",
    "outline": "Description maybe.",
    "rating": 8.1,
    "director": "Lewis Milestone",
    "year": 1930,
    "stars": [
      "Lew Ayres",
      "Louis Wolheim",
      "John Wray"
    ],
    "runtime": 136,
    "genre": [
      "Drama",
      "War"
    ],
    "certificate": "UNRATED",
    "date": "1979-02-14T10:29:29+05:30",
    "actor": "Lew Ayres",
    "id": 225
  },
  {
    "name": "Spring, Summer, Fall, Winter... and Spring",
    "outline": "Description maybe.",
    "rating": 8.1,
    "director": "Ki-duk Kim",
    "year": 2003,
    "stars": [
      "Ki-duk Kim",
      "Yeong-su Oh",
      "Jong-ho Kim"
    ],
    "runtime": 103,
    "genre": [
      "Drama"
    ],
    "certificate": "R",
    "date": "2005-12-08T10:29:29+05:30",
    "actor": "Ki-duk Kim",
    "id": 226
  },
  {
    "name": "Pirates of the Caribbean: The Curse of the Black Pearl",
    "outline": "Description maybe.",
    "rating": 8.0,
    "director": "Gore Verbinski",
    "year": 2003,
    "stars": [
      "Johnny Depp",
      "Geoffrey Rush",
      "Orlando Bloom"
    ],
    "runtime": 143,
    "genre": [
      "Action",
      "Adventure",
      "Fantasy"
    ],
    "certificate": "PG_13",
    "date": "1964-10-09T10:29:29+05:30",
    "actor": "Johnny Depp",
    "id": 227
  },
  {
    "name": "The Exorcist",
    "outline": "Description maybe.",
    "rating": 8.0,
    "director": "William Friedkin",
    "year": 1973,
    "stars": [
      "Ellen Burstyn",
      "Max von Sydow",
      "Linda Blair"
    ],
    "runtime": 122,
    "genre": [
      "Horror",
      "Thriller"
    ],
    "certificate": "TV_14",
    "date": "1991-05-18T10:29:29+05:30",
    "actor": "Ellen Burstyn",
    "id": 228
  },
  {
    "name": "In the Mood for Love",
    "outline": "Description maybe.",
    "rating": 8.0,
    "director": "Kar Wai Wong",
    "year": 2000,
    "stars": [
      "Tony Leung Chiu Wai",
      "Maggie Cheung",
      "Ping Lam Siu"
    ],
    "runtime": 98,
    "genre": [
      "Drama",
      "Romance"
    ],
    "certificate": "PG",
    "date": "2000-12-04T10:29:29+05:30",
    "actor": "Tony Leung Chiu Wai",
    "id": 229
  },
  {
    "name": "The Diving Bell and the Butterfly",
    "outline": "Description maybe.",
    "rating": 8.0,
    "director": "Julian Schnabel",
    "year": 2007,
    "stars": [
      "Mathieu Amalric",
      "Emmanuelle Seigner",
      "Marie-Josée Croze"
    ],
    "runtime": 112,
    "genre": [
      "Biography",
      "Drama"
    ],
    "certificate": "PG_13",
    "date": "2012-03-04T10:29:29+05:30",
    "actor": "Mathieu Amalric",
    "id": 230
  },
  {
    "name": "The Help",
    "outline": "Description maybe.",
    "rating": 8.0,
    "director": "Tate Taylor",
    "year": 2011,
    "stars": [
      "Emma Stone",
      "Viola Davis",
      "Octavia Spencer"
    ],
    "runtime": 146,
    "genre": [
      "Drama"
    ],
    "certificate": "PG_13",
    "date": "1963-05-13T10:29:29+05:30",
    "actor": "Emma Stone",
    "id": 231
  },
  {
    "name": "A Streetcar Named Desire",
    "outline": "Description maybe.",
    "rating": 8.0,
    "director": "Elia Kazan",
    "year": 1951,
    "stars": [
      "Vivien Leigh",
      "Marlon Brando",
      "Kim Hunter"
    ],
    "runtime": 122,
    "genre": [
      "Drama"
    ],
    "certificate": "APPROVED",
    "date": "1981-01-18T10:29:29+05:30",
    "actor": "Vivien Leigh",
    "id": 232
  },
  {
    "name": "A Fistful of Dollars",
    "outline": "Description maybe.",
    "rating": 8.0,
    "director": "Sergio Leone",
    "year": 1964,
    "stars": [
      "Clint Eastwood",
      "Gian Maria Volonté",
      "Marianne Koch"
    ],
    "runtime": 99,
    "genre": [
      "Western"
    ],
    "certificate": "R",
    "date": "1974-10-03T10:29:29+05:30",
    "actor": "Clint Eastwood",
    "id": 233
  },
  {
    "name": "Star Trek",
    "outline": "Description maybe.",
    "rating": 8.0,
    "director": "J.J. Abrams",
    "year": 2009,
    "stars": [
      "Chris Pine",
      "Zachary Quinto",
      "Simon Pegg"
    ],
    "runtime": 127,
    "genre": [
      "Action",
      "Adventure",
      "Sci-Fi"
    ],
    "certificate": "PG_13",
    "date": "1979-06-28T10:29:29+05:30",
    "actor": "Chris Pine",
    "id": 234
  },
  {
    "name": "Monsters, Inc.",
    "outline": "Description maybe.",
    "rating": 8.0,
    "director": "Pete Docter",
    "year": 2001,
    "stars": [
      "David Silverman",
      "Billy Crystal",
      "John Goodman",
      "Mary Gibbs"
    ],
    "runtime": 92,
    "genre": [
      "Animation",
      "Adventure",
      "Comedy",
      "Family",
      "Fantasy"
    ],
    "certificate": "TV_PG",
    "date": "1984-02-05T10:29:29+05:30",
    "actor": "David Silverman",
    "id": 235
  },
  {
    "name": "District 9",
    "outline": "Description maybe.",
    "rating": 8.0,
    "director": "Neill Blomkamp",
    "year": 2009,
    "stars": [
      "Sharlto Copley",
      "David James",
      "Jason Cope"
    ],
    "runtime": 112,
    "genre": [
      "Action",
      "Sci-Fi",
      "Thriller"
    ],
    "certificate": "R",
    "date": "1989-09-05T10:29:29+05:30",
    "actor": "Sharlto Copley",
    "id": 236
  },
  {
    "name": "Papillon",
    "outline": "Description maybe.",
    "rating": 8.0,
    "director": "Franklin J. Schaffner",
    "year": 1973,
    "stars": [
      "Steve McQueen",
      "Dustin Hoffman",
      "Victor Jory"
    ],
    "runtime": 151,
    "genre": [
      "Biography",
      "Crime",
      "Drama"
    ],
    "certificate": "R",
    "date": "1993-09-17T10:29:29+05:30",
    "actor": "Steve McQueen",
    "id": 237
  },
  {
    "name": "The Truman Show",
    "outline": "Description maybe.",
    "rating": 8.0,
    "director": "Peter Weir",
    "year": 1998,
    "stars": [
      "Jim Carrey",
      "Ed Harris",
      "Laura Linney"
    ],
    "runtime": 103,
    "genre": [
      "Comedy",
      "Drama",
      "Sci-Fi"
    ],
    "certificate": "PG",
    "date": "2004-03-11T10:29:29+05:30",
    "actor": "Jim Carrey",
    "id": 238
  },
  {
    "name": "Ratatouille",
    "outline": "Description maybe.",
    "rating": 8.0,
    "director": "Brad Bird",
    "year": 2007,
    "stars": [
      "Jan Pinkava",
      "Brad Garrett",
      "Lou Romano",
      "Patton Oswalt"
    ],
    "runtime": 111,
    "genre": [
      "Animation",
      "Comedy",
      "Family",
      "Fantasy"
    ],
    "certificate": "G",
    "date": "1970-04-29T10:29:29+05:30",
    "actor": "Jan Pinkava",
    "id": 239
  },
  {
    "name": "Beauty and the Beast",
    "outline": "Description maybe.",
    "rating": 8.0,
    "director": "Gary Trousdale",
    "year": 1991,
    "stars": [
      "Kirk Wise",
      "Paige O'Hara",
      "Robby Benson",
      "Richard White"
    ],
    "runtime": 84,
    "genre": [
      "Animation",
      "Family",
      "Fantasy",
      "Musical",
      "Romance"
    ],
    "certificate": "G",
    "date": "1998-01-20T10:29:29+05:30",
    "actor": "Kirk Wise",
    "id": 240
  },
  {
    "name": "Shutter Island",
    "outline": "Description maybe.",
    "rating": 8.0,
    "director": "Martin Scorsese",
    "year": 2010,
    "stars": [
      "Leonardo DiCaprio",
      "Emily Mortimer",
      "Mark Ruffalo"
    ],
    "runtime": 138,
    "genre": [
      "Mystery",
      "Thriller"
    ],
    "certificate": "R",
    "date": "2010-09-07T10:29:29+05:30",
    "actor": "Leonardo DiCaprio",
    "id": 241
  },
  {
    "name": "Nosferatu",
    "outline": "Description maybe.",
    "rating": 8.0,
    "director": "F.W. Murnau",
    "year": 1922,
    "stars": [
      "Max Schreck",
      "Greta Schröder",
      "Ruth Landshoff"
    ],
    "runtime": 94,
    "genre": [
      "Horror"
    ],
    "certificate": "UNRATED",
    "date": "2005-12-22T10:29:29+05:30",
    "actor": "Max Schreck",
    "id": 242
  },
  {
    "name": "Manhattan",
    "outline": "Description maybe.",
    "rating": 8.0,
    "director": "Woody Allen",
    "year": 1979,
    "stars": [
      "Woody Allen",
      "Diane Keaton",
      "Mariel Hemingway"
    ],
    "runtime": 96,
    "genre": [
      "Comedy",
      "Drama",
      "Romance"
    ],
    "certificate": "R",
    "date": "1976-02-14T10:29:29+05:30",
    "actor": "Woody Allen",
    "id": 243
  },
  {
    "name": "Rosemary's Baby",
    "outline": "Description maybe.",
    "rating": 8.0,
    "director": "Roman Polanski",
    "year": 1968,
    "stars": [
      "Mia Farrow",
      "John Cassavetes",
      "Ruth Gordon"
    ],
    "runtime": 136,
    "genre": [
      "Drama",
      "Horror",
      "Mystery"
    ],
    "certificate": "APPROVED",
    "date": "1984-06-13T10:29:29+05:30",
    "actor": "Mia Farrow",
    "id": 244
  },
  {
    "name": "Jurassic Park",
    "outline": "Description maybe.",
    "rating": 8.0,
    "director": "Steven Spielberg",
    "year": 1993,
    "stars": [
      "Sam Neill",
      "Laura Dern",
      "Jeff Goldblum"
    ],
    "runtime": 127,
    "genre": [
      "Adventure",
      "Sci-Fi"
    ],
    "certificate": "PG_13",
    "date": "2009-05-04T10:29:29+05:30",
    "actor": "Sam Neill",
    "id": 245
  },
  {
    "name": "Big Fish",
    "outline": "Description maybe.",
    "rating": 8.0,
    "director": "Tim Burton",
    "year": 2003,
    "stars": [
      "Ewan McGregor",
      "Albert Finney",
      "Billy Crudup"
    ],
    "runtime": 125,
    "genre": [
      "Adventure",
      "Drama",
      "Fantasy"
    ],
    "certificate": "PG_13",
    "date": "1988-02-08T10:29:29+05:30",
    "actor": "Ewan McGregor",
    "id": 246
  },
  {
    "name": "Rain Man",
    "outline": "Description maybe.",
    "rating": 8.0,
    "director": "Barry Levinson",
    "year": 1988,
    "stars": [
      "Dustin Hoffman",
      "Tom Cruise",
      "Valeria Golino"
    ],
    "runtime": 133,
    "genre": [
      "Drama"
    ],
    "certificate": "R",
    "date": "1990-11-24T10:29:29+05:30",
    "actor": "Dustin Hoffman",
    "id": 247
  },
  {
    "name": "Mystic River",
    "outline": "Description maybe.",
    "rating": 8.0,
    "director": "Clint Eastwood",
    "year": 2003,
    "stars": [
      "Sean Penn",
      "Tim Robbins",
      "Kevin Bacon"
    ],
    "runtime": 138,
    "genre": [
      "Crime",
      "Drama",
      "Mystery",
      "Thriller"
    ],
    "certificate": "R",
    "date": "1987-03-04T10:29:29+05:30",
    "actor": "Sean Penn",
    "id": 248
  },
  {
    "name": "The Untouchables",
    "outline": "Description maybe.",
    "rating": 8.0,
    "director": "Brian De Palma",
    "year": 1987,
    "stars": [
      "Kevin Costner",
      "Sean Connery",
      "Robert De Niro"
    ],
    "runtime": 119,
    "genre": [
      "Crime",
      "Drama",
      "History",
      "Thriller"
    ],
    "certificate": "R",
    "date": "2001-04-11T10:29:29+05:30",
    "actor": "Kevin Costner",
    "id": 249
  },
  {
    "name": "The Wrestler",
    "outline": "Description maybe.",
    "rating": 8.0,
    "director": "Darren Aronofsky",
    "year": 2008,
    "stars": [
      "Mickey Rourke",
      "Marisa Tomei",
      "Evan Rachel Wood"
    ],
    "runtime": 109,
    "genre": [
      "Drama",
      "Romance",
      "Sport"
    ],
    "certificate": "R",
    "date": "1988-04-11T10:29:29+05:30",
    "actor": "Mickey Rourke",
    "id": 250
  }
]
