import React from 'react';

const MuteButton = (props) => {
  const { toggleMute, isMuted } = props;
  return (
    <button type="button" onClick={toggleMute}>{isMuted ? 'Unmute' : 'mute'}</button>
  );
};

export default MuteButton;
