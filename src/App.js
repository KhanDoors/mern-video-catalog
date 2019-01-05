import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import VideoList from "./components/videoList";
import EditVideo from "./components/editVideo";
import CreateVideo from "./components/createVideo";
import logo from "./video-logo.jpg";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg text-white-50 bg-dark">
            <a
              className="navbar-brand"
              href="https://sk-portfolio.netlify.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={logo} width="30" height="30" alt="Khandoors" />
            </a>
            <Link to="/" className="navabr-brand">
              KhanDoor Video Catalog
            </Link>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">
                    Videos
                  </Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">
                    Create Video Lesson
                  </Link>
                </li>
              </ul>
            </div>
          </nav>

          <Route path="/" exact component={VideoList} />
          <Route path="/edit/:id" component={EditVideo} />
          <Route path="/create" component={CreateVideo} />
        </div>
      </Router>
    );
  }
}

export default App;
