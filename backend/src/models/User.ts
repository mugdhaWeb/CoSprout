// src/models/User.ts

import mongoose, { Schema, Document } from "mongoose";
import bcrypt from 'bcryptjs';
import crypto from 'crypto';

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  googleId?: string;
  role: "mentee" | "mentor" | "both";
  category: "High School" | "College" | "Pre Professional";
  isVerified: boolean;
  verificationToken?: string;
  verificationTokenExpires?: Date;
  resetPasswordToken?: string;
  resetPasswordTokenExpires?: Date;
  createdAt: Date;
  updatedAt: Date;
  comparePassword: (candidatePassword: string) => Promise<boolean>;
  generateVerificationToken: () => { token: string, expires: Date };
  generatePasswordResetToken: () => { token: string, expires: Date };
}

const UserSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide a name'],
      trim: true,
      maxlength: [50, 'Name cannot be more than 50 characters']
    },
    email: {
      type: String,
      required: [true, 'Please provide an email'],
      unique: true,
      lowercase: true,
      trim: true,
      match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Please provide a valid email']
    },
    password: {
      type: String,
      required: [function(this: IUser) {
        return !this.googleId; // Only required if not using Google auth
      }, 'Please provide a password'],
      minlength: [8, 'Password must be at least 8 characters'],
      select: false // Don't return password by default in queries
    },
    googleId: {
      type: String,
      unique: true,
      sparse: true // Allows null/undefined values (for non-Google users)
    },
    role: {
      type: String,
      enum: ["mentee", "mentor", "both"],
      required: true,
    },
    category: {
      type: String,
      enum: ["High School", "College", "Pre Professional"],
      required: true,
    },
    isVerified: { type: Boolean, default: false },
    verificationToken: { type: String },
    verificationTokenExpires: { type: Date },
    resetPasswordToken: { type: String },
    resetPasswordTokenExpires: { type: Date },
  },
  { timestamps: true },
); // Adds createdAt and updatedAt fields automatically

// Hash the password before saving
UserSchema.pre('save', async function(next) {
  // Only hash the password if it's modified (or new)
  if (!this.isModified('password') || !this.password) return next();
  
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error: any) {
    next(error);
  }
});

// Method to compare passwords
UserSchema.methods.comparePassword = async function(candidatePassword: string): Promise<boolean> {
  if (!this.password) return false;
  return await bcrypt.compare(candidatePassword, this.password);
};

// Method to generate email verification token
UserSchema.methods.generateVerificationToken = function(): { token: string, expires: Date } {
  const token = crypto.randomBytes(32).toString('hex');
  const expires = new Date(Date.now() + 24 * 60 * 60 * 1000); // 24 hours
  
  this.verificationToken = token;
  this.verificationTokenExpires = expires;
  
  return { token, expires };
};

// Method to generate password reset token
UserSchema.methods.generatePasswordResetToken = function(): { token: string, expires: Date } {
  const token = crypto.randomBytes(32).toString('hex');
  const expires = new Date(Date.now() + 60 * 60 * 1000); // 1 hour
  
  this.resetPasswordToken = token;
  this.resetPasswordTokenExpires = expires;
  
  return { token, expires };
};

export default mongoose.model<IUser>("User", UserSchema);
