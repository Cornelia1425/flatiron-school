/*

Phase 1 -> DOM Manipulation
by Sakib Rasul
Updated March 13, 2024
Created September 12, 2023

Core Deliverables
1. Select a node.
2. Modify a node.
3. Remove a node.
4. Append a node.

Challenges
1. Append a list.
2. Replace a node.

*/

// ~ APIs, CRUD, `document`

// ~ Read/Select a node
// -> querySelector is a DOM method that lets us look up nodes by CSS **selector**.
console.log(document.querySelector("h1"));
console.log(document.querySelector("#today"));
console.log(document.querySelector("p"));


// -> querySelectorAll is a DOM method that returns an array-like list of nodes that match a CSS selector.
document.querySelectorAll("p").forEach(pElement => {
    console.log(pElement);
});
// -> textContent is a property of text nodes (e.g. h1, p) that contain their text.
console.log(document.querySelector("#today").textContent);

// ~ Update/Modify a node's attributes
// -> To modify an attribute, just use = after the attribute name in object dot notation
document.querySelector("#today").textContent="Today!"; //modify contents
console.log(document.querySelector("#today").textContent);
document.querySelector("#today").style.color="red";

// ~ Delete/Remove a node
// -> To remove an existing element, we can look it up and call the node's method `remove()`.
//document.querySelector("#tomorrow").remove();

// ~ Create + Append a node
// -> createElement(), append()
const image = document.createElement("img");
image.src = "https://img.gagaoolala.com/media/11316475-985267-lg.jpg"
document.querySelector("#image-container").append(image);
//document.body.append(image); //add the created element to where you specify


// ~ Challenges
// 1. Write a function named displayList that takes a name and an array,
//    and appends a list to #dates. For example, given "Books" and "The Shining",
//    the function should append to #dates something like:
//        Books
//        • The Shining
// 2. Replace the <strong> element with a newly created one.

//1
// heading and list - an array with multiple elements
function displayList (heading, book){
    //append heading
    const div = document.querySelector("#dates");
    const headingList = document.createElement("h2");
    headingList.textContent = heading; //assign contents to the element we created - headingList
    document.querySelector("#dates").append(headingList)
    //append book
    const list = document.createElement("ul");
    book.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item; //assign items in book to the element we created - li
        list.append(li);
    });
    div.append(list);
};

/*
    document.headingList.append(heading);
    const bookList = [document.createElement("book")];
    document.bookList.append(book);
    // document.querySelector("#dates").append(heading);
    // document.querySelector("#dates").append(bookList);
}
*/

displayList("Books", ["The Shining", "The Stunning"]);

/*
//copy solution
function displayList(name, array) {
    const div = document.querySelector("#dates");
    const heading = document.createElement("h2");
    heading.textContent = name;
    div.append(heading);

    const list = document.createElement("ul");
    // [array].forEach([function]) applies [function] to each item in [array]
    array.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        list.append(li);
    });
    // ...equivalent to...
    // for (let i = 0; i < array.length; i++) {
    //     const li = document.createElement("li");
    //     li.textContent = array[i];
    //     list.append(item);
    // }
    div.append(list);
};
displayList("Book Series", ["Harry Potter", "Alex Rider", "The Magic Treehouse"]);

*/


//2
// document.querySelector("strong").remove();
// document.querySelector("strong").append("Yiran");
const oldName = document.querySelector("span");
const newName = document.createElement("div");
newName.textContent = "Yiran Shu";
//document.querySelector("strong").textContent= newName;
//document.querySelector("strong").replaceWith(newName);
//document.querySelector("strong").remove();
oldName.remove();
document.querySelector("address").append(newName);

/*
//solution
const author = document.createElement("italic");
author.textContent = "Sakib Rasul";
document.querySelector("strong").replaceWith(author);
*/

// ~ the "click" event
document.querySelector("#today").addEventListener("click", () =>{
    console.log("The user clicked on Today!");

});
// ~ the "submit" event
document.querySelector("form").addEventListener("submit",event =>{
    event.preventDefault();
    console.log("The form was submitted!");
    console.log(document.querySelector("form").date);
    const submittedDate = document.querySelector("form").date.value;
    console.log(submittedDate);

});


// ~ challenges
// 1. Add some non-click, non-submit event listener to the page. It can trigger whatever you wish!
//MDN events

document.querySelector("p").addEventListener("mouseover", () =>{
    console.log("I am reading!");
});


