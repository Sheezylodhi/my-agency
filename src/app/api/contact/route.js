import connectDB  from "@/lib/mongodb";
import Contact from "@/lib/models/Contact";
import { sendEmail } from "@/lib/email";

export async function POST(req) {
  try {
    await connectDB();

    const body = await req.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return Response.json(
        { success: false, message: "All fields are required" },
        { status: 400 }
      );
    }

    // Save to MongoDB
    const contact = await Contact.create({
      name,
      email,
      message,
    });

    // Send Email
    await sendEmail({ name, email, message });

    return Response.json({
      success: true,
      message: "Message sent successfully",
      contact,
    });
  } catch (error) {
    return Response.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}