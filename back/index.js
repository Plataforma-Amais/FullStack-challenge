const express = require('express');
const cors = require('cors');
require('dotenv').config();

const { errorMiddleware } = require('./middlewares');
const {
  schoolsRouter,
  classRouter,
  teacherRouter,
  studentRouter,
} = require('./routes');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use(schoolsRouter);
app.use(classRouter);
app.use(teacherRouter);
app.use(studentRouter);
app.use(errorMiddleware);

app.listen(PORT, () => console.log(`Rodando na porta ${PORT}`));
