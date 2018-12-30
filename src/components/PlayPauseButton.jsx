import React from 'react';

const PlayPauseButton = (props) => {
  const { status, play, pause } = props;
  return (
    <button type="button" onClick={status === 'paused' ? play : pause}>{status === 'paused' ? 'Play' : 'Pause'}</button>
  );
};

export default PlayPauseButton;
