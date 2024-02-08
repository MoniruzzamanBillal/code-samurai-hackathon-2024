const BookModel = require("../schema/book");
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

module.exports = getBook;
