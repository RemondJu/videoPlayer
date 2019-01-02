import React from 'react';
import './MuteButton.css';

const MuteButton = (props) => {
  const { toggleMute, isMuted } = props;
  return (
    <button type="button" onClick={toggleMute}>{isMuted ? 'Unmute' : 'Mute'}</button>
  );
};

export default MuteButton;
