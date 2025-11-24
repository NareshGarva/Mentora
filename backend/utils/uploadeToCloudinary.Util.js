// uploadeToCloudinary.Util.js
import cloudinary from '../config/cloudinary.js';
import fs from 'fs';
import path from 'path';

// Upload to Cloudinary and return result
export const uploadImageToCloudinary = async (filePath) => {
  if (!filePath || !fs.existsSync(filePath)) {
    throw new Error('File not found at ' + filePath);
  }

  const absolutePath = path.resolve(filePath);

  try {
    console.log('Uploading to Cloudinary:', absolutePath);

    const result = await cloudinary.uploader.upload(absolutePath, {
      folder: 'Mentora/Avatars',
      resource_type: 'auto',
      overwrite: false,
    });

    fs.unlinkSync(filePath); // Delete after upload
    console.log("file uploaded on cloudinary:",result.url)
    return result;
  } catch (error) {
    console.error('Error during upload to Cloudinary:', error);
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }

    throw new Error('Cloudinary upload failed: ' + error.message);
  }
};
