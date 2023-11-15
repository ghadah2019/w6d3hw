let container = document.getElementById('container');
fetch('https://655242ab5c69a7790329ca48.mockapi.io/bookks', { method: 'GET' })
	.then((res) => res.json())
	.then((data) => {
		console.log(data);
       

		for (let i = 0; i < data.length; i++) {
			let booksContainer = document.createElement('div');
			booksContainer.classList.add('booksContainer');
			let title = document.createElement('h5');
			title.classList.add('title');
			let image = document.createElement('img');
			image.classList.add('images');
			let description = document.createElement('p');
			description.classList.add('description');
			let author = document.createElement('p');
			author.classList.add('author');
	
			let btn = document.createElement('button'); 
			btn.classList.add('btn1');
			btn.innerText = 'Delete Book'; 

		
			container.appendChild(booksContainer);

			booksContainer.appendChild(image);
			booksContainer.appendChild(title);
			booksContainer.appendChild(description);
			booksContainer.appendChild(author);
			booksContainer.appendChild(btn);
		

			title.innerText = data[i].title;
			image.src = data[i].image;
			description.innerText = data[i].description;
			author.innerText = data[i].author;


			if (localStorage.getItem('name') === 'admin') {
				btn.style.display = 'block';
				btn.addEventListener('click', () => deleteBook(data[i].id));
			} else {
				btn.style.display = 'none';
			}
		}
	});

function deleteBook(id) {
	fetch(`https://655242ab5c69a7790329ca48.mockapi.io/bookks/${id}`, { method: 'DELETE' })
		.then((res) => res.json())
		.then((data) => console.log(data));
}