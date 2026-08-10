import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    trim: true,
    lowercase: true,
  },
  company: {
    type: String,
    trim: true,
    default: "",
  },
  phone: {
    type: String,
    trim: true,
    default: "",
  },
  projectType: {
    type: String,
    required: [true, "Project type is required"],
    trim: true,
  },
  budget: {
    type: String,
    trim: true,
    default: "",
  },
  timeline: {
    type: String,
    trim: true,
    default: "",
  },
  details: {
    type: String,
    required: [true, "Project details are required"],
    trim: true,
  },
  referralSource: {
    type: String,
    trim: true,
    default: "",
  },
  newsletter: {
    type: Boolean,
    default: false,
  },
  status: {
    type: String,
    default: "new",
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Contact = mongoose.models.Contact || mongoose.model("Contact", ContactSchema);

export default Contact;