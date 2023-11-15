

function apiGet(){
fetch('https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=mTYZmPcLnU6oaeR61YlQJaHN0On9XdWz', {
method: "get"

})
.then(response => response.json())
.then(data =>{
    console.log(data);
for(let i = 0; i < data.results.books.length; i++) {
    let get_data = document.getElementById("get-data");
    let card = document.createElement("div");
    card.className = "card";


    card.innerHTML = ` 
   
    <img src= "${data.results.books[i].book_image}">
    <h2> ${data.results.books[i].title}</h2>
    <h3> ${data.results.books[i].author}</h3>
    
    `
    get_data.appendChild(card)
}

  
})
}
apiGet()




