const movies = [
  { name: "Avatar 3D", year: 2008, rating: 9 },
  { name: "Titanik 4D", year: 1997, rating: 5 },
  { name: "Forsaj 3D", year: 2020, rating: 2 },
  { name: "Avengars", year: 2012, rating: 6 },
];

const newMovies = movies.map((movie) => {
  return { name: movie.name, year: movie.year, rating: movie.rating + 1 };
});
console.log(newMovies);

// Map orginal holatiga tegmaydi undan copy ovolib uni ustida ishlaydi movies eski orginal holati newMovies o'zgartirilgan  holati
