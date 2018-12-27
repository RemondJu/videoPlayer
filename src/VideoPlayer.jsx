import React, { Component } from 'react';
import Video from 'react-video-renderer';
import './VideoPlayer.css';

class VideoPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="VideoPlayer">
        <Video src="http://vjs.zencdn.net/v/oceans.mp4" controls preload="metadata">
          {(video, state, actions) => {
            const loadingComponent = state.isLoading ? 'loading...' : undefined;
            return (
              <div className="Video">
                <div
                  className="videoReader"
                  tabIndex="0"
                  role="menuitem"
                  onKeyDown={(e) => {
                    let keyDownHandler = null;
                    switch (e.which) {
                      case 37: keyDownHandler = actions.navigate(state.currentTime - 0.04);
                        break;
                      case 39: keyDownHandler = actions.navigate(state.currentTime + 0.04);
                        break;
                      case 32: keyDownHandler = state.status === 'paused' ? actions.play() : actions.pause();
                        break;
                      case 77: keyDownHandler = actions.toggleMute();
                        break;
                      case 70: keyDownHandler = actions.requestFullscreen();
                        break;
                      default: return '';
                    }
                    return keyDownHandler;
                  }
                }
                >
                  {video}
                </div>
                {loadingComponent}
                <div>
                  {Math.floor(state.currentTime)}
                  s /
                  {Math.floor(state.duration)}
                  s
                </div>
                <div>
                  Buffering:
                  {Math.floor(state.buffered * (100 / state.duration))}
                  %
                </div>
                <progress
                  value={state.currentTime}
                  max={state.duration}
                  onChange={actions.navigate}
                />
                <div className="videoControls">
                  <div>
                    <input type="range" value={state.volume} max={1} step="0.01" onChange={e => actions.setVolume(e.target.value)} />
                    <p>
                      Vol.
                      {Math.floor(state.volume * 100)}
                      %
                    </p>
                  </div>
                  <button type="button" onClick={actions.toggleMute}>{state.isMuted ? 'Unmute' : 'Mute'}</button>
                  <button type="button" onClick={state.status === 'paused' ? actions.play : actions.pause}>{state.status === 'paused' ? 'Play' : 'Pause'}</button>
                  <div>
                    <button type="button" className="frameButton" onClick={() => actions.navigate(state.currentTime - 0.04)}>{'<'}</button>
                    <button type="button" className="frameButton" onClick={() => actions.navigate(state.currentTime + 0.04)}>{'>'}</button>
                  </div>
                  <button type="button" onClick={actions.requestFullscreen}>Fullscreen</button>
                </div>
              </div>
            );
          }}
        </Video>
      </div>
    );
  }
}

export default VideoPlayer;
