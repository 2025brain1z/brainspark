import { NextRequest } from "next/server";
import { ContactEmailTemplate } from "@/components/email-template";
import { Resend } from "resend";

/**
 * Initialize Resend email service with API key
 */
const resend = new Resend(process.env.RESEND_API_KEY);

/**
 * POST handler for the contact form submissions
 * Processes contact form data and sends email notifications using Resend
 * @param request - Next.js request object containing form data
 * @returns JSON response indicating success or failure of email sending
 */
export async function POST(request: NextRequest) {
  // Extract form data from request body
  const body = await request.json();
  const { name, email, message } = body;

  // Validate required form fields
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
    // Send email using Resend API
    // @ts-ignore - Temporary ignore for type checking issues with Resend
    const data = await resend.emails.send({
      from: "BS Support <onboarding@resend.dev>", // Sender email address
      to: [
        process.env.PERSONAL_EMAIL as string,
        "afriyie.donkor@acity.edu.gh",
        "kumahevans25@gmail.com",
        "rene.alordeh-heymann@acity.edu.gh"
      ],
      subject: "Message from BrainSpark",
      react: ContactEmailTemplate({ name, email, message }), // Use React email template
    });

    // Return success response
    return Response.json({ success: true, data });
  } catch (error) {
    // Log error for debugging and return user-friendly error message
    console.error("Email sending error:", error);
    return Response.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}
