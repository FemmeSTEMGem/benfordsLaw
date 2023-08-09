var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

// It's great to hear about your application's progress, and your ideas for additional features sound interesting! Let's discuss the difficulty level and complexity of each feature to help you decide which ones to implement first:

//     Displaying First-Digit Distribution Graphs:
//         Difficulty: Moderate
//         Description: This feature involves generating graphs to visualize the first-digit distribution of the user's input data and comparing it with Benford's Law distribution.
//         Required Skills: You'll need to work with data visualization libraries like Chart.js or D3.js to create the graphs. Familiarity with HTML, CSS, and JavaScript is necessary to integrate and customize the graphs on the webpage.
//         Benefits: Visualizing the data with graphs will provide users with a better understanding of the distribution and how it compares to Benford's Law.

//     Adjustable Sensitivity of the Law Calculator:
//         Difficulty: Moderate to Advanced
//         Description: Allowing users to adjust the sensitivity of the law calculator requires adding a user interface (UI) component, such as a slider or input field, to control the percentage range.
//         Required Skills: This feature involves both frontend and backend work. You'll need to handle user input on the frontend and update the backend calculation based on the adjusted sensitivity. It may require additional validation and error handling for user input.
//         Benefits: Offering adjustable sensitivity gives users more control over the analysis, allowing them to customize the application's behavior according to their specific needs.

//     Improve Frontend with CSS and UI Enhancements:
//         Difficulty: Easy to Moderate
//         Description: This feature focuses on improving the user interface and overall look of the application using CSS and other frontend techniques. It includes styling, layout improvements, and making the application more user-friendly.
//         Required Skills: Knowledge of HTML and CSS for frontend design and layout enhancements.
//         Benefits: A polished and visually appealing frontend can enhance the user experience, making the application more engaging and professional.

// Considering the difficulty levels, you might want to start with the easier features (Option 3) to improve the frontend and overall user experience. This will give your application a more professional appearance and make it more inviting to users.

// Next, you can move on to the intermediate features (Option 1) to display first-digit distribution graphs. This will add valuable visual insights to the application, allowing users to compare their data with Benford's Law.

// Lastly, you can tackle the more advanced feature (Option 2) of adjustable sensitivity. This feature will require careful handling of user input and backend modifications to adjust the law calculator's behavior based on the chosen sensitivity.

// Remember that the actual difficulty of each feature may vary based on your familiarity with the required technologies and libraries. It's essential to take it step by step and enjoy the process of building your application. Feel free to ask for further guidance or assistance as you progress with your project. Good luck, and happy coding!