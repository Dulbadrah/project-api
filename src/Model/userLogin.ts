import mongoose, { Document, Schema } from "mongoose";
import bcrypt from "bcrypt";


export interface IUser extends Document {
  email: string;
  password: string;
  phoneNumber?: string;
  comparePassword: (candidatePassword: string) => Promise<boolean>;
}


const userSchema: Schema<IUser> = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phoneNumber: { type: String }
});


userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});


userSchema.methods.comparePassword = async function (
  candidatePassword: string
): Promise<boolean> {
  return await bcrypt.compare(candidatePassword, this.password);
};


export default mongoose.model<IUser>("UserLogin", userSchema);
