import React from 'react';
import './FrameNavigation.css';

const FrameNavigation = (props) => {
  const { navigate } = props;
  return (
    <div className="FrameNavigation">
      <button type="button" className="frameButton left" onClick={() => navigate(props.currentTime - 0.04)}>{'<'}</button>
      <button type="button" className="frameButton right" onClick={() => navigate(props.currentTime + 0.04)}>{'>'}</button>
    </div>
  );
};

export default FrameNavigation;
