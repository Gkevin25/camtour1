# EmailJS Setup Guide for Tour Booking Notifications

## Step 1: Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Add Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Note down your **Service ID** (e.g., `service_abc123`)

## Step 3: Create Email Template

1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template content:

### Template Subject:
```
🎉 Tour Booking Confirmation - {{tour_title}}
```

### Template Body:
```html
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #059669, #dc2626, #d97706); color: white; padding: 20px; text-align: center; }
        .content { background: #f9f9f9; padding: 20px; }
        .highlight { background: #e6fffa; padding: 15px; border-left: 4px solid #059669; margin: 15px 0; }
        .details { background: white; padding: 15px; border-radius: 8px; margin: 15px 0; }
        .footer { text-align: center; padding: 20px; color: #666; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🎉 Booking Confirmed!</h1>
            <p>Thank you for choosing CamTour</p>
        </div>
        
        <div class="content">
            <p>Dear {{to_name}},</p>
            
            <p>Your tour booking has been confirmed! We're excited to show you the beauty of Cameroon.</p>
            
            <div class="highlight">
                <h3>📋 Booking Details</h3>
                <p><strong>Booking ID:</strong> {{booking_id}}</p>
                <p><strong>Booking Date:</strong> {{booking_timestamp}}</p>
            </div>
            
            <div class="details">
                <h3>🏞️ Tour Information</h3>
                <p><strong>Tour:</strong> {{tour_title}}</p>
                <p><strong>Location:</strong> {{tour_location}}</p>
                <p><strong>Duration:</strong> {{tour_duration}}</p>
                <p><strong>Selected Date:</strong> {{booking_date}}</p>
                <p><strong>Number of Travelers:</strong> {{number_of_travelers}}</p>
            </div>
            
            <div class="details">
                <h3>💰 Pricing</h3>
                <p><strong>Price per person:</strong> {{tour_price}} XAF</p>
                <p><strong>Total Amount:</strong> {{total_price}} XAF</p>
            </div>
            
            <div class="details">
                <h3>📝 Tour Description</h3>
                <p>{{tour_description}}</p>
            </div>
            
            <div class="details">
                <h3>✨ Tour Highlights</h3>
                <p>• {{tour_highlights}}</p>
            </div>
            
            <div class="highlight">
                <h3>📞 Next Steps</h3>
                <p>Our team will contact you within 24 hours to confirm pickup details and answer any questions.</p>
                <p><strong>Contact:</strong> info@camtour.com | +237 XXX XXX XXX</p>
            </div>
        </div>
        
        <div class="footer">
            <p>Thank you for choosing CamTour!</p>
            <p>Discover the beauty of Cameroon with us 🇨🇲</p>
        </div>
    </div>
</body>
</html>
```

4. Save the template and note down your **Template ID** (e.g., `template_xyz789`)

## Step 4: Get Public Key

1. Go to "Account" in your EmailJS dashboard
2. Find your **Public Key** (e.g., `user_abcdef123456`)

## Step 5: Update Environment Variables

Update your `.env.local` file with your actual values:

```env
# EmailJS Configuration
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_abc123
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xyz789
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=user_abcdef123456
```

## Step 6: Test the Setup

1. Restart your Next.js development server
2. Navigate to a tour detail page
3. Select a date and number of travelers
4. Click "Book Now"
5. Check your email for the confirmation

## Security Notes

- EmailJS public keys are safe to expose in frontend code
- The actual email sending happens on EmailJS servers
- No sensitive API keys are exposed to the client
- Rate limiting is handled by EmailJS

## Troubleshooting

### Common Issues:

1. **Email not sending**: Check console for errors and verify all environment variables
2. **Template not found**: Ensure template ID is correct
3. **Service not found**: Verify service ID and that service is active
4. **Rate limiting**: EmailJS free plan has monthly limits

### Debug Steps:

1. Check browser console for error messages
2. Verify environment variables are loaded correctly
3. Test EmailJS configuration in their dashboard
4. Ensure email service is properly connected and verified

## Free Plan Limits

- 200 emails per month
- EmailJS branding in emails
- Basic support

For production use, consider upgrading to a paid plan for higher limits and custom branding.
