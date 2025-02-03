// src/models/User.ts

import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
  email: string;
  password: string;
  role: "mentee" | "mentor" | "both";
  category: "High School" | "College" | "Pre Professional";
  isVerified: boolean;
  verificationToken?: string;
  verificationTokenExpires?: Date;
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema: Schema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true, // ensure email is stored in lowercase
      trim: true, // remove whitespace from beginning and end
    },
    password: { type: String, required: true },
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
  },
  { timestamps: true },
); // Adds createdAt and updatedAt fields automatically

export default mongoose.model<IUser>("User", UserSchema);
