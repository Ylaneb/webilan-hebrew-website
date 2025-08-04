import { NextRequest, NextResponse } from 'next/server';
import { sendContactEmail } from '@/lib/emailService';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json();
    
    // Option 1: Send to webhook (Zapier, Make.com, etc.)
    const webhookUrl = process.env.CONTACT_WEBHOOK_URL;
    if (webhookUrl) {
      const webhookResponse = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString(),
          source: 'webilan-website'
        }),
      });

      if (webhookResponse.ok) {
        return NextResponse.json({ 
          success: true, 
          message: 'Form submitted successfully!' 
        });
      }
    }

    // Option 2: Send email using Resend
    const emailResult = await sendContactEmail(formData);
    if (emailResult.success) {
      return NextResponse.json({ 
        success: true, 
        message: 'Email sent successfully!' 
      });
    }

    // Option 3: Log to console (for development)
    console.log('Contact Form Submission:', {
      ...formData,
      timestamp: new Date().toISOString(),
    });

    // Option 4: Save to database (if you have one)
    // const dbResult = await saveToDatabase(formData);

    return NextResponse.json({ 
      success: true, 
      message: 'Form submitted successfully!' 
    });

  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to process form submission' 
      },
      { status: 500 }
    );
  }
} 