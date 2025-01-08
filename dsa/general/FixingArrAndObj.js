const library = {
    books : [
         {
            title : "The Hobbit", 
            author : "J.R.R. Tolkien",
            year : 1937
        }
    ],
    addBook(book){
        if(!book.title || !book.author || !book.year){
            return "Book information is incomplete";
        }   
        this.books.push(book);
    },

    findBookByTitle(title){
        return this.books.find(book => book.title === title)
    },

    removeBook(title){
        const index = this.books.findIndex(book => book.title === title);
        if(index !== -1){
            this.books.splice(index, 1);
        }else {
            return "Book not found";
        }
    }
}

// console.log(library.books);
// console.log(library.findBookByTitle("The Hobbit"));
console.log(library.addBook({title: "The Lord of the Rings", author: "J.R.R. Tolkien", year: 1954}));  
// console.log(library.books);
console.log(library.addBook({title: "Harry Potter", author: "J.K. Rowling"}));
console.log(library.books);
console.log(library.removeBook("The Hobbit"));
console.log(library.books);