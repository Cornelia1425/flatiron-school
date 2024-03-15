/*

Phase 1 -> GET
Updated March 14, 2024
Created May 25, 2023
by Sakib Rasul

Objectives
1. Make a GET request to an external API.

*/

//fetch
//Create = POST
//Read = GET
//Update = PATCH
//Delete = DELETE

// A synchronous request to https://cat-fact.herokuapp.com/facts/random.
// fetch("https://cat-fact.herokuapp.com/facts/random")
// fetch is a promise, so we'll use.then() to handle its successful state
// Here, we'll convert our JSON response into usable JS
// .then(response => response.json() ) //JSON //.then need to be attached to fetch, do no semicolon at the end of fetch.
// .then(fact => {
//     document.querySelector("#cat").textContent = fact.text
// })
// fetch is a promise, so we'll use.then() to handle its unsuccessful state
// .catch(error => console.log(error)) 

// A synchronous request to https://anapioficeandfire.com/api/books. 
fetch("https://anapioficeandfire.com/api/books")
.then(response=> response.json()) 
.then(booksArray =>{ 
    booksArray.forEach(book=>{
        const li = document.createElement("li")
        li.textContent = book["name"]
        document.querySelector("#got").append(li)
    })
})


/* function renderBooks(books) {
    books.forEach(book => {
      const li = document.createElement("li");
      li.textContent = book.name;
      document.querySelector("#got").appendChild(li);
    });
  } */

//make list of game of thrones book names, it's an array
//• game of throne
//• ...
//• ...

// An asynchronous request to https://pokeapi.co/api/v2/pokemon/[name]"
async function getPokemon(name){ //async generating function into a function later on
    //interpolation
    //await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`) 
    //cantatenation 
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + name)
    const pokemon = await response.json();
    document.querySelector("#pokemon").textContent = pokemon.name
    //console.log(pokemon);
}
getPokemon("ditto");


// ~ Challenge: Make a GET request to an API of your choice!