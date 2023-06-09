import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
  },
  oAuth: {
    type: Boolean,
    require: true,
    default: false,
  },
  oAuthType: {
    type: String,
  },
});

export default mongoose.models.user || mongoose.model("user", userSchema);
