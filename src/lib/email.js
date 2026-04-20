import nodemailer from "nodemailer";

export async function sendEmail({ name, email, message }) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER, // sender email
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: `"Contact Form" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_TO, // 👈 yahan receiver email
    replyTo: email, // 👈 user ka email reply ke liye
    subject: `New Message from ${name}`,
    html: `
      <h2>New Contact Message</h2>
      <p><b>Name:</b> ${name}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Message:</b> ${message}</p>
    `,
  });
}