const BookModel = require("../schema/book");

// adding book in database method
const addBook = async (req, res) => {
  try {
    let booksCount = await BookModel.find();
    booksCount = booksCount.length;
    const data = { ...req.body, id: booksCount + 1 };
    const newBook = await BookModel.create(data);

    res.status(201).json(newBook);
  } catch (error) {
    res.send({ error });
    console.log(error);
  }
};

// get all book method
const getBooks = async (req, res) => {
  try {
    let response = {
      books: [],
    };
    response.books = await BookModel.find();
    response.books.sort((a, b) => b.id - a.id);
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

// get single book method
const getBook = async (req, res) => {
  try {
    const reqId = req.params.id;
    const query = {
      id: reqId,
    };

    const result = await BookModel.find(query);

    if (result[0]) {
      res.status(200).send(result[0]);
    }

    res.status(404).send({ message: `book with id: ${reqId} was not found` });
  } catch (error) {
    console.log(error);
  }
};

// update book method
const updateBook = async (req, res) => {
  try {
    const reqId = req.params.id;
    const data = req.body;

    const query = {
      id: reqId,
    };

    const result = await BookModel.findOneAndUpdate(
      query,
      {
        $set: {
          ...data,
        },
      },
      {
        new: true,
      }
    );

    if (result) {
      res.status(200).send(result);
    }

    res.status(404).send({ message: `book with id: ${reqId} was not found` });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { addBook, getBook, getBooks, updateBook };
