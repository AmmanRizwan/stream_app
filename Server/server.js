const express = require('express');
const app = express();
const cors = require('cors');
const movieRouter = require('./routes/movie.routes.js');
const userRouter = require('./routes/user.routes.js');
require('dotenv').config();
const cookieParser = require('cookie-parser');

const port = process.env.PORT;
require('./configs/movie.config');

app.use(cors());
app.use(cookieParser());
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));
app.use('/api/movies', movieRouter);
app.use('/', userRouter);

app.listen(port, () => console.log(`Listening on port: ${port}`));