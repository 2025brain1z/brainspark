import { NextRequest } from "next/server";
import { ContactEmailTemplate } from "@/components/email-template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { name, email, message } = body;

  if (!name) {
    return Response.json({ error: "Missing name" }, { status: 400 });
  }

  if (!email) {
    return Response.json({ error: "Missing email" }, { status: 400 });
  }

  if (!message) {
    return Response.json({ error: "Missing message" }, { status: 400 });
  }

  try {
    // @ts-ignore
    const data = await resend.emails.send({
      from: "BS Support <onboarding@resend.dev>",
      to: [
        process.env.PERSONAL_EMAIL as string,
        "afriyie.donkor@acity.edu.gh",
        "kumahevans25@gmail.com",
        "rene.alordeh-heymann@acity.edu.gh"
      ],
      subject: "Message from BrainSpark",
      react: ContactEmailTemplate({ name, email, message }),
    });

    return Response.json({ success: true, data });
  } catch (error) {
    console.error("Email sending error:", error); // Log the full error for debugging
    return Response.json({ error: "Failed to send message. Please try again later." }, { status: 500 });
  }
}
