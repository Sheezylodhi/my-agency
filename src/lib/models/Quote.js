import mongoose from "mongoose";

const QuoteSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    service: String,
    budget: String,
    timeline: String,
    message: String,
    fileUrls: [
  {
    url: String,
    name: String
  }
]
  },
  { timestamps: true }
);

export default mongoose.models.Quote ||
  mongoose.model("Quote", QuoteSchema);