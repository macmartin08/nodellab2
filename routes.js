// Our Express app module
const express = require('express');
const app = express();
// Importing the pageRoutes
const pageRoutes = require('./routes/pages');
const studentRoutes = require('./routes/student')
// Registering our pageRoutes
app.use('/', pageRoutes);
app.use('/student',studentRoutes)
// Exporting the changes
module.exports = app;