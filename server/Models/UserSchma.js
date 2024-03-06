const mongoose = require("mongoose");
const nodemailer = require("nodemailer");
require("dotenv").config();
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxLength: 50,
  },
  lastname: {
    type: String,
    required: true,
    maxLength: 50,
  },
  email: {
    type: String,
    required: true,
    maxLength: 50,
  },
  password: {
    type: String,
    required: true,
    
  },
  city: {
    type: String,
    required: true,
    maxLength: 50,
  },
 address: {
    type: String,
    required: true,
    maxLength: 50,
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now(),
  },
  updatedAt: {
    type: Date,
    required: true,
    default: Date.now(),
  },
  image: {
    type: String,
    // required: true,
  },
  token: {
    type: String,
  },
  car: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Car",
    },
  ],
});

UserSchema.post("save", async function (doc) {
  try {
    console.log("Doc", doc);

    //create Transporter
    let transporter = nodemailer.createTransport({
      host: process.env.Mail_Host,
      auth: {
        user: process.env.Mail_User,
        pass: process.env.Mail_Pass,
      },
    });
    // //send mail
    let info = await transporter.sendMail({
      from: "Hansal",
      to:doc.email,
      subject: "Email for User Created Succesfully 🚀🚀",
      html: `<h1>Hello,
      <h2>${doc.name} ${doc.lastname} Your Account has been created Succefully now you can book or buy the Car</h2>
      </h1>`,
    });

    console.log("INFO", info);
  } catch (error) {
    console.log(error);
  }
});
module.exports = mongoose.model("User", UserSchema);
