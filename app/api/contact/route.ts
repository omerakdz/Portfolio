import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Alle velden zijn verplicht" },
        { status: 400 },
      );
    }

    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ["omerakdeniz1208@gmail.com"],
      subject: `Nieuw bericht van ${name}`,
      html: `
        <h2>Nieuw contactformulier bericht</h2>
        <p><strong>Van:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Bericht:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
      replyTo: email,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Er ging iets mis bij het versturen van de email" },
        { status: 500 },
      );
    }

    return NextResponse.json(
      { message: "Bericht succesvol verzonden!" },
      { status: 200 },
    );
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json({ error: "Er ging iets mis" }, { status: 500 });
  }
}
