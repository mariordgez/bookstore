# Bookstore.

I will create an MVP version of it that allows you to:

    Display a list of books.
    Add a book.
    Remove a selected book.

By building this application, i will learn how to use React and Redux.

## Built With

- HTML
- CSS3
- JavaScript
- React
- Redux

## Getting Started

**You'll need to have git and npm installed in you environment to follow these instructions.**
To install git go to https://git-scm.com/book/en/v2/Getting-Started-Installing-Git
To install npm go to https://nodejs.org/en/

To get a local copy of the repository please run the following commands on your terminal:

```bash
$ cd <folder>
$ git clone git@github.com:mariordgez/bookstore.git
$ cd To-Do-List
```

To be able to run the project, run

```bash
$ npm start
```

With this, you can use

To build the project and to start a server, respectively. `npm start` should open the page in a browser by itself, if it
doesn't, you can just access `localhost:3030` to see the project.

## Author

👤 **Mario Alberto Rodriguez Cota**

- GitHub: [@mariordgez](https://github.com/mariordgez)
- Twitter: [@MarioRo75396624](https://twitter.com/MarioRo75396624)
- LinkedIn: [LinkedIn](https://linkedin.com/in/mario-alberto-rodriguez-cota-a2860a205)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

Feel free to check the [issues page](https://github.com/mariordgez/bookstore/issues).

## Show your support

Give a ⭐️ if you like this project!!!

## 📝 License

[MIT](/LICENSE)

const postToApi = fetch(
'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/',
{
method: 'POST',
headers: {
'Content-type': 'application/json; charset=UTF-8',
},
body: JSON.stringify(),
} // eslint-disable-line comma-dangle
).then((res) => res.text());
id: wib10ybZy4rKQLyBThID
