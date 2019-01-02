import React from 'react';
import './PlayPauseButton.css';

const PlayPauseButton = (props) => {
  const { status, play, pause } = props;
  return (
    <button type="button" onClick={status === 'paused' ? play : pause}>{status === 'paused' ? 'Play' : 'Pause'}</button>
  );
};

export default PlayPauseButton;
