import React, { Component } from 'react';
import Video from 'react-video-renderer';
import './VideoPlayer.css';
import FullScreenButton from './FullScreenButton';
import FrameNavigation from './FrameNavigation';
import PlayPauseButton from './PlayPauseButton';
import MuteButton from './MuteButton';
import VolumeSetter from './VolumeSetter';
import VideoNavigationRange from './VideoNavigationRange';

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
              <div className="VideoScreen">
                <div
                  className="videoReader"
                  tabIndex="0"
                  role="menuitem"
                  onKeyDown={(e) => {
                    let onKeyDownHandler = null;
                    switch (e.which) {
                      case 37: onKeyDownHandler = actions.navigate(state.currentTime - 0.04);
                        break;
                      case 39: onKeyDownHandler = actions.navigate(state.currentTime + 0.04);
                        break;
                      case 32: onKeyDownHandler = state.status === 'paused' ? actions.play() : actions.pause();
                        break;
                      case 77: onKeyDownHandler = actions.toggleMute();
                        break;
                      case 70: onKeyDownHandler = actions.requestFullscreen();
                        break;
                      default: return onKeyDownHandler;
                    }
                    return onKeyDownHandler;
                  }
                }
                >
                  {video}
                </div>
                {loadingComponent}
                <div>
                  {`${Math.floor(state.currentTime)}s /${Math.floor(state.duration)}s`}
                </div>
                <div>
                  {`Buffering:${Math.floor(state.buffered * (100 / state.duration))}%`}
                </div>
                <VideoNavigationRange
                  currentTime={state.currentTime}
                  duration={state.duration}
                  navigate={actions.navigate}
                />
                <div className="videoControls">
                  <VolumeSetter
                    volume={state.volume}
                    setVolume={actions.setVolume}
                  />
                  <MuteButton
                    toggleMute={actions.toggleMute}
                    isMuted={state.isMuted}
                  />
                  <PlayPauseButton
                    status={state.status}
                    play={actions.play}
                    pause={actions.pause}
                  />
                  <FrameNavigation navigate={actions.navigate} currentTime={state.currentTime} />
                  <FullScreenButton requestFullscreen={actions.requestFullscreen} />
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
