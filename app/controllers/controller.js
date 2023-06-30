// NOTES FOR RE-LEARNING FULL-STACK APPLICATIONS

// - The controllers folder in a full-stack application typically contains modules or files responsible for handling the logic related to diffferent routes or endpoints.
// - The controllers receive incoming requests, process them, interact with the models or services, and send back responses to the client

// To handle a GET request inside a controller that redirects to a results page, you can use the res.redirect() method provided by Express.js

const mathUtils = require('.../utils/mathUtils')

// GET /results
function results(req, res) {
  const numbers = req.query.numbers; // Assuming the list of numbers is passed as a query parameter "numbers"

  // Convert the string of numbers into an array
  const numberList = numbers.split(' ').map(Number);

  //! Perform mathematical operations on the number list...


  // Redirect to the results page
  res.redirect(`/results?q=${query}`);
}

module.exports = {
  results
};
