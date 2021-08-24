// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(array) {
  let uniquedirectors = [];
  const directors = array.map(movie => movie.director);
  for (let i = 0; i < directors.length; i++) {
    if (!uniquedirectors.includes(directors[i])) {
      uniquedirectors.push(directors[i]);
    }
  }
  return uniquedirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
   const dramas = movies.filter((movie) => {
     return movie.genre.includes('Drama') && movie.director === 'Steven Spielberg';
   })
   return dramas.length;
 }

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(array) {
let scores= array.reduce((acc, curr)=>{
  return acc+ (curr.score || 0)
},0)
return (scores/array.length).toFixed(2)
 }

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(array) { 
  // Filter array to only include dramas
  const dramas = array.filter(item => item.genre.includes('Drama'))
  
  // Check if there are any dramas
  if (dramas.length === 0) {
    return 0;
  }

  // Reduce drama scores
  const totalScore = dramas.reduce((acc, curr) => {
    return acc + (curr.score || 0);
  }, 0)

  // Divide the reduced scores by the amount of dramas
  return parseFloat((totalScore / dramas.length).toFixed(2))
  // return (totalScore / dramas.length).toFixed(2) This returns a string instead of a number
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) { 
  // Set the rules for sorting
  const moviesSort = (a, b) => {
    // Sort by year in ascending order
    if (a.year < b.year) return -1
    if (a.year > b.year) return 1
    // If the year is the same, sort by alphabetical order by title
    if (a.year === b.year) {
      if (a.title < b.title) return -1;
      if (a.title > b.title) return 1;
      if (a.title === b.title) return 0;
    }
  }

  return movies.sort(moviesSort); 
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(array) {
  // Order alphabetically by title
  // const alphaSort = (a, b) => {
  //   return a.title.localeCompare(b.title)
  // }

  // Return the first 20 titles if there at least 20
  // return array.sort(alphaSort).slice(0,20)
  
  return array.sort((a, b) => {
    return a.title.localeCompare(b.title)
  }).slice(0,(array.length > 20 ? 20 : array.length)).map(movie => movie.title)
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() { }

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() { }



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
