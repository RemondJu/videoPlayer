import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import VideoPlayer from '../components/VideoPlayer';
import PlayPauseButton from '../components/PlayPauseButton';
import VideoNavigationRange from '../components/VideoNavigationRange';
import MuteButton from '../components/MuteButton';
import FullScreenButton from '../components/FullScreenButton';
import FrameNavigation from '../components/FrameNavigation';
import VolumeSetter from '../components/VolumeSetter';

storiesOf('Video Player', module)
  .add('my video player test', () => (
    <VideoPlayer />
  ));

storiesOf('Play-pause button', module)
  .add('Pause button', () => <PlayPauseButton />)
  .add('Play button', () => <PlayPauseButton status="paused" onClick={action()} />);

storiesOf('Mute-unmute button', module)
  .add('Mute button', () => <MuteButton isMuted={false} />)
  .add('Unmute button', () => <MuteButton isMuted />);

storiesOf('Fullscreen button', module)
  .add('Fullscreen', () => <FullScreenButton />)

storiesOf('Frame by frame navigation', module)
  .add('Frame buttons', () => <FrameNavigation />)

storiesOf('Video navigation range', module)
  .add('Range', () => <VideoNavigationRange />);

storiesOf('Volume setter', module)
  .add('Volume', () => <VolumeSetter volume={1} />);
