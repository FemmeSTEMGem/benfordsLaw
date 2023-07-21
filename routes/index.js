//! Initial attempt to delete routes folder resulted in an error message upon loading the main page. Use ChatGPT to determine the cause. Obviously a routing issue, just gotta pinpoint it. Also worth noting, in an attempt to isolate the problem myself first, I commented out a few pre-existing lines of code in app.js. I doubt very much that they'll need to be used, but worth mentioning just in case it's relevant later.

var express = require('express');
var router = express.Router();

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
  const result = lawCalculator(userInput);

  // Redirect to the new page with the result
  res.redirect(`/result?output=${encodeURIComponent(result)}`);
});

module.exports = router;