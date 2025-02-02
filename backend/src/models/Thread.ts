// src/models/Thread.ts
import mongoose, { Schema, Document } from "mongoose";
import { IUser } from "./User";

export interface IThread extends Document {
  title: string;
  description: string;
  category: string;
  createdBy: IUser["_id"];
  createdAt: Date;
  updatedAt: Date;
}

const ThreadSchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    createdBy: { type: Schema.Types.ObjectId, ref: "User", required: true },
  },
  { timestamps: true },
);

export default mongoose.model<IThread>("Thread", ThreadSchema);
