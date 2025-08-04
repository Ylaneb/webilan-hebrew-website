import { Resend } from 'resend';

let resend: Resend | null = null;

function getResend() {
  if (!resend && process.env.RESEND_API_KEY) {
    resend = new Resend(process.env.RESEND_API_KEY);
  }
  return resend;
}

export interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  websiteDescription: string;
}

export async function sendContactEmail(formData: ContactFormData) {
  try {
    const resendInstance = getResend();
    if (!resendInstance) {
      console.log('Resend API key not configured, skipping email send');
      return { success: false, message: 'Email service not configured' };
    }

    const { error } = await resendInstance.emails.send({
      from: 'Webilan Contact Form <noreply@01webilan.com>',
      to: ['info@01webilan.com'],
      subject: 'New Contact Form Submission - Webilan',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #1e40af; border-bottom: 2px solid #1e40af; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #334155; margin-top: 0;">Contact Information</h3>
            <p><strong>Name:</strong> ${formData.name}</p>
            <p><strong>Email:</strong> <a href="mailto:${formData.email}" style="color: #1e40af;">${formData.email}</a></p>
            <p><strong>Phone:</strong> <a href="tel:${formData.phone}" style="color: #1e40af;">${formData.phone}</a></p>
          </div>
          
          <div style="background-color: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #334155; margin-top: 0;">Website Description</h3>
            <p style="line-height: 1.6;">${formData.websiteDescription}</p>
          </div>
          
          <div style="background-color: #fef3c7; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0; color: #92400e;">
              <strong>Submitted:</strong> ${new Date().toLocaleString('he-IL', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
              })}
            </p>
          </div>
          
          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0;">
            <p style="color: #64748b; font-size: 14px;">
              This email was sent from the Webilan contact form at 01webilan.com
            </p>
          </div>
        </div>
      `,
      replyTo: formData.email,
    });

    if (error) {
      console.error('Error sending email:', error);
      return { success: false, message: 'Failed to send email' };
    }

    return { success: true, message: 'Email sent successfully!' };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, message: 'Failed to send email' };
  }
} 