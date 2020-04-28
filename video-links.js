import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import AwesomeSliderStyles from 'react-awesome-slider/src/styled/cube-animation/cube-animation.scss';
import 'react-awesome-slider/dist/styles.css';
import Nav from '../components/nav/Nav';
import '../components/video-links.scss';

export default function VideoLinks({ props }) {
  return (
    <div>
      <Nav />
      <div className="container">
        <AwesomeSlider cssModule={AwesomeSliderStyles}>
          <div className="video-wrapper">
            <video controls width="100%">
              <track kind="captions" {...props} />
              <source src="https://www.facebook.com/235867483524943/videos/241348162976875/" type="video/mp4" />
            </video>
          </div>
          <div className="video-wrapper">
            <video controls width="100%">
              <track kind="captions" {...props} />
              <source src="https://www.facebook.com/235867483524943/videos/236464490131909/" type="video/mp4" />
            </video>
          </div>
        </AwesomeSlider>
      </div>
    </div>
  );
}
