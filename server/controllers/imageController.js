import axios from "axios";
import fs from "fs";
import FormData from "form-data";

import userModel from "../models/userModel.js";

const removeBgImage = async (req, res) => {
  try {
    const { clerkId } = req.body;
    const user = await userModel.findOne({ clerkId:clerkId }).lean();
    if (!user) {
      return res.json({ success: false, message: "user not found" });
    }
    if (user.creditBalance == 0) {
      return res.json({
        success: false,
        message: "no credit balance ",
        creditBalance: user.creditBalance,
      });
    }

    const imagePath = req.file.path;
    const imageFile = fs.createReadStream(imagePath);
    const formData = new FormData();
    formData.append("image_file", imageFile);
    formData.append("size", "auto");
    const response = await axios({
      method: "post",
      url: "https://api.remove.bg/v1.0/removebg",
      data: formData,
      responseType: "arraybuffer",
      headers: {
        ...formData.getHeaders(),
        "X-Api-Key": process.env.BAGROUND_REMOVAL_KEY,
      },
    });
    const base64Image = Buffer.from(response.data).toString('base64');

    // Cleanup uploaded file
    fs.unlinkSync(imagePath);

    await userModel.findByIdAndUpdate(user._id,{creditBalance:user.creditBalance-1})

    res.json({
      success: true,
      creditBalance:user.creditBalance-1,
      resultImage: `data:image/png;base64,${base64Image}`,
      message:"background-removed"
    });
  
  } catch (error) {
    console.error(
      "Error removing background:",
      error.response?.data || error.message
    );
    res.status(500).json({ error: "Failed to remove background" });
  }
};

export { removeBgImage };
