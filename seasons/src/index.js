import React from "react";
import { createRoot } from "react-dom/client";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { lat: null, errorMessage: "" };

    navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  render() {
    return this.state.lat ? (
      <div>Latitude: {this.state.lat} </div>
    ) : this.state.errorMessage ? (
      <div>Error: {this.state.errorMessage}</div>
    ) : (
      <div>Loading...</div>
    );
  }
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
