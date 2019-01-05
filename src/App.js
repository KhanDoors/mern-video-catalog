import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import VideoList from "./components/videoList";
import EditVideo from "./components/editVideo";
import CreateVideo from "./components/createVideo";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <h1>Video Catalog App</h1>
          <Route path="/" exact component={VideoList} />
          <Route path="/edit/:id" component={EditVideo} />
          <Route path="/create" component={CreateVideo} />
        </div>
      </Router>
    );
  }
}

export default App;
