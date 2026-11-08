import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const consultationSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  message: z.string().trim().max(2000).optional(),
  pagePath: z.string().trim().max(200).optional(),
});

const NOTIFY_EMAIL = "info@freshsteptherapy.com";
// onboarding@resend.dev delivers only to the Resend account owner's email.
// Once freshsteptherapy.com is verified in Resend, switch this to an address on that domain.
const FROM_ADDRESS = "Fresh Step Therapy <onboarding@resend.dev>";

function escapeHtml(s: string) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

export const submitConsultation = createServerFn({ method: "POST" })
  .validator((data) => consultationSchema.parse(data))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    const { data: row, error: insertError } = await supabaseAdmin
      .from("consultation_submissions")
      .insert({ name: data.name, email: data.email, message: data.message || null, page_path: data.pagePath || null })
      .select("id")
      .single();

    if (insertError) {
      console.error("Failed to store consultation submission:", insertError.message);
      throw new Error("Your request could not be sent. Please try again.");
    }

    // Stored copy is safe; the owner email is best-effort after that.
    const lovableKey = process.env["LOVABLE_API_KEY"];
    const resendKey = process.env["RESEND_API_KEY"];
    if (!lovableKey || !resendKey) {
      console.error("Email credentials missing; submission stored without notification", row.id);
      return { ok: true };
    }

    const response = await fetch("https://connector-gateway.lovable.dev/resend/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${lovableKey}`,
        "X-Connection-Api-Key": resendKey,
      },
      body: JSON.stringify({
        from: FROM_ADDRESS,
        to: [NOTIFY_EMAIL],
        reply_to: data.email,
        subject: `New consultation request from ${data.name}`,
        html: `
          <h2>New consultation request</h2>
          <p><strong>Name:</strong> ${escapeHtml(data.name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
          ${data.message ? `<p><strong>Message:</strong></p><p>${escapeHtml(data.message).replace(/\n/g, "<br>")}</p>` : ""}
          <p style="color:#888;font-size:12px">Submitted ${new Date().toISOString()} via ${escapeHtml(data.pagePath || "/")} · Reference ${row.id}</p>
        `,
      }),
    });

    if (!response.ok) {
      const errorBody = await response.text();
      console.error(`Resend send failed [${response.status}]: ${errorBody}`);
    }

    return { ok: true };
  });
