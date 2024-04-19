const express = require('express');
const path = require('path');
const app = express();

// Ustaw katalog, z którego będą serwowane zasoby statyczne (pliki JavaScript, CSS, itp.)
app.use(express.static(path.join(__dirname, 'public')));

// Obsługa ścieżki głównej
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Obsługa pliku JavaScript
app.get('/main.js', (req, res) => {
  const filePath = path.join(__dirname, 'public', 'main.js');
  res.sendFile(filePath, {
    headers: {
      'Content-Type': 'application/javascript' // Ustaw typ MIME na "application/javascript"
    }
  });
});

// Nasłuchuj na określonym porcie
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Serwer uruchomiony na porcie ${port}`);
});
