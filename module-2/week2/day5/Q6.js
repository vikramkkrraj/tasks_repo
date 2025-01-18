function digitalLS (){
    const bookList = [];

    const addBookAtLast = (book) => {
        bookList.push(book);
        return bookList;
    }
    const addBookAtFirst = (book) => {
        bookList.unshift(book);
        return bookList
    }
    const removeBookfromLast = () =>{
        return bookList.pop();
    }
    const removeBookFromStart = () => {
       return bookList.shift();
    }
    const searchBook = (book) => {
       return bookList.includes(book)
    }
    const firstOccurrence = (book) => {
        return bookList.indexOf(book);
    }
    const lastOccurrence = (book) => {
        return bookList.lastIndexOf(book);
    }
    const sublist = (start, end) => {
        return bookList.slice(start,end);
    }
    const sortBooklist = () => {
        return[...bookList].sort((a,b) => a.localeCompare(b));
    }
    const replaceBook = (book, index) => {
        if(index >=0 && index < bookList.length){
            bookList.splice(index,1,book);
        }
        return bookList;
    }
    const joinBooktitles = () => {
        return bookList.join(",");
    }
    const seeBookList = () => {
        console.log(bookList);
    }

    return {
        addBookAtFirst,
        addBookAtLast,
        removeBookFromStart,
        removeBookfromLast,
        searchBook,
        firstOccurrence,
        lastOccurrence,
        sublist,
        sortBooklist,
        replaceBook,
        joinBooktitles,
        seeBookList
    }
}

const { 
        addBookAtFirst,
        addBookAtLast,
        removeBookFromStart,
        removeBookfromLast,
        searchBook,
        firstOccurrence,
        lastOccurrence,
        sublist,
        sortBooklist,
        replaceBook,
        joinBooktitles, 
        seeBookList
} = digitalLS();

// Adding books to the list
console.log("Adding books to the list:");
addBookAtLast("The Great Gatsby");
addBookAtLast("1984");
addBookAtFirst("To Kill a Mockingbird");
addBookAtFirst("Pride and Prejudice");
seeBookList();

// Removing books
console.log("\nRemoving the first and last books:");
const removedFirst = removeBookFromStart();  // Removes 'Pride and Prejudice'
console.log(`Removed from start: ${removedFirst}`);
const removedLast = removeBookfromLast();  // Removes '1984'
console.log(`Removed from last: ${removedLast}`);
seeBookList();


// Searching for a book
console.log("\nSearching for books:");
console.log(`Is '1984' in the list? ${searchBook("1984")}`); // Should return false
console.log(`Is 'The Great Gatsby' in the list? ${searchBook("The Great Gatsby")}`); 

// Finding occurrences
console.log("\nFinding occurrences of books:");
addBookAtLast("The Great Gatsby"); // Add again to create duplicates
addBookAtLast("1984");
addBookAtLast("The Great Gatsby");
seeBookList(); // Should show: ['To Kill a Mockingbird', 'The Great Gatsby', 'The Great Gatsby', '1984', 'The Great Gatsby']
console.log(`First occurrence of 'The Great Gatsby': ${firstOccurrence("The Great Gatsby")}`); // Should return 1
console.log(`Last occurrence of 'The Great Gatsby': ${lastOccurrence("The Great Gatsby")}`); // Should return 4

// Getting a sublist
console.log("\nGetting a sublist:");
console.log(sublist(1, 4)); // Should return ['The Great Gatsby', 'The Great Gatsby', '1984']

// Sorting the list
console.log("\nSorting the list:");
console.log(sortBooklist()); // Should return a sorted version of the list

// Replacing a book
console.log("\nReplacing a book:");
replaceBook("Moby Dick", 2); // Replaces the book at index 2 with 'Moby Dick'
seeBookList(); // Should show the updated list

// Joining book titles
console.log("\nJoining book titles:");
console.log(joinBooktitles()); // Should return the joined string of book titles with ',' as separator

// Final view of the book list
console.log("\nFinal book list:");
seeBookList();
