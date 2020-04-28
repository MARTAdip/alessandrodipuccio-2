import React from 'react';
import { AwesomeButton } from 'react-awesome-button';
import { useRouter } from 'next/router';
import Nav from '../components/nav/Nav';
import 'react-awesome-button/dist/themes/theme-c137.css';
import '../components/music-video.scss';

const MusicVideo = () => {
  const router = useRouter();
  return (
    <div>
      <Nav />
      <div className="choice-container">
        <div className="col-music">
          <div className="inner">
            <AwesomeButton
              size="large"
              type="primary"
              onPress={() => {
                router.push('/music-links');
              }}
            >
              MUSIC
            </AwesomeButton>
          </div>
        </div>
        <div className="col-video">
          <div className="inner">
            <AwesomeButton
              size="large"
              type="primary"
              onPress={() => {
                router.push('/video-links');
              }}
            >
              VIDEO
            </AwesomeButton>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MusicVideo;
