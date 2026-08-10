import connectDB from "@/lib/mongodb";
import Contact from "@/lib/models/Contact";
import { sendEmail } from "@/lib/email";

export async function POST(req) {
  try {
    await connectDB();

    const body = await req.json();

    let {
      name,
      email,
      company,
      phone,
      projectType,
      budget,
      timeline,
      details,
      referralSource,
      newsletter,
    } = body;

    // Sanitize and trim string fields
    name = typeof name === "string" ? name.trim() : "";
    email = typeof email === "string" ? email.trim().toLowerCase() : "";
    company = typeof company === "string" ? company.trim() : "";
    phone = typeof phone === "string" ? phone.trim() : "";
    projectType = typeof projectType === "string" ? projectType.trim() : "";
    budget = typeof budget === "string" ? budget.trim() : "";
    timeline = typeof timeline === "string" ? timeline.trim() : "";
    details = typeof details === "string" ? details.trim() : "";
    referralSource = typeof referralSource === "string" ? referralSource.trim() : "";
    const isNewsletter = Boolean(newsletter);

    // Validate required fields matching the schema requirements
    if (!name || !email || !details || !projectType) {
      return Response.json(
        { success: false, message: "Please fill in all required fields (Name, Email, Project Type, and Details)." },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return Response.json(
        { success: false, message: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // Save full document to MongoDB
    const contact = await Contact.create({
      name,
      email,
      company,
      phone,
      projectType,
      budget,
      timeline,
      details,
      referralSource,
      newsletter: isNewsletter,
      status: "new",
    });

    // Send Email (passing all necessary project details to the helper)
    try {
      await sendEmail({
        name,
        email,
        company,
        phone,
        projectType,
        budget,
        timeline,
        details,
        referralSource,
        newsletter: isNewsletter,
      });
    } catch (emailError) {
      console.error("Nodemailer error (non-fatal):", emailError);
    }

    return Response.json({
      success: true,
      message: "Your project inquiry has been received successfully.",
      contact,
    });

  } catch (error) {
    console.error("Contact API Error:", error);
    return Response.json(
      { success: false, message: error.message || "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}