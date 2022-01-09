# nodejs-graphql-tutorial

Setup for GraphQL server using Nodejs, Express and MongoDB.

GraphiQL: http://localhost:3000/graphql

```bash
# Add Author
mutation{
  addAuthor(name:"Author1", age: 24){
    name
    age
  }
}
```

```bash
# Add Book
mutation {
  addBook(name: "Book one", pages: 320, authorID: "618e794157ffc9c123f45da5") {
    name
    pages
  }
}
```

```bash
# Query Book and it's author
{
  book(id: "618e79fdda6166da6a8887a2") {
    id
    name
    pages
    author {
      id
      name
      age
    }
  }
}
```

```bash
# Query Books
{
  books {
    id
    name
    pages
    author {
      id
      name
      age
    }
  }
}
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

```

test
