const express = require('express');
const router = express.Router();

// Load Book model
const Rental = require('../../models/Rental');


// @route GET api/books
// @description Get all books
// @access Public
router.get('/', (req, res) => {
  Rental.find()
    .then(rentals => res.json(rentals))
    .catch(err => res.status(404).json({ norentalsfound: 'No Rentals found' }));
});

router.post('/', (req, res) => {
  Rental.create(req.body)
    .then(rental => res.json({ msg: 'Rental added successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to add this rental' }));
});



module.exports = router;