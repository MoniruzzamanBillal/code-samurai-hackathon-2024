const BookModel = require("../schema/book");
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

module.exports = updateBook;
