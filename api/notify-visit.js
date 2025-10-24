/**
 * Vercel Serverless Function to send email notifications on app visits
 *
 * ⚠️ WARNING: This will send an email for EVERY page load/refresh!
 * This can result in hundreds or thousands of emails per day.
 *
 * To use this function:
 * 1. Sign up for a free email service like Resend (https://resend.com)
 * 2. Get your API key
 * 3. Add to Vercel Environment Variables: RESEND_API_KEY
 * 4. Uncomment the code below
 */

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    const {
      timestamp = new Date().toISOString(),
      userAgent = 'Unknown',
      referrer = 'Direct',
      ip = 'Unknown'
    } = req.body || {};

    // Get client info
    const clientIp = req.headers['x-forwarded-for'] || req.headers['x-real-ip'] || ip;
    const clientUA = req.headers['user-agent'] || userAgent;

    // Format email content
    const emailSubject = `🚀 New Visit to LLM Directory`;
    const emailBody = `
      <h2>New Visit Detected!</h2>
      <p><strong>Time:</strong> ${timestamp}</p>
      <p><strong>IP Address:</strong> ${clientIp}</p>
      <p><strong>User Agent:</strong> ${clientUA}</p>
      <p><strong>Referrer:</strong> ${referrer}</p>
      <hr>
      <p><em>This notification was sent automatically from your LLM Directory app.</em></p>
    `;

    // TODO: Configure your email service
    // Example with Resend (uncomment when configured):
    /*
    const RESEND_API_KEY = process.env.RESEND_API_KEY;

    if (!RESEND_API_KEY) {
      return res.status(500).json({
        error: 'Email service not configured',
        message: 'Please add RESEND_API_KEY to environment variables'
      });
    }

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: 'LLM Directory <onboarding@resend.dev>',
        to: ['rishijajee@gmail.com'],
        subject: emailSubject,
        html: emailBody
      })
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Failed to send email');
    }
    */

    // For now, just log the visit
    console.log('Visit tracked:', {
      timestamp,
      ip: clientIp,
      userAgent: clientUA,
      referrer
    });

    return res.status(200).json({
      success: true,
      message: 'Visit logged',
      note: 'Email service not yet configured. See api/notify-visit.js to set up.'
    });

  } catch (error) {
    console.error('Error in notify-visit:', error);
    return res.status(500).json({
      error: 'Internal server error',
      message: error.message
    });
  }
}
