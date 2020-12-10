
let books = []
const fetchData = fetch('https://striveschool-api.herokuapp.com/books')
.then((response) => response.json())
.then((_books) => {
        books=_books
     books.forEach((book, index) => {
        let image = book.img
        let parent = document.querySelector('.main-row')
         
        let card = `<div id="${book.asin}" class="card mb-4 mt-5">
        <img
          src="${image}"
          class="card-img-top"
          width="100%"
          height="100%"
          role="img"

        />
        <button id="addToCart" type="button" onclick='addItemToList(${index})'  class="btn btn-lg btn-dark btn-block">Add to cart</button>
        

      </div>`
      parent.innerHTML += card
    }); 
    
})

const addItemToList = (index) => {
    const book = books[index]
    const bookCard = document.getElementById(book.asin)
    bookCard.style.opacity=0.4
    let cart = document.querySelector("#cart")
    cart.innerHTML += 1
    
} 






  