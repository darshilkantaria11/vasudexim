import nodemailer from 'nodemailer';

export async function POST(req) {
  const { name, number, email, subject, message } = await req.json();

  if (!name || !number || !email || !subject || !message) {
    return new Response(JSON.stringify({ error: "All fields are required" }), { status: 400 });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const adminMail = {
      from: `"Vasudexim Inquiry" <${process.env.EMAIL_USER}>`,
      to: process.env.ADMIN_EMAIL,
      subject: `New Inquiry: ${subject}`,
      html: `
  <div style="font-family: Arial, sans-serif; padding: 20px; color: #333; background-color: #b2272d; border-radius: 8px;">
    <div style="background-color: #84cc16; padding: 20px; border-radius: 8px 8px 0 0; color: white;">
      <h2 style="margin: 0;">New Chemical Inquiry</h2>
    </div>
    <div style="padding: 20px; background-color: white; border-radius: 0 0 8px 8px; margin-top: 10px;">
      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #eee;">Name:</td>
          <td style="padding: 10px; border-bottom: 1px solid #eee;">${name}</td>
        </tr>
        <tr>
          <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #eee;">Contact Number:</td>
          <td style="padding: 10px; border-bottom: 1px solid #eee;">${number}</td>
        </tr>
        <tr>
          <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #eee;">Email:</td>
          <td style="padding: 10px; border-bottom: 1px solid #eee;">${email}</td>
        </tr>
        <tr>
          <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #eee;">Subject:</td>
          <td style="padding: 10px; border-bottom: 1px solid #eee;">${subject}</td>
        </tr>
        <tr>
          <td style="padding: 10px; font-weight: bold; vertical-align: top;">Message:</td>
          <td style="padding: 10px;">${message.replace(/\n/g, '<br>')}</td>
        </tr>
      </table>
      <p style="margin-top: 20px; font-size: 14px; color: #777;">
        This inquiry was submitted through the contact form on vasudexim.com
      </p>
    </div>
  </div>
      `
    };

    await transporter.sendMail(adminMail);

    return new Response(JSON.stringify({ success: true }), { status: 200 });

  } catch (err) {
    console.error("Email error:", err);
    return new Response(JSON.stringify({ error: "Failed to send inquiry" }), { status: 500 });
  }
}
