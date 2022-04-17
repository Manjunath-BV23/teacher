const mongoose = require("mongoose")


// step 2 :- create a schema
const userSchema = new mongoose.Schema(
    {
      teacher_name: { type: String, required: true },
      gender: { type: String, required: false, default: "Male" },
      age: { type: Number,required: true},
      grade: {type:String, required:true},
      last_name: { type: String, required: true },
      last_name: { type: String, required: true },

    },
    {
      versionKey: false, // removed __v
      timestamps: true, // createdAt, updatedAt
    }
  );

module.exports = mongoose.model("user", userSchema); // user => users