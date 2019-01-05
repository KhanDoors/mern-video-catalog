import React, { Component } from "react";

export class createVideo extends Component {
  state = {
    video_description: "",
    video_responsible: "",
    video_priority: "",
    video_completed: false
  };

  onChangeVideoDescription = e => {
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

  onSubmit = e => {
    e.preventDefault();

    console.log(`form submitted:`);
    console.log(`Video Description: ${this.state.video_description}`);
    console.log(`Video Responsible: ${this.state.video_responsible}`);
    console.log(`Video Priority: ${this.state.video_priority}`);
    console.log(`Video Completed: ${this.state.video_completed}`);

    this.setState({
      video_description: "",
      video_responsible: "",
      video_priority: "",
      video_completed: false
    });
  };

  render() {
    return (
      <div style={{ marginTop: 20 }}>
        <h3>Create New Video Lesson</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Description:</label>
            <input
              type="text"
              className="form-control"
              value={this.state.video_description}
              onChange={this.onChangeVideoDescription}
            />
          </div>
          <div className="form-group">
            <label>Link:</label>
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
          </div>
          <div className="form-group">
            <input type="submit" value="Submit" className="btn btn-primary" />
          </div>
        </form>
      </div>
    );
  }
}

export default createVideo;
