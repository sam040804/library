
const books = [
    { title: 'Book Title 1', author: 'Author Name 1', description: 'Description of the book 1...' },
    { title: 'Book Title 2', author: 'Author Name 2', description: 'Description of the book 2...' },
    
];


function displayBooks() {
    const booksContainer = document.getElementById('books');

    books.forEach(book => {
        const bookDiv = document.createElement('div');
        bookDiv.classList.add('book');

        bookDiv.innerHTML = `
            <img src="book.jpg" alt="${book.title}">
            <h3>${book.title}</h3>
            <p>${book.author}</p>
            <p>${book.description}</p>
        `;

        booksContainer.appendChild(bookDiv);
    });
}


function handleSearch(event) {
    event.preventDefault();
    const searchInput = document.getElementById('search-input').value.toLowerCase();
    const filteredBooks = books.filter(book => 
        book.title.toLowerCase().includes(searchInput) || 
        book.author.toLowerCase().includes(searchInput)
    );

    displayFilteredBooks(filteredBooks);
}


function displayFilteredBooks(filteredBooks) {
    const booksContainer = document.getElementById('books');
    booksContainer.innerHTML = ''; 

    filteredBooks.forEach(book => {
        const bookDiv = document.createElement('div');
        bookDiv.classList.add('book');

        bookDiv.innerHTML = `
            <img src="book.jpg" alt="${book.title}">
            <h3>${book.title}</h3>
            <p>${book.author}</p>
            <p>${book.description}</p>
        `;

        booksContainer.appendChild(bookDiv);
    });
}


const searchForm = document.getElementById('search-form');
searchForm.addEventListener('submit', handleSearch);


displayBooks();
