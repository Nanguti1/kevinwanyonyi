import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.MAIL_USER,
      to: "g.nanguti@gmail.com",
      subject: `Message from ${name}, submitted on your website`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `<p><b>Name:</b> ${name}</p><p><b>Email:</b> ${email}</p><p><b>Message:</b><br/>${message.replace(
        /\n/g,
        "<br/>"
      )}</p>`,
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    // Log the full error for debugging
    console.error("Email send error:", error);

    // Return a more specific error message if available
    return NextResponse.json(
      { error: error?.message || "Failed to send email." },
      { status: 500 }
    );
  }
}
