import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

// Configure email transporter
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});

// Email templates
const emailTemplates = {
  verification: (name: string, token: string) => ({
    subject: 'CoSprout - Email Verification',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eaeaea; border-radius: 5px;">
        <div style="text-align: center; margin-bottom: 20px;">
          <img src="https://yourwebsite.com/logo.png" alt="CoSprout Logo" style="max-width: 150px;">
        </div>
        <h2 style="color: #4ade80; text-align: center;">Verify Your Email Address</h2>
        <p>Hello ${name},</p>
        <p>Thank you for registering with CoSprout! Please verify your email address by clicking the button below:</p>
        <div style="text-align: center; margin: 30px 0;">
          <a href="${process.env.CLIENT_URL}/verify-email?token=${token}" style="background-color: #4ade80; color: white; padding: 12px 24px; text-decoration: none; border-radius: 4px; font-weight: bold;">Verify Email</a>
        </div>
        <p>If you did not create an account, you can safely ignore this email.</p>
        <p>This verification link will expire in 24 hours.</p>
        <p>Best regards,<br>The CoSprout Team</p>
      </div>
    `
  }),
  
  passwordReset: (name: string, token: string) => ({
    subject: 'CoSprout - Password Reset Request',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eaeaea; border-radius: 5px;">
        <div style="text-align: center; margin-bottom: 20px;">
          <img src="https://yourwebsite.com/logo.png" alt="CoSprout Logo" style="max-width: 150px;">
        </div>
        <h2 style="color: #4ade80; text-align: center;">Reset Your Password</h2>
        <p>Hello ${name},</p>
        <p>We received a request to reset your password. Click the button below to create a new password:</p>
        <div style="text-align: center; margin: 30px 0;">
          <a href="${process.env.CLIENT_URL}/reset-password?token=${token}" style="background-color: #4ade80; color: white; padding: 12px 24px; text-decoration: none; border-radius: 4px; font-weight: bold;">Reset Password</a>
        </div>
        <p>If you did not request a password reset, you can safely ignore this email.</p>
        <p>This password reset link will expire in 1 hour.</p>
        <p>Best regards,<br>The CoSprout Team</p>
      </div>
    `
  })
};

// Send email
export const sendEmail = async (to: string, template: 'verification' | 'passwordReset', data: { name: string, token: string }): Promise<void> => {
  try {
    const { subject, html } = emailTemplates[template](data.name, data.token);
    
    await transporter.sendMail({
      from: `"CoSprout" <${process.env.SMTP_USER}>`,
      to,
      subject,
      html
    });
    
    console.log(`Email sent successfully to ${to}`);
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('Failed to send email');
  }
};

export default sendEmail; 