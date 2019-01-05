const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const videoRoutes = express.Router();

const app = express();

let Video = require("./models/video");

app.use(cors());
app.use(bodyParser.json());

const db = require("./config/keys").mongoURI;

mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("Mongo Connected"))
  .catch(err => console.log(err));

videoRoutes.route("/").get(function(req, res) {
  Video.find(function(err, video) {
    if (err) {
      console.log(err);
    } else {
      res.json(video);
    }
  });
});

videoRoutes.route("/add").post(function(req, res) {
  let video = new Video(req.body);
  video
    .save()
    .then(video => {
      res.status(200).json({ video: "video added successfully" });
    })
    .catch(err => {
      res.status(400).send("adding new video failed");
    });
});

videoRoutes.route("/:id").get(function(req, res) {
  let id = req.params.id;
  Video.findById(id, function(err, video) {
    res.json(video);
  });
});

videoRoutes.route("/update/:id").post(function(req, res) {
  Video.findById(req.params.id, function(err, video) {
    if (!video) res.status(404).send("data is not found");
    else video.video_description = req.body.video_description;
    video.video_responsible = req.body.video_responsible;
    video.video_priority = req.body.video_priority;
    video.video_completed = req.body.video_completed;

    video
      .save()
      .then(video => {
        res.json("Video updated");
      })
      .catch(err => {
        res.status(400).send("Update not possible");
      });
  });
});

app.use("/videos", videoRoutes);

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`Server running on port ${port}`));
