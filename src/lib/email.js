import nodemailer from "nodemailer";

export async function sendEmail({
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
}) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: `"WebMash Labs Inquiries" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_TO,
    replyTo: email,
    subject: `New Project Inquiry: ${projectType} — from ${name}`,
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #F8F8F6; border-radius: 12px; color: #0A0A0A;">
        <h2 style="color: #2563EB; margin-bottom: 24px;">New Project Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || "N/A"}</p>
        <p><strong>Phone:</strong> ${phone || "N/A"}</p>
        <p><strong>Project Type:</strong> ${projectType}</p>
        <p><strong>Budget Range:</strong> ${budget || "N/A"}</p>
        <p><strong>Timeline:</strong> ${timeline || "N/A"}</p>
        <p><strong>Referral Source:</strong> ${referralSource || "N/A"}</p>
        <p><strong>Newsletter Opt-In:</strong> ${newsletter ? "Yes" : "No"}</p>
        <hr style="border: none; border-top: 1px solid #E5E2DC; margin: 20px 0;" />
        <p><strong>Project Details:</strong></p>
        <p style="background: #FFFFFF; padding: 16px; border-radius: 8px; border: 1px solid #E5E2DC; white-space: pre-wrap;">${details}</p>
      </div>
    `,
  });
}