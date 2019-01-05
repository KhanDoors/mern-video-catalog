const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Video = new Schema({
  video_description: {
    type: String
  },
  video_responsible: {
    type: String
  },
  video_priority: {
    type: String
  },
  video_completed: {
    type: Boolean
  }
});

module.exports = mongoose.model("Video", Video);
