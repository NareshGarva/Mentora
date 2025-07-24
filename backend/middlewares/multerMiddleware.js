// uploadMiddleware.js
import multer from 'multer';
import path from 'path';
import fs from 'fs';

// Ensure upload directory exists
const uploadDir = './public/temp/';
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadDir),
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const uniqueFileName = `${file.fieldname}-${Date.now()}-${Math.floor(Math.random() * 10000)}${ext}`;
    console.log(`File saved as: ${uniqueFileName}`);
    cb(null, uniqueFileName);
  }
});

export const upload = multer({ storage });
