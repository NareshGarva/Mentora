// uploadToCloudinaryMiddleware.js
import { uploadImageToCloudinary } from '../utils/uploadeToCloudinary.Util.js';

const uploadToCloudinaryMiddleware = async (req, res, next) => {
  try {
    // Upload main image
    if (req.files?.avatar) {
      const result = await uploadImageToCloudinary(req.files.avatar[0].path);
      req.body.avatar = result.secure_url;
    }

    // // Upload casual images
    // req.body.casualImages = [];
    // if (req.files?.casualImages) {
    //   for (const file of req.files.casualImages) {
    //     const result = await uploadImageToCloudinary(file.path);
    //     req.body.casualImages.push(result.secure_url);
    //   }
    // }

    next();
  } catch (error) {
    console.error("Cloudinary upload failed:", error);
    return res.status(500).json({ success: false, message: 'Cloudinary upload failed' });
  }
};

export default uploadToCloudinaryMiddleware;
