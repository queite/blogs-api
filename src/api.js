const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('../swagger_output.json');
require('express-async-errors');

const authRouter = require('./routers/authRouter');
const userRouter = require('./routers/userRouter');
const categoryRouter = require('./routers/categoryRouter');
const postRouter = require('./routers/postRouter');

const error = require('./middlewares/error');

const app = express();

app.use(express.json());

app.use('/user', userRouter);
app.use('/login', authRouter);
app.use('/categories', categoryRouter);
app.use('/post', postRouter);

app.use(error);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));
// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
