import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Full name is required."],
      trim: true,
      minlength: [2, "Name must contain at least 2 characters."],
      maxlength: [80, "Name cannot exceed 80 characters."]
    },
    email: {
      type: String,
      required: [true, "Email address is required."],
      trim: true,
      lowercase: true,
      unique: true,
      match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Enter a valid email address."]
    },
    role: {
      type: String,
      enum: ["Developer", "Designer", "Manager", "Tester", "Administrator"],
      default: "Developer"
    },
    status: {
      type: String,
      enum: ["Active", "Inactive"],
      default: "Active"
    }
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

userSchema.set("toJSON", {
  virtuals: true,
  transform(_document, returnedObject) {
    returnedObject._id = returnedObject._id.toString();
    delete returnedObject.id;
    delete returnedObject.__v;
    return returnedObject;
  }
});

const User = mongoose.model("User", userSchema);
export default User;
