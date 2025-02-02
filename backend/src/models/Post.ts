// src/models/Post.ts
import mongoose, { Schema, Document } from "mongoose";
import { IUser } from "./User";
import { IThread } from "./Thread";

export interface IPost extends Document {
  thread: IThread["_id"];
  content: string;
  createdBy: IUser["_id"];
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
