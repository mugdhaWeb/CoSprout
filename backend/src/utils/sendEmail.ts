// src/utils/sendEmail.ts

import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

// Create a reusable transporter instance using SMTP transport.
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST, // e.g., "smtp.ethereal.email"
  port: Number(process.env.EMAIL_PORT), // e.g., 587
  auth: {
    user: process.env.EMAIL_USER, // your email
    pass: process.env.EMAIL_PASS, // your email password or test credentials
  },
  logger: true,
  debug: true,
});

/**
 * Sends a verification email with a tokenized link.
 */
export async function sendVerificationEmail(
  toEmail: string,
  token: string,
): Promise<void> {
  const verificationUrl = `${process.env.BASE_URL}api/auth/verify-email?token=${token}`;

  const mailOptions = {
    from: process.env.EMAIL_FROM, // sender address
    to: toEmail,
    subject: "Verify your email address",
    text: `Please verify your email by clicking on the following link: ${verificationUrl}`,
    html: `<p>Please verify your email by clicking on the following link:</p>
           <a href="${verificationUrl}">${verificationUrl}</a>`,
  };

  await transporter.sendMail(mailOptions);
}

/**
 * Sends an application status update notification email.
 * @param toEmail - The recipient's email address.
 * @param applicationStatus - The new status of the application.
 * @param additionalText - Optional additional details.
 */
export async function sendApplicationNotificationEmail(
  toEmail: string,
  applicationStatus: string,
  additionalText?: string,
): Promise<void> {
  const subject = "Application Status Update";
  let text = `Your application status has been updated to: ${applicationStatus}.`;
  let html = `<p>Your application status has been updated to: <strong>${applicationStatus}</strong>.</p>`;

  if (additionalText) {
    text += `\n${additionalText}`;
    html += `<p>${additionalText}</p>`;
  }

  const mailOptions = {
    from: process.env.EMAIL_FROM,
    to: toEmail,
    subject,
    text,
    html,
  };

  await transporter.sendMail(mailOptions);
}

/**
 * Sends an interview schedule notification email.
 * @param toEmail - The recipient's email address.
 * @param scheduledAt - The date and time of the scheduled interview.
 * @param additionalText - Optional additional details.
 */
export async function sendInterviewScheduleEmail(
  toEmail: string,
  scheduledAt: Date,
  additionalText?: string,
): Promise<void> {
  const subject = "Interview Scheduled";
  const dateStr = scheduledAt.toLocaleString();
  let text = `Your interview has been scheduled for: ${dateStr}.`;
  let html = `<p>Your interview has been scheduled for: <strong>${dateStr}</strong>.</p>`;

  if (additionalText) {
    text += `\n${additionalText}`;
    html += `<p>${additionalText}</p>`;
  }

  const mailOptions = {
    from: process.env.EMAIL_FROM,
    to: toEmail,
    subject,
    text,
    html,
  };

  await transporter.sendMail(mailOptions);
}

/**
 * A generic email sending function in case you need to send custom emails.
 * @param toEmail - The recipient's email address.
 * @param subject - The subject of the email.
 * @param text - The plain text content of the email.
 * @param html - The HTML content of the email (optional).
 */
export async function sendEmail(
  toEmail: string,
  subject: string,
  text: string,
  html?: string,
): Promise<void> {
  const mailOptions = {
    from: process.env.EMAIL_FROM,
    to: toEmail,
    subject,
    text,
    html: html || text,
  };

  await transporter.sendMail(mailOptions);
}
