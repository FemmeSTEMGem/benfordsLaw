var express = require('express');
var router = express.Router();

//Importing the math function from the utils folder
const {lawCalculator, count} = require('../utils/mathUtils.js')

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
  // Store your result (true/false) through calling your function to process the user input
  const resultObj = count(userInput.split(" ").map(x => parseInt(x)));
  //Store graph data of the user input
  const result = lawCalculator(userInput.split(" ").map(x => parseInt(x)));
  // Render the result view and pass both the result object and the true/false result
  res.render('result', { result, resultObj });
});

module.exports = router;