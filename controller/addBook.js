const BookModel = require("../schema/book");
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

module.exports = addBook;
