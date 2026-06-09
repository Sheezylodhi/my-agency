import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const { email } = await req.json();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // Yeh Gmail ka "App Password" hona chahiye
      },
    });

    await transporter.sendMail({
      from: '"WebMashLabs" <no-reply@webmashlabs.com>',
      to: process.env.EMAIL_TO,
      subject: 'New Subscriber Alert! 🚀',
      text: `New subscriber email: ${email}`,
      html: `<h1>New Lead Received</h1><p>The following email has subscribed: <b>${email}</b></p>`,
    });

    return NextResponse.json({ message: 'Success' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to send' }, { status: 500 });
  }
}