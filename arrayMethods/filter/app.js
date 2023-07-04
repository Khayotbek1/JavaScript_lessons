const movies = [
  { name: "Avatar 3D", year: 2008, rating: 9 },
  { name: "Titanik 4D", year: 1997, rating: 5 },
  { name: "Forsaj 3D", year: 2020, rating: 2 },
  { name: "Avengars", year: 2012, rating: 6 },
];

const filterMovies = movies.filter((movie) => {
  return movie.name.includes("3D");
});
console.log(filterMovies);
