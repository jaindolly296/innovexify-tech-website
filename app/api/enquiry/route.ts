import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface EnquiryRequest {
  name: string;
  company: string;
  email: string;
  whatsapp: string;
  service: string;
  budget?: string;
  message: string;
}

function escapeHtml(value: string = ""): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Partial<EnquiryRequest>;

    const name = body.name?.trim() || "";
    const company = body.company?.trim() || "";
    const email = body.email?.trim() || "";
    const whatsapp = body.whatsapp?.trim() || "";
    const service = body.service?.trim() || "";
    const budget = body.budget?.trim() || "";
    const message = body.message?.trim() || "";

    if (!name || !company || !email || !whatsapp || !service || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "Please fill all required fields.",
        },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return NextResponse.json(
        {
          success: false,
          message: "Please enter a valid email address.",
        },
        { status: 400 }
      );
    }

    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = process.env.SMTP_PORT;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const enquiryEmail = process.env.ENQUIRY_EMAIL;

    if (!smtpHost || !smtpPort || !smtpUser || !smtpPass || !enquiryEmail) {
      console.error("SMTP configuration is incomplete.");
      return NextResponse.json(
        {
          success: false,
          message: "Email service is not configured correctly.",
        },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: Number(smtpPort),
      secure: Number(smtpPort) === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const enquiryId = `INX-${Date.now().toString().slice(-8)}`;
    const receivedAt = new Date();

    const receivedDate = receivedAt.toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });

    const receivedTime = receivedAt.toLocaleTimeString("en-IN", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });

    const safeName = escapeHtml(name);
    const safeCompany = escapeHtml(company);
    const safeEmail = escapeHtml(email);
    const safeWhatsapp = escapeHtml(whatsapp);
    const safeService = escapeHtml(service);
    const safeBudget = escapeHtml(budget || "Not provided");
    const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");
    const safeEnquiryId = escapeHtml(enquiryId);

    const subject = `New Enquiry | ${service} | ${company}`;

    await transporter.sendMail({
      from: `"Innovexify Website" <${smtpUser}>`,
      to: enquiryEmail,
      replyTo: email,
      subject,

      text: `
NEW INNOVEXIFY PROJECT ENQUIRY
================================

Service: ${service}

CLIENT
------
Name: ${name}
Company: ${company}
Email: ${email}
Phone / WhatsApp: ${whatsapp}
Budget: ${budget || "Not provided"}

PROJECT DETAILS
---------------
${message}

ENQUIRY INFORMATION
-------------------
Enquiry ID: ${enquiryId}
Received: ${receivedDate}, ${receivedTime}

Reply directly to this email to contact the client.
      `.trim(),

      html: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Innovexify Enquiry</title>
  <style>
    @media only screen and (max-width: 600px) {
      .email-wrap {
        padding: 12px !important;
      }

      .email-card {
        width: 100% !important;
        border-radius: 12px !important;
      }

      .email-header {
        padding: 22px 18px !important;
      }

      .email-content {
        padding: 22px 18px !important;
      }

      .header-table,
      .header-table tbody,
      .header-table tr,
      .header-table td {
        display: block !important;
        width: 100% !important;
      }

      .header-badge {
        display: inline-block !important;
        margin-top: 14px !important;
      }

      .service-title {
        font-size: 18px !important;
        line-height: 25px !important;
      }

      .section-title {
        font-size: 15px !important;
      }

      .client-table td {
        display: block !important;
        width: 100% !important;
        box-sizing: border-box !important;
        border-bottom: 0 !important;
      }

      .client-table tr {
        display: block !important;
        padding: 8px 0 !important;
        border-bottom: 1px solid #edf0f4 !important;
      }

      .client-table td:first-child {
        padding: 5px 0 2px !important;
      }

      .client-table td:last-child {
        padding: 2px 0 6px !important;
        overflow-wrap: anywhere !important;
        word-break: break-word !important;
      }

      .project-box {
        padding: 15px !important;
        font-size: 13px !important;
        line-height: 21px !important;
        overflow-wrap: anywhere !important;
      }

      .reply-button {
        display: block !important;
        width: 100% !important;
        box-sizing: border-box !important;
        text-align: center !important;
      }

      .meta-table td {
        display: block !important;
        width: 100% !important;
        text-align: left !important;
      }

      .meta-table td:last-child {
        padding-top: 4px !important;
        text-align: left !important;
        overflow-wrap: anywhere !important;
      }

      .email-footer {
        padding: 18px !important;
      }
    }
  </style>
</head>

<body style="margin:0;padding:0;background:#f3f6fa;font-family:Arial,Helvetica,sans-serif;color:#172033;">

  <div class="email-wrap" style="width:100%;padding:36px 16px;box-sizing:border-box;background:#f3f6fa;">

    <div class="email-card" style="max-width:680px;margin:0 auto;background:#ffffff;border:1px solid #e3e8ef;border-radius:18px;overflow:hidden;box-shadow:0 8px 30px rgba(15,23,42,0.06);">

      <!-- HEADER -->
      <div class="email-header" style="background:#07172b;padding:28px 32px;">
        <table class="header-table" width="100%" cellpadding="0" cellspacing="0" border="0">
          <tr>
            <td>
              <div style="font-size:11px;font-weight:700;letter-spacing:2px;color:#60a5fa;text-transform:uppercase;">
                INNOVEXIFY
              </div>

              <div style="margin-top:7px;font-size:24px;line-height:32px;font-weight:700;color:#ffffff;">
                New Project Enquiry
              </div>

              <div style="margin-top:5px;font-size:13px;line-height:20px;color:#aebbd0;">
                Innovexify Tech IT Private Limited
              </div>
            </td>

            <td align="right" valign="top">
              <span class="header-badge" style="display:inline-block;background:#1d4ed8;color:#ffffff;padding:7px 11px;border-radius:999px;font-size:10px;font-weight:700;letter-spacing:1px;">
                NEW LEAD
              </span>
            </td>
          </tr>
        </table>
      </div>

      <!-- CONTENT -->
      <div class="email-content" style="padding:30px 32px;">

        <!-- SERVICE -->
        <div style="border:1px solid #bfdbfe;background:#eff6ff;border-radius:12px;padding:18px 20px;margin-bottom:26px;">
          <div style="font-size:10px;font-weight:700;letter-spacing:1.5px;color:#2563eb;text-transform:uppercase;">
            Service Requested
          </div>

          <div class="service-title" style="margin-top:7px;font-size:21px;line-height:29px;font-weight:700;color:#0b1f3a;">
            ${safeService}
          </div>
        </div>

        <!-- CLIENT -->
        <div class="section-title" style="font-size:16px;font-weight:700;color:#0b1f3a;margin-bottom:12px;">
          Client Information
        </div>

        <table class="client-table" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;margin-bottom:26px;">

          <tr>
            <td style="padding:11px 0;border-bottom:1px solid #edf0f4;width:38%;font-size:12px;color:#7b8798;">
              Full Name
            </td>
            <td style="padding:11px 0;border-bottom:1px solid #edf0f4;font-size:13px;font-weight:600;color:#172033;">
              ${safeName}
            </td>
          </tr>

          <tr>
            <td style="padding:11px 0;border-bottom:1px solid #edf0f4;font-size:12px;color:#7b8798;">
              Company
            </td>
            <td style="padding:11px 0;border-bottom:1px solid #edf0f4;font-size:13px;font-weight:600;color:#172033;">
              ${safeCompany}
            </td>
          </tr>

          <tr>
            <td style="padding:11px 0;border-bottom:1px solid #edf0f4;font-size:12px;color:#7b8798;">
              Business Email
            </td>
            <td style="padding:11px 0;border-bottom:1px solid #edf0f4;font-size:13px;color:#172033;">
              <a href="mailto:${safeEmail}" style="color:#2563eb;text-decoration:none;">
                ${safeEmail}
              </a>
            </td>
          </tr>

          <tr>
            <td style="padding:11px 0;border-bottom:1px solid #edf0f4;font-size:12px;color:#7b8798;">
              Phone / WhatsApp
            </td>
            <td style="padding:11px 0;border-bottom:1px solid #edf0f4;font-size:13px;color:#172033;">
              ${safeWhatsapp}
            </td>
          </tr>

          <tr>
            <td style="padding:11px 0;font-size:12px;color:#7b8798;">
              Estimated Budget
            </td>
            <td style="padding:11px 0;font-size:13px;font-weight:600;color:#172033;">
              ${safeBudget}
            </td>
          </tr>

        </table>

        <!-- PROJECT DETAILS -->
        <div style="font-size:16px;font-weight:700;color:#0b1f3a;margin-bottom:12px;">
          Project Details
        </div>

        <div class="project-box" style="background:#f8fafc;border:1px solid #e5eaf0;border-radius:12px;padding:18px 20px;font-size:13px;line-height:22px;color:#455266;">
          ${safeMessage}
        </div>

        <!-- REPLY CTA -->
        <div style="text-align:center;margin:28px 0 24px;">
          <a
            href="mailto:${safeEmail}?subject=Re: ${encodeURIComponent(subject)}"
            class="reply-button" style="display:inline-block;background:#2563eb;color:#ffffff;text-decoration:none;padding:12px 22px;border-radius:8px;font-size:13px;font-weight:700;"
          >
            Reply to Client →
          </a>
        </div>

        <!-- META -->
        <div style="border-top:1px solid #e5eaf0;padding-top:18px;">
          <table class="meta-table" width="100%" cellpadding="0" cellspacing="0" border="0">
            <tr>
              <td style="font-size:11px;color:#8994a5;">
                Enquiry ID
              </td>
              <td align="right" style="font-size:11px;font-weight:600;color:#4b5563;">
                ${safeEnquiryId}
              </td>
            </tr>

            <tr>
              <td style="padding-top:8px;font-size:11px;color:#8994a5;">
                Received
              </td>
              <td align="right" style="padding-top:8px;font-size:11px;color:#4b5563;">
                ${escapeHtml(receivedDate)} · ${escapeHtml(receivedTime)}
              </td>
            </tr>
          </table>
        </div>

      </div>

      <!-- FOOTER -->
      <div class="email-footer" style="background:#f8fafc;border-top:1px solid #e5eaf0;padding:20px 32px;text-align:center;">
        <div style="font-size:12px;font-weight:700;letter-spacing:1.5px;color:#0b1f3a;">
          INNOVEXIFY TECH IT PRIVATE LIMITED
        </div>

        <div style="margin-top:6px;font-size:11px;line-height:18px;color:#8a95a5;">
          Technology • AI • Data • Automation
        </div>

        <div style="margin-top:10px;font-size:10px;color:#a3adba;">
          This notification was generated from the Innovexify website enquiry form.
        </div>
      </div>

    </div>
  </div>

</body>
</html>
      `.trim(),
    });

    return NextResponse.json({
      success: true,
      emailSent: true,
      message:
        "Your enquiry has been received successfully. We will get back to you soon.",
    });
  } catch (error) {
    console.error("Enquiry submission error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong. Please try again.",
      },
      { status: 500 }
    );
  }
}

