// NOTES FOR RE-LEARNING FULL-STACK APPLICATIONS

// We use the app.set() method to configure the view engine as EJS ('ejs') and set the views directory to the appropriate path (path.join(__dirname, 'app', 'views')).

// With this setup, when you render the results.ejs file in your controller using res.render('results', { /* data */ }), Express.js will look for the results.ejs file within the specified views directory and render it with the provided data before sending it as the response to the client.


const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'app', 'views'));

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});