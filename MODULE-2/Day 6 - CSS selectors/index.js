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

function newNavLink() {
    let newLink = document.createElement("a");
    newLink.innerText = "NEWLINK";
    //1
    const nav = document.getElementsByTagName("nav")[0];
    nav.appendChild(newLink);

    //2
    //newLink.appendChild(document.getElementsByTagName("nav")[0])
  }
newNavLink()

function removeSearchIcon(){
    let searchIcon = document.getElementsByTagName("svg")[0];
    searchIcon.remove();
}
removeSearchIcon()


function changeJumbo(){
    for (const jumbo of document.querySelectorAll(".jumbotron")){
        jumbo.style.cssText = "background-color: blue !important";
    }
}
changeJumbo()

function changeTitle(){
    const newTitle = document.getElementsByTagName("h1")[0]
    newTitle.innerText = "New Title";
}

changeTitle()

