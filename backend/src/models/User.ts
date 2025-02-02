// src/models/User.ts

import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
  email: string;
  password: string;
  role: "mentee" | "mentor" | "both";
  category: "High School" | "College" | "Pre Professional";
}

const UserSchema: Schema = new Schema({
  email: { type: String, required: true, unique: true },
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
});

export default mongoose.model<IUser>("User", UserSchema);
