/*
EX11) Write a function to add a new link into the navbar
EX12) Write a function to remove the "Search" magnifying glass icon
EX13) Write a function to change the background of the jumbotron
EX14) Write a function to change the color of the main title
EX15) Write a function to change the column size for post headings
EX16) Write a function to remove all the links under "Elsewhere"
EX17) Write a function to trim just the first 50 characters in the first paragraph for each blog post
EX18) Write a function and attach it to the "Newer" button, to add new Blog Post (just div and title)
EX19) Write a function and attach it to the "Older" button, to remove the last Blog Post
EX20) Write an alert with the name of the author every time the user hover with the mouse over an author name
*/
//11
function newNavLink() {
    let newLink = document.createElement("a");
    newLink.innerText = "NEWLINK";
    const nav = document.getElementsByTagName("nav")[0];
    nav.appendChild(newLink);

  }
newNavLink()

//12
function removeSearchIcon(){
    let searchIcon = document.getElementsByTagName("svg")[0];
    searchIcon.remove();
}
removeSearchIcon()

//13
function changeJumbo(){
    const jumbo = document.querySelectorAll(".jumbotron")[0]
    jumbo.style.cssText = "background-color: blue !important";
    
}
changeJumbo()

//14
function changeTitle(){
    const newTitle = document.getElementsByTagName("h1")[0]
    newTitle.innerText = "New Title";
}
changeTitle()

//15
function changeSizeCol() {
    let col = document.querySelectorAll("h2")
    for (let z = 0; z < col.length; z++) {
        col[z].style.columnWidth = "200px";
    }
    
}
changeSizeCol()

//16
function removeLinks(){
    let col = document.querySelectorAll(".blog-sidebar .list-unstyled")[1]
    col.remove();
}
removeLinks()
/*
//17
function trimChar(){
    let divs = document.querySelectorAll("div.blog-post > p")
    divs.style.backgroundColor = 'blue'

} 
trimChar()*/