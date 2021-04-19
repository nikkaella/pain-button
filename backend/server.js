const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const complaintsRouter = require('./routes/complaints');
const usersRouter = require('./routes/users');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors);
app.use(express.json());
app.use('/complaints', complaintsRouter);
app.use('/users', usersRouter);

const uri = process.env.ATLAS_URI;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const connection = mongoose.connection;

connection.once('open', () => {
    console.log("MongoDB database connection established successfuly");
});



app.listen(port, () => {
    console.log('Server is running on port ' + port);
});