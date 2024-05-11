const mongoose = require("mongoose");
const plm = require('passport-local-mongoose');

const userSchema = mongoose.Schema({
  username: {
    type: String,
    require: true,
    unique: true
  },
  email: {
    type: String
  },
  name: {
    type: String,
    require: true
  },
  bio: {
    type: String
  },
  password: {
    type: String,
    require: true
  },
  ProfilePicture: {
    type: Object,
    default: {
      fileId: "",
      url: "https://ik.imagekit.io/xfssqj13p/Default-User-Image.png?updatedAt=1715264591029"
    }
  },
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "post"
    }
  ],
  stories: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "story"
  }],
  savedPost: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "post"
    }
  ],
  Followers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user"
    }
  ],
  Followings: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user"
    }
  ],
});

userSchema.plugin(plm);
module.exports = mongoose.model('user', userSchema);