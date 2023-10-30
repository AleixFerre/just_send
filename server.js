import express from 'express';
import fs from 'fs';
import multer from 'multer';
import path from 'path';

const app = express();
const storage = multer.diskStorage({
  destination: 'uploads/', // Specify the destination directory
  filename: (req, file, cb) => {
    const originalFileName = file.originalname; // Use the original file name
    cb(null, originalFileName);
  },
});
const upload = multer({ storage });

// Serve static files
app.use(express.static('public'));

// Route to serve the index.html page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Route to upload a file
app.post('/upload', upload.single('file'), (req, res) => {
  if (req.file) {
    res.sendFile(path.join(__dirname, 'success.html'));
  } else {
    res.status(400).sendFile(path.join(__dirname, 'error.html'));
  }
});

// Route to download a file
app.get('/download/:filename', (req, res) => {
  const filename = req.params.filename;
  res.sendFile(path.join(__dirname, 'uploads', filename));
});

// Create the 'uploads' directory if it doesn't exist
if (!fs.existsSync('uploads')) {
  fs.mkdirSync('uploads');
}

app.listen(5000, '0.0.0.0', () => {
  console.log('Server is running on port 5000');
});
