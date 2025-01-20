
function Books(title, author, pages, readBook) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readBook = readBook ? "YES" : "NO";
}


const mylibrary=[{title:'amor' ,author:'agunos',pages:12,readBook:"NO"},
    {title:'amor' ,author:'No se',pages:256,readBook:"YES"},
    {title:'amor' ,author:'Alguno',pages:124,readBook:"NO"}];



function displayBooks(){
    const bookTableBody = document.querySelector('#bookTable tbody');
    bookTableBody.innerHTML = "";
    
    mylibrary.forEach((book)=> {
        let newRow = bookTableBody.insertRow();
        newRow.insertCell(0).textContent = book.title;
        newRow.insertCell(1).textContent = book.author;
        newRow.insertCell(2).textContent = book.pages;
        newRow.insertCell(3).textContent = book.readBook;

        
});
};
function addBookToLibrary(){
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const pages = document.querySelector('#pages').value;
    const readRadio = document.querySelector('input[name="readBook"]:checked');
    const readBook = readRadio ? readRadio.value : "NO";
    
    const newBook = new Books(title, author, pages, readBook);
    
    mylibrary.push(newBook);
    
    if (!title || !author || !pages || !readRadio) {
        alert("All fields must be filled out.");
        return;
    }
    
    displayBooks();
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
    document.querySelector('#pages').value = '';
    document.querySelector('input[name="readBook"]:checked').checked = false;

}
document.querySelector('#addBookBtn').addEventListener('click', addBookToLibrary);
displayBooks();