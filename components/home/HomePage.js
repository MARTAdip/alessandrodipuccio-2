import React, { Component } from "react";
import video from "../../public/video.mp4";

export default class Home extends Component {
  state = {
    loading: true
  };
  componentDidMount() {
    this.video.play();
    if (this.video) {
      this.video.addEventListener("loadeddata", () => {
        this.setState({ loading: false });
      });
    }
  }
  toggleMute = () => {
    if (this.video.muted) {
      this.video.muted = false;
    } else {
      this.video.muted = true;
    }
  };
  // componentWillUnmount() {
  //   if (this.video) {
  //     this.video.removeEventListener("loadeddata", () => {});
  //   }
  // }
  render() {
    return (
      <video
        ref={ref => (this.video = ref)}
        autoPlay={true}
        muted
        id="myVideo"
        loop
        style={{
          position: "relative",
          width: "100%",
          left: 0,
          top: 0,
          opacity: this.state.loading ? 0 : 1,
          transition: "opacity, 2s ease-in-out"
        }}
      >
        <source
          src={video}
        />
      </video>
    );
  }
}

