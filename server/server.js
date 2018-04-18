const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.resolve(__dirname, '..', 'dist');
const port = process.env.PORT || 5000;

// Serve assets from public folder
app.use(express.static(publicPath));

app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
