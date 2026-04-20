import nodemailer from "nodemailer";

export async function sendQuoteEmail(data) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // ✅ Cloudinary links ko Nodemailer attachments mein convert karein
  const attachments = data.fileUrls?.map((file) => ({
    filename: file.name,
    path: file.url, // Nodemailer khud URL se file fetch karke attach kar dega
  })) || [];

  await transporter.sendMail({
    from: `"Quote Form" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_TO,
    replyTo: data.email,
    subject: `New Quote from ${data.name}`,
    attachments: attachments, // 🔥 Ye files ko email ke sath attach kar dega
    html: `
      <div style="font-family:sans-serif; padding: 20px; border: 1px solid #eee; border-radius: 8px; color: #333;">
        <h2 style="color: #0e2c1c;">New Quote Request</h2>
        <hr style="border: 0; border-top: 1px solid #eee;" />
        
        <p><b>Name:</b> ${data.name}</p>
        <p><b>Email:</b> ${data.email}</p>
        <p><b>Service:</b> ${data.service}</p>
        <p><b>Budget:</b> ${data.budget}</p>
        <p><b>Timeline:</b> ${data.timeline}</p>
        <p><b>Message:</b> ${data.message}</p>

        <div style="margin-top: 20px; padding: 10px; background: #f9f9f9; border-radius: 5px;">
           <p style="margin: 0; color: #555;">📎 <b>Check the attachments section of this email to download files.</b></p>
        </div>
        
        <div style="margin-top: 30px; font-size: 12px; color: #777;">
          Sent from ZS Digitizing Quote System
        </div>
      </div>
    `,
  });
}