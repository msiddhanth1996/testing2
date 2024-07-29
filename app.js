const express = require('express');
const app = express();
const port = 3000;

// Example route
app.get('/api/hello', (req, res) => {
  res.send('Hello World!');
});

// Catch-all for undefined routes
app.use((req, res) => {
  res.status(404).send('Not Found');
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
