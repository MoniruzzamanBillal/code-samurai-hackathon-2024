const BookModel = require("../schema/book");
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

module.exports = getBooks;
