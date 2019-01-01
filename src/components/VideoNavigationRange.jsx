import React from 'react';
import './VideoNavigationRange.css';

const VideoNavigationRange = (props) => {
  const { currentTime, duration, navigate } = props;
  return (
    <input
      type="range"
      value={currentTime}
      max={duration}
      onChange={e => navigate(e.target.value)}
      className="rangeNav"
    />
  );
};

export default VideoNavigationRange;
