import express from 'express';
import fs from 'fs';
import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const storage = multer.diskStorage({
  destination: 'uploads/',
  filename: (req, file, cb) => {
    const originalFileName = file.originalname;
    cb(null, originalFileName);
  },
});
const upload = multer({ storage });

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.post('/upload', upload.single('file'), (req, res) => {
  if (req.file) {
    res.sendFile(path.join(__dirname, 'public/success/success.html'));
  } else {
    res.status(400).sendFile(path.join(__dirname, 'public/error/error.html'));
  }
});

app.get('/download/:filename', (req, res) => {
  const filename = req.params.filename;
  res.sendFile(path.join(__dirname, 'uploads', filename), () => res.status(400).sendFile(path.join(__dirname, 'public/error/error.html')));
});

if (!fs.existsSync('uploads')) {
  fs.mkdirSync('uploads');
}

app.listen(5000, '0.0.0.0', () => {
  console.log('Server is running on port 5000');
});
