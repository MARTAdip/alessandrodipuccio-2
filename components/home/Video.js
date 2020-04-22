import React, { Component } from 'react';
import './video.scss';

export default class Video extends Component {
  state = {
    // loading: true,
  };

  // componentDidMount() {
  //   this.video.play();
  //   if (this.video) {
  //     this.video.addEventListener("loadeddata", () => {
  //       this.setState({ loading: false });
  //     });
  //   }
  // }
  // toggleMute = () => {
  //   if (this.video.muted) {
  //     this.video.muted = false;
  //   } else {
  //     this.video.muted = true;
  //   }
  // };
  // componentWillUnmount() {
  //   if (this.video) {
  //     this.video.removeEventListener("loadeddata", () => {});
  //   }
  // }
  render() {
    return (
      <div className="video-wrapper">
        <iframe
          title="vimeo"
          src="https://player.vimeo.com/video/172016440?loop=1&title=0&byline=0&portrait=0"
          width="1000px"
          height="800"
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
        ></iframe>
      </div>
    );
  }
}
