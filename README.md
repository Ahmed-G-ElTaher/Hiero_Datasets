# LASC Pipeline Datasets

<!-- ...existing content... -->

## Contact Form Email Setup

To enable the contact form to send emails, follow these steps:

1. Go to [SMTP.js](https://smtpjs.com/) and get a secure token.
2. Replace `YOUR_SECURE_TOKEN` in `script.js` with your secure token.

```javascript
Email.send({
    SecureToken: "YOUR_SECURE_TOKEN", // Replace with your SMTP.js secure token
    To: 'ahmed.g.eltaher@gmail.com',
    From: email,
    Subject: `New message from ${name}`,
    Body: `Name: ${name}<br>Email: ${email}<br>Message: ${message}`
});
```

3. Ensure you have included the SMTP.js script in your `index.html` file:

```html
<script src="https://smtpjs.com/v3/smtp.js"></script>
```

4. Test the contact form by filling it out and submitting it.

<!-- ...existing content... -->
