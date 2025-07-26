import express from 'express'
import ApiError from '../utils/ApiError.js';
import MentorUser from '../models/user.mentor.model.js'
import SocialLinks from "../models/socialLink.model.js";
import Education from "../models/education.model.js";
import Rate from '../models/rate.model.js'
import Expertise from '../models/expertise.model.js'
import WorkExperience from '../models/workExperience.model.js'
import Availability from '../models/availability.model.js'





const updateUserProfile = async (req, res) => {
  const username = req.user?.username;
  // const data = req.body.data;
  const avatar = req.body.avatar;
  if (!username) {
    return res.status(400).json({ message: "Username missing in token" });
  }

  // const {
  //   name,
  //   number,
  //   bio,
  //   gender,
  //   dob,
  //   location
  // } = data;

  try {
    const updatedUser = await MentorUser.findOneAndUpdate(
      { username },
      {
        ...(avatar !== undefined && { avatar }),
        // ...(name && { name }),
        // ...(number && { number }),
        // ...(bio && { bio }),
        // ...(gender && { gender }),
        // ...(dob && { dob }),
        // ...(location && { location }),
      },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({
      message: "Profile updated successfully",
      user: updatedUser,
    });
  } catch (error) {
    console.error("Error updating profile:", error);
    throw new ApiError(500, "Internal Server Error");
  }
};






const updateSocialLink = async (req, res) => {
  const username = req.user?.username;
  const data = req.body.socialLinks; 
  if (!username) {
    return res.status(400).json({ message: "Username is missing in token" });
  }

  if (!Array.isArray(data) || data.length === 0) {
    return res.status(400).json({ message: "No social link data provided" });
  }

  try {
    const user = await MentorUser.findOne({ username });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Insert all links
    const insertedLinks = await SocialLinks.insertMany(data);

    // Add their IDs to the user
    user.socialLink.push(...insertedLinks.map((link) => link._id));
    await user.save();

    return res.status(200).json({
      message: "Social links added successfully",
      socialLinks: insertedLinks,
    });
  } catch (error) {
    console.error("Error updating social links:", error);
    throw new ApiError(500, "Internal Server Error");
  }
};



const updateEducation = async (req, res) => {
  const username = req.user?.username;
  const data = req.body.educations; 
  if (!username) {
    return res.status(400).json({ message: "Username is missing in token" });
  }

  if (!Array.isArray(data) || data.length === 0) {
    return res.status(400).json({ message: "No education data provided" });
  }

  try {
    const user = await MentorUser.findOne({ username });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Insert new education documents
    const insertedEducation = await Education.insertMany(data);

    // Push new education _ids into user's education array
    user.education.push(...insertedEducation.map((edu) => edu._id));
    await user.save();

    return res.status(200).json({
      message: "Education added successfully",
      education: insertedEducation,
    });
  } catch (error) {
    console.error("Error updating education:", error);
    throw new ApiError(500, "Internal Server Error");
  }
};



const updateRate = async (req, res) => {
  const username = req.user?.username;
  const rate = req.body?.rate;

  if (!username) {
    return res.status(400).json({ message: "Username is missing in token" });
  }

  if (!rate || typeof rate.perHour !== 'number') {
    return res.status(400).json({ message: "perHour rate is required and must be a number" });
  }

  try {
    const user = await MentorUser.findOne({ username }).populate('rate');
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    let newRate;

    if (user.rate) {
      // If a rate already exists, update it
      user.rate.perHour = rate.perHour;
      user.rate.perMinute = rate.perMinute;
      user.rate.per15Minutes = rate.per15Minutes;
      user.rate.per30Minutes = rate.per30Minutes;
      user.rate.currency = rate.currency || 'INR';
      await user.rate.save();
      newRate = user.rate;
    } else {
      // Create a new rate and assign it
      newRate = await new Rate({
        perHour: rate.perHour,
        perMinute: rate.perMinute,
        per15Minutes: rate.per15Minutes,
        per30Minutes: rate.per30Minutes,
        currency: rate.currency || 'INR',
      }).save();

      user.rate = newRate._id;
      await user.save();
    }

    return res.status(200).json({
      message: "Rate updated successfully",
      rate: newRate,
    });

  } catch (error) {
    console.error("Error updating rate:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};





const updateExpertise = async (req, res) => {
  const username = req.user?.username;
  const data = req.body.expertises;

  if (!username) {
    return res.status(400).json({ message: "Username is missing in token" });
  }

  if (!Array.isArray(data) || data.length === 0) {
    return res.status(400).json({ message: "No expertise data provided" });
  }

  try {
    const user = await MentorUser.findOne({ username });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Insert all expertise entries
    const insertedExpertise = await Expertise.insertMany(data);

    // Add their IDs to the user's expertise list
    user.expertise.push(...insertedExpertise.map((item) => item._id));
    await user.save();

    return res.status(200).json({
      message: "Expertise added successfully",
      expertise: insertedExpertise,
    });
  } catch (error) {
    console.error("Error updating expertise:", error);
    throw new ApiError(500, "Internal Server Error");
  }
};




const updateWorkExperience = async (req, res) => {
  const username = req.user?.username;
  const data = req.body.workExperiences; 
  if (!username) {
    return res.status(400).json({ message: "Username is missing in token" });
  }

  if (!Array.isArray(data) || data.length === 0) {
    return res.status(400).json({ message: "No work experience data provided" });
  }

  try {
    const user = await MentorUser.findOne({ username });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Insert all work experience records
    const insertedWork = await WorkExperience.insertMany(data);

    // Add their IDs to user's profile
    user.workExperience = user.workExperience || [];
    user.workExperience.push(...insertedWork.map((exp) => exp._id));
    await user.save();

    return res.status(200).json({
      message: "Work experience added successfully",
      workExperience: insertedWork,
    });
  } catch (error) {
    console.error("Error updating work experience:", error);
    throw new ApiError(500, "Internal Server Error");
  }
};




const updateAvailability = async (req, res) => {
  const username = req.user?.username;
  const data = req.body.availability; 

  if (!username) {
    return res.status(400).json({ message: "Username is missing in token" });
  }

  const expectedDays = [
    "monday", "tuesday", "wednesday", "thursday",
    "friday", "saturday", "sunday"
  ];

  // Basic validation
  const isValid = expectedDays.every(day =>
    data.hasOwnProperty(day) &&
    typeof data[day].startTime === "string" &&
    typeof data[day].endTime === "string" &&
    typeof data[day].isAvailable === "boolean"
  );

  if (!isValid) {
    return res.status(400).json({ message: "Invalid availability data format" });
  }

  try {
    const user = await MentorUser.findOne({ username });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Save new availability document
    const newAvailability = await new Availability(data).save();

    // Add the new availability ID to user's availability array
    user.availability.push(newAvailability._id);
    await user.save();

    return res.status(200).json({
      message: "Availability updated successfully",
      availability: newAvailability,
    });
  } catch (error) {
    console.error("Error updating availability:", error);
    throw new ApiError(500, "Internal Server Error");
  }
};



export {updateUserProfile, updateAvailability,
     updateWorkExperience, updateExpertise, updateRate, updateEducation, updateSocialLink}