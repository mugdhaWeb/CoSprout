// src/utils/sendEmail.ts
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

export async function sendVerificationEmail(
    toEmail: string,
    token: string
): Promise<void> {
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
