const express = require("express");

const {
  addBook,
  getBooks,
  getBook,
  updateBook,
} = require("../controller/BookController");

const router = express.Router();
router.get("/", async (req, res) => {
  try {
    res.json({ message: "welcome to code samurai 2024 , monir " });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/books", getBooks);

// get specific book , by id
router.get("/books/:id", getBook);

// add books route
router.post("/books", addBook);

// update book
router.put("/books/:id", updateBook);

module.exports = router;
