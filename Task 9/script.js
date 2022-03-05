/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri sukuria objektus 3 savybėm ir 1 metodu:

Savybės:
title, director, budget
Metodas: 
wasExpensive() - jeigu filmo budget bus didesnę nei 100 000 000 mln USD, tada gražins true, kiru atveju false 
------------------------------------------------------------------------------------------------------ */

class Movie {
  constructor(title, director, budget) {
    this.title = title;
    this.director = director;
    this.budget = budget;
  }

  wasExpensive() {
    console.log(this.budget >= 100000000);
  }
}

const expensiveMovie = new Movie(
  "Pirates of the Caribbean: On Stranger Tides",
  "Rob Marshall",
  435000000
);
const veryCheapMovie = new Movie("True Lies", "James Cameron", 95000000);

expensiveMovie.wasExpensive();
veryCheapMovie.wasExpensive();
