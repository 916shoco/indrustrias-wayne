const express = require('express');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const buildPath = path.join(__dirname, '../wayne-security-front/build');

console.log('Serving static files from:', buildPath);
app.use(express.static(buildPath));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(buildPath, 'index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
