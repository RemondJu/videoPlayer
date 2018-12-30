import React from 'react';

const VolumeSetter = (props) => {
  const { volume, setVolume } = props;
  return (
    <div className="VolumeSetter">
      <input
        type="range"
        value={volume}
        max={1}
        step="0.01"
        onChange={e => setVolume(e.target.value)}
      />
      <p>
        {`Vol.${Math.floor(volume * 100)}%`}
      </p>
    </div>
  );
};

export default VolumeSetter;
