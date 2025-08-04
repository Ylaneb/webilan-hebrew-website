export interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  websiteDescription: string;
}

// Option 1: Send to a webhook URL (e.g., Zapier, Make.com, or your own API)
export async function sendToWebhook(formData: ContactFormData) {
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...formData,
        timestamp: new Date().toISOString(),
        source: 'website-contact-form'
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to send form data');
    }

    return { success: true, message: 'Form submitted successfully!' };
  } catch (error) {
    console.error('Error sending form:', error);
    return { success: false, message: 'Failed to send form. Please try again.' };
  }
}

// Option 2: Send to email service (e.g., EmailJS, SendGrid)
export async function sendToEmailService(formData: ContactFormData) {
  try {
    // Example using EmailJS (you'll need to set up EmailJS)
    const emailData = {
      to_name: 'Webilan Team',
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      message: formData.websiteDescription,
      reply_to: formData.email,
    };

    // You would replace this with your actual email service call
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailData),
    });

    if (!response.ok) {
      throw new Error('Failed to send email');
    }

    return { success: true, message: 'Email sent successfully!' };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, message: 'Failed to send email. Please try again.' };
  }
}

// Option 3: Send to Google Sheets (using Google Apps Script)
export async function sendToGoogleSheets(formData: ContactFormData) {
  try {
    // Replace with your Google Apps Script web app URL
    const scriptUrl = 'YOUR_GOOGLE_APPS_SCRIPT_URL';
    
    const response = await fetch(scriptUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        description: formData.websiteDescription,
        timestamp: new Date().toISOString(),
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to send to Google Sheets');
    }

    return { success: true, message: 'Data saved successfully!' };
  } catch (error) {
    console.error('Error sending to Google Sheets:', error);
    return { success: false, message: 'Failed to save data. Please try again.' };
  }
}

// Option 4: Send to CRM (e.g., HubSpot, Salesforce)
export async function sendToCRM(formData: ContactFormData) {
  try {
    // Example for HubSpot
    const hubspotData = {
      properties: {
        firstname: formData.name.split(' ')[0],
        lastname: formData.name.split(' ').slice(1).join(' ') || '',
        email: formData.email,
        phone: formData.phone,
        website_description: formData.websiteDescription,
      },
    };

    const response = await fetch('/api/hubspot', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(hubspotData),
    });

    if (!response.ok) {
      throw new Error('Failed to send to CRM');
    }

    return { success: true, message: 'Contact created in CRM!' };
  } catch (error) {
    console.error('Error sending to CRM:', error);
    return { success: false, message: 'Failed to create contact. Please try again.' };
  }
}

// Default function that tries multiple methods
export async function sendContactForm(formData: ContactFormData) {
  // Try webhook first, then fallback to email
  const webhookResult = await sendToWebhook(formData);
  
  if (webhookResult.success) {
    return webhookResult;
  }

  // Fallback to email service
  return await sendToEmailService(formData);
} 