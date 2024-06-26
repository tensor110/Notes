const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const questionModel = require('./questions');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware for parsing request body
app.use(bodyParser.json());

// Enable CORS for all routes
app.use(cors({
  origin: ['https://notes-alpha-navy.vercel.app'],
  methods: ['POST', "GET"],
  credentials: true
}));

app.use(express.json())

// Serve static files from the 'client/dist' directory
app.use(express.static(path.join(__dirname, '../client/dist')));

// API endpoint for form submission
app.post('/submit-form', async (req, res) => {
  try {
    const ques = await questionModel.create({
      topic: req.body.topic,
      difficulty: req.body.difficulty,
      question: req.body.question,
      answer: req.body.answer,
    });
    console.log(ques);
    res.status(200).send('Form submitted successfully!');
  } catch (error) {
    console.error('Error submitting form:', error); // Log the error
    if (error.name === 'ValidationError') {
      return res.status(400).send('Validation Error: ' + error.message);
    }
    res.status(500).send('There was an error submitting the form!');
  }
});

app.get('/questions', async (req, res) => {
  try {
    const questions = await questionModel.find({});
    res.status(200).json(questions);
  } catch (error) {
    console.error('Error fetching questions:', error);
    res.status(500).send('There was an error fetching the questions!');
  }
});

// Handle React routing, return all requests to React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

mongoose.connect('mongodb+srv://tensor110:Lucky123@cluster0.fndmwcf.mongodb.net/questions?retryWrites=true&w=majority&appName=Cluster0&minPoolSize=1&maxPoolSize=100');