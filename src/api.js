const express = require('express');
require('express-async-errors');

const authRouter = require('./routers/authRouter');
const userRouter = require('./routers/userRouter');

const error = require('./middlewares/error');

const app = express();

app.use(express.json());

app.use('/user', userRouter);
app.use('/login', authRouter);

app.use(error);
// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
