import React from 'react';

const FrameNavigation = (props) => {
  const { navigate } = props;
  return (
    <div>
      <button type="button" className="frameButton" onClick={() => navigate(props.currentTime - 0.04)}>{'<'}</button>
      <button type="button" className="frameButton" onClick={() => navigate(props.currentTime + 0.04)}>{'>'}</button>
    </div>
  );
};

export default FrameNavigation;
