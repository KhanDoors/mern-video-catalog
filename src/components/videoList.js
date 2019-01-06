import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Video = props => (
  <tr>
    <td>{props.video.video_description}</td>
    <td>{props.video.video_responsible}</td>
    <td>{props.video.video_priority}</td>
    <td>
      <Link to={"/edit/" + props.video._id}>Edit</Link>
    </td>
  </tr>
);

export class videoList extends Component {
  state = {
    videos: []
  };

  componentDidMount = () => {
    axios
      .get("http://localhost:4000/videos/")
      .then(res => {
        this.setState({ videos: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  };

  videoList = () => {
    return this.state.videos.map((currentVideo, i) => {
      return <Video video={currentVideo} key={i} />;
    });
  };

  render() {
    return (
      <div>
        <h3>Video List</h3>
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>Description</th>
              <th>URL</th>
              <th>Priority</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{this.videoList()}</tbody>
        </table>
      </div>
    );
  }
}

export default videoList;
