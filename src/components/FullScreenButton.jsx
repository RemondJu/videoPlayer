import React from 'react';
import './FullScreenButton.css';

const FullScreenButton = (props) => {
  const { requestFullscreen } = props;
  return (
    <button type="button" onClick={requestFullscreen}>Fullscreen</button>
  );
};

export default FullScreenButton;
