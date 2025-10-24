# 📧 Email Notification Setup Guide

## ⚠️ IMPORTANT WARNING

**This system sends an email for EVERY page load/refresh!**

If your site gets 100 visitors per day, you'll receive **100 emails**.
If it gets 1,000 visitors, you'll receive **1,000 emails**!

### Recommendations:
1. **Use Analytics Instead**: Google Analytics, Plausible, Vercel Analytics (free)
2. **Rate Limiting**: Modify to send hourly/daily summaries instead
3. **Session-based**: Only notify once per user session
4. **Disable for now**: Keep it off until you really need it

---

## 🚀 How to Set Up Email Notifications

### Option 1: Using Resend (Recommended - Free Tier)

#### Step 1: Sign up for Resend
1. Go to https://resend.com
2. Sign up for a free account
3. Verify your email
4. Get your API key from the dashboard

#### Step 2: Configure Environment Variable in Vercel
1. Go to your Vercel project dashboard
2. Click "Settings" → "Environment Variables"
3. Add new variable:
   - **Name**: `RESEND_API_KEY`
   - **Value**: Your Resend API key
   - **Environments**: Production, Preview, Development
4. Click "Save"

#### Step 3: Verify Domain (Optional for better deliverability)
1. In Resend dashboard, add your domain
2. Add DNS records they provide
3. Wait for verification
4. Update the `from` email in `api/notify-visit.js`

#### Step 4: Uncomment the Email Code
Edit `api/notify-visit.js`:

```javascript
// Find this section (around line 42) and UNCOMMENT it:
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
    from: 'LLM Directory <onboarding@resend.dev>',  // Or your verified domain
    to: ['rishijajee@gmail.com'],
    subject: emailSubject,
    html: emailBody
  })
});

const data = await response.json();

if (!response.ok) {
  throw new Error(data.message || 'Failed to send email');
}
```

#### Step 5: Deploy
```bash
git add .
git commit -m "Configure email notifications"
git push origin main
```

Vercel will redeploy with email notifications active!

---

### Option 2: Using SendGrid (Free Tier: 100 emails/day)

#### Step 1: Sign up for SendGrid
1. Go to https://sendgrid.com/pricing
2. Sign up for free account (100 emails/day)
3. Create an API key

#### Step 2: Add to Vercel Environment Variables
- **Name**: `SENDGRID_API_KEY`
- **Value**: Your SendGrid API key

#### Step 3: Install SendGrid Package
```bash
npm install @sendgrid/mail
```

#### Step 4: Update `api/notify-visit.js`
Replace the fetch code with:

```javascript
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const msg = {
  to: 'rishijajee@gmail.com',
  from: 'your-verified-email@yourdomain.com', // Must be verified in SendGrid
  subject: emailSubject,
  html: emailBody,
};

await sgMail.send(msg);
```

---

### Option 3: Using Mailgun (Free Tier: 5,000 emails/month)

Similar setup to SendGrid but using Mailgun's API.

---

## 🎚️ Better Alternatives (Recommended)

### 1. **Vercel Analytics** (Best Option)
- **Free**: Built into Vercel
- **Privacy-focused**: GDPR compliant
- **Real-time**: See visitors in real-time
- **No code needed**: Just enable in Vercel dashboard

**Setup:**
1. Go to Vercel project settings
2. Enable "Analytics"
3. Done! View stats in dashboard

### 2. **Google Analytics**
- **Free**: Unlimited
- **Comprehensive**: Full visitor insights
- **Industry standard**: Everyone uses it

**Setup:**
1. Create Google Analytics account
2. Get tracking ID
3. Add to your app (via React Helmet or Script tag)

### 3. **Plausible Analytics**
- **Privacy-first**: No cookies
- **Simple**: Clean interface
- **Lightweight**: Fast loading

---

## 🔧 Customization Options

### Send Daily Summary Instead
Edit `src/hooks/useVisitTracker.js`:

```javascript
// Only send once per day
const lastSent = localStorage.getItem('lastNotification');
const today = new Date().toDateString();

if (lastSent === today) {
  return; // Already sent today
}

// Send notification
await trackVisit();
localStorage.setItem('lastNotification', today);
```

### Send Only for New Sessions
```javascript
// Only send once per session
const sessionTracked = sessionStorage.getItem('visitTracked');

if (sessionTracked) {
  return; // Already tracked this session
}

await trackVisit();
sessionStorage.setItem('visitTracked', 'true');
```

### Disable for Development
```javascript
// In App.jsx
const isDevelopment = window.location.hostname === 'localhost';
useVisitTracker(!isDevelopment); // Only track in production
```

---

## 🎯 Current Setup

**Status**: ✅ Code ready, ⚠️ Email service NOT configured

**What happens now:**
- Visit tracking is active
- API endpoint logs visits to console
- **NO EMAILS SENT** (until you configure a service)

**To enable emails:**
1. Choose an email service (Resend recommended)
2. Add API key to Vercel env variables
3. Uncomment email code in `api/notify-visit.js`
4. Redeploy

**To disable completely:**
```javascript
// In App.jsx, change:
useVisitTracker(false); // Disabled
```

---

## 📊 What Information is Tracked

When a user visits:
- ✅ Timestamp
- ✅ IP Address
- ✅ User Agent (browser info)
- ✅ Referrer (where they came from)
- ✅ Screen size
- ✅ Language

This data is sent to your email when configured.

---

## 🔐 Privacy Considerations

**IMPORTANT**: If tracking users, you should:
1. Add a Privacy Policy
2. Cookie consent (if using cookies)
3. GDPR compliance (if EU visitors)
4. Inform users about tracking

---

## 💡 Pro Tips

1. **Use Vercel Analytics** - It's free and built-in
2. **Rate limit emails** - Don't overwhelm your inbox
3. **Session-based tracking** - More reasonable
4. **Analytics dashboard** - Better than emails
5. **Webhook to Slack/Discord** - Better than email for notifications

---

## 🚨 Troubleshooting

### "Email service not configured" error
- Add `RESEND_API_KEY` to Vercel environment variables
- Redeploy after adding env variables

### Emails not sending
- Check Vercel function logs
- Verify API key is correct
- Check email service dashboard for errors
- Verify sender email is verified

### Too many emails
- Disable: Set `useVisitTracker(false)` in App.jsx
- Add rate limiting
- Switch to analytics instead

---

## 📚 Resources

- **Resend**: https://resend.com/docs
- **SendGrid**: https://docs.sendgrid.com
- **Vercel Analytics**: https://vercel.com/docs/analytics
- **Vercel Functions**: https://vercel.com/docs/functions

---

## 🎉 Summary

**Current State**:
- ✅ Tracking code implemented
- ✅ API endpoint created
- ⚠️ Email service needs configuration
- ⚠️ Sends email on EVERY visit (when enabled)

**Recommendation**:
Use Vercel Analytics instead - it's free, built-in, and doesn't spam your inbox!

---

🤖 **Generated with [Claude Code](https://claude.com/claude-code)**
