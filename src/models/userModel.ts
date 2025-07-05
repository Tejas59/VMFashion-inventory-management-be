import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  verifyOtp: {
    type: String,
    default: "",
  },
  expirtyOtp: {
    type: Number,
    default: 0,
  },
  isVerified:{
    type: Boolean,
    default: false,
  }
  //   phoneNumber:{
  //     type: Number,
  //     required: true,
  //   },
  //   role:{
  //     type: String,
  //     enum: ["Admin", "Supervisor"]
  //   }
});

export const userModal = mongoose.model("UserModal", userSchema);
