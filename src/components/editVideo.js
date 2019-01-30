import React, { Component } from "react";
import axios from "axios";

export class editVideo extends Component {
  state = {
    video_description: "",
    video_responsible: "",
    video_priority: "",
    video_completed: false
  };

  componentDidMount = () => {
    axios
      .get("http://localhost:4000/videos/" + this.props.match.params.id)
      .then(res => {
        this.setState({
          video_description: res.data.video_description,
          video_responsible: res.data.video_responsible,
          video_priority: res.data.video_priority,
          video_completed: res.data.video_completed
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  onChangeVideoDecription = e => {
    this.setState({
      video_description: e.target.value
    });
  };

  onChangeVideoResponsible = e => {
    this.setState({
      video_responsible: e.target.value
    });
  };
  onChangeVideoPriority = e => {
    this.setState({
      video_priority: e.target.value
    });
  };
  onChangeVideoCompleted = e => {
    this.setState({
      video_completed: !this.state.video_completed
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const obj = {
      video_description: this.state.video_description,
      video_responsible: this.state.video_responsible,
      video_priority: this.state.video_priority,
      video_completed: this.state.video_completed
    };
    axios
      .post(
        "http://localhost:4000/videos/update/" + this.props.match.params.id,
        obj
      )
      .then(res => console.log(res.data));
    this.props.history.push("/");
  };

  render() {
    return (
      <div>
        <h3>Update Video</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Description:</label>
            <input
              type="text"
              className="form-control"
              value={this.state.video_description}
              onChange={this.onChangeVideoDecription}
            />
          </div>
          <div className="form-group">
            <label>Url:</label>
            <input
              type="text"
              className="form-control"
              value={this.state.video_responsible}
              onChange={this.onChangeVideoResponsible}
            />
          </div>
          <div className="form-group">
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="priorityOptions"
                id="priorityLow"
                value="Low"
                checked={this.state.video_priority === "Low"}
                onChange={this.onChangeVideoPriority}
              />
              <label className="form-check-label">Low</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="priorityOptions"
                id="priorityMedium"
                value="Medium"
                checked={this.state.video_priority === "Medium"}
                onChange={this.onChangeVideoPriority}
              />
              <label className="form-check-label">Medium</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="priorityOptions"
                id="priorityHigh"
                value="High"
                checked={this.state.video_priority === "High"}
                onChange={this.onChangeVideoPriority}
              />
              <label className="form-check-label">High</label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="completedCheckbox"
                name="completedCheckbox"
                onChange={this.onChangeVideoCompleted}
                checked={this.state.video_completed}
                value={this.state.video_completed}
              />
              <label className="form-check-label" htmlFor="completedCheckbox">
                Completed
              </label>
            </div>
            <br />
            <div className="form-group">
              <input
                type="submit"
                value="Update Video"
                className="btn btn-primary"
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default editVideo;
