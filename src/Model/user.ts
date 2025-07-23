import { model, Schema } from "mongoose";

const userSchema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  address: { type: String, required: true },
  isVerified: { type: Boolean, required: false, default: false },
  role: { type: String, required: true },

  updatedAt: { type: Date, default: Date.now() },
  createdAt: { type: Date, default: Date.now() },
});

const userModel = model("users", userSchema);
export default userModel;
