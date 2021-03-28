import React, { useEffect } from 'react';
import './style.scss';
import video from 'src/assets/video/en-construction.mp4';
// import img from 'src/assets/video/en-construction.gif';

const Wait = () => {
  useEffect(() => {
    document.getElementById('construction').play();
  }, []);
  return (
    <div className="construction">
      <h1 className="construction__title">Anne-Sophie & Gabriel</h1>
      <h1>Site en construction </h1>
      <video
        id="construction"
        autoPlay
        playsInline
        loop
        muted
        className="construction__video"
      >
        <source src={video} type="video/mp4"></source>
      </video>
    </div>
  );
};

export default Wait;
