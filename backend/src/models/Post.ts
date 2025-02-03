// src/models/Post.ts
import mongoose, { Schema, Document, Types } from "mongoose";
import { IUser } from "./User";

export interface IPost extends Document {
  thread: Types.ObjectId; // or string if you prefer
  content: string;
  createdBy: Types.ObjectId; // specify that it's an ObjectId
  createdAt: Date;
  updatedAt: Date;
}

const PostSchema: Schema = new Schema(
  {
    thread: { type: Schema.Types.ObjectId, ref: "Thread", required: true },
    content: { type: String, required: true },
    createdBy: { type: Schema.Types.ObjectId, ref: "User", required: true },
  },
  { timestamps: true },
);

export default mongoose.model<IPost>("Post", PostSchema);
