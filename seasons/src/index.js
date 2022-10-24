import React from "react";
import { createRoot } from "react-dom/client";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends React.Component {
  state = { lat: null, errorMessage: "" };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  render() {
    return this.state.lat ? (
      <SeasonDisplay lat={this.state.lat} />
    ) : this.state.errorMessage ? (
      <div>Error: {this.state.errorMessage}</div>
    ) : (
      <Spinner message="Please accept location request" />
    );
  }
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
