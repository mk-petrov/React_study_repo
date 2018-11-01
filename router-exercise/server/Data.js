let Database = {
  books: [
    {id: 1, title: 'The mile', authorId: 101, dateAdded: '1.11.2018', image: ''},
    {id: 2, title: 'The test', authorId: 101, dateAdded: '3.10.2018', image: ''},
    {id: 3, title: 'Test book', authorId: 102, dateAdded: '4.10.2018', image: ''},
    {id: 4, title: 'Test book 2', authorId: 103, dateAdded: '7.10.2018', image: ''},
    {id: 5, title: 'Test book 3', authorId: 104, dateAdded: '12.10.2018', image: ''},
    {id: 6, title: 'Test book 4', authorId: 105, dateAdded: '14.10.2018', image: ''},
    {id: 7, title: 'Test book 5', authorId: 106, dateAdded: '12.10.2018', image: ''},
    {id: 8, title: 'Test book 6', authorId: 106, dateAdded: '1.1.2018', image: ''},
    {id: 9, title: 'Test book 7', authorId: 106, dateAdded: '2.10.2018', image: ''},
    {id: 10, title: 'Small Manual', authorId: 107, dateAdded: '10.10.2018', image: ''}
  ],
  authors: [
    {id: 101, name: 'Petko Petrov', image: 'urlOfImg'},
    {id: 102, name: 'Shrek', image: 'urlOfImg'},
    {id: 103, name: 'Boris', image: 'urlOfImg'},
    {id: 104, name: 'Maria Ivanova', image: 'urlOfImg'},
    {id: 105, name: 'Simeon', image: 'urlOfImg'},
    {id: 106, name: 'Ivan Ivanov', image: 'urlOfImg'},
    {id: 107, name: 'Viktor', image: 'urlOfImg'}
  ],
  comments: [
    {id: 1001, authorId: 101, bookId: 1, data: 'good book'},
    {id: 1002, authorId: 101, bookId: 2, data: 'Stupid book'},
    {id: 1002, authorId: 101, bookId: 2, data: 'Stupid book'},
    {id: 1002, authorId: 101, bookId: 2, data: 'Stupid book'},
    {id: 1002, authorId: 101, bookId: 2, data: 'Stupid book'}
  ]
}

export default Database
