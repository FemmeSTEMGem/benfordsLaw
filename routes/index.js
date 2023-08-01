var express = require('express');
var router = express.Router();

//Importing the math function from the utils folder
const {lawCalculator} = require('../utils/mathUtils.js')

/* GET */

// Route to display the home page
router.get('/', (req, res, next) => {
  res.render('index');
});

// Route to display the result on a new page
router.get('/result', (req, res) => {
  const result = req.query.output; // Get the result from the query parameter
  // Render the result view with the data
  res.render('result', { result });
});


/* POST */

// Handling user submission
router.post('/process', (req, res) => {
  const userInput = req.body.userInput; // Get the input from the request body
  // Call your function to process the user input
  const result = lawCalculator(userInput.split(" ").map(x => parseInt(x)));
  // Redirect to the new page with the result
  res.redirect(`/result?output=${encodeURIComponent(result)}`);
});

module.exports = router;