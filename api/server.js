const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const mongoose = require('mongoose');

// local imports
const categoryRouter = require('../Routes/categoryRouter');
const authRouter = require('../Routes/authRouter');
const questionRouter = require('../Routes/questionRouter');

// Server instance
const server = express();

// DB connection
const mongoDB = process.env.DB_URL;

mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

db.once('open', () => {
  console.log('MongoDB Connection Successful!');
});

// middlewares
server.use(helmet());
server.use(cors());
server.use(express.json());

// routes
server.use('/api/auth', authRouter);
server.use('/api/categories', categoryRouter);
server.use('/api/questions', questionRouter);

// sanity check
server.use('/', (req, res) => {
  res.send("<h1>I'm Alive and Well!</h1>");
});

module.exports = server;
