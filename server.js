const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

app.get('/api/users', (req, res) => {
  console.log('Received GET request for /api/users');
  console.log('Query Parameters:', req.query);
  res.send('Users data');
});
app.post('/api/users', (req, res) => {
  console.log('Request Body:', req.body);
  res.status(201).json({
      message: 'User created successfully',
      user: req.body
  });
});

app.put('/api/users', (req, res) => {
  const userId = req.params.id; 
  const updatedUser = req.body; 
  console.log(`Updating user with ID: ${userId}`);
  console.log('Updated User Data:', updatedUser);
  res.status(201).json({
      message: 'User updated successfully',
      userId: userId,
      updatedUser: updatedUser
  });
});

app.delete('/api/users', (req, res) => {
  const userId = req.params.id;
  console.log(`Deleting user with ID: ${userId}`);
  res.status(201).json({
      message: 'User deleted successfully',
      userId: userId
  });
});
db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});
