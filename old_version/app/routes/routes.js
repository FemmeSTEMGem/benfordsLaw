// NOTES FOR RE-LEARNING FULL-STACK APPLICATIONS

// - In your routing file, you need to define the appropriate route and associate it with the 'results' function
// - With this setup, when a client makes a GET request to /results?numbers=1,2,3,4, the 'results' function will be called
  // - It will perform mathematical operations on the list of numbers, render the results.ejs template with the calculated values, and send the rendered HTML as the response to the client



// routes.js

const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller');

// GET /math
router.get('/results', controller.results);

module.exports = router;
