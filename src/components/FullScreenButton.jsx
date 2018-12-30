import React from 'react';

const FullScreenButton = (props) => {
  const { requestFullscreen } = props;
  return (
    <button type="button" onClick={requestFullscreen}>Fullscreen</button>
  );
};

export default FullScreenButton;
