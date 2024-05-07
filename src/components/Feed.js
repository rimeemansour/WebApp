import React from 'react';
import ButtonList from './ButtonList';
import VideoContainer from './VideoContainer';

const Feed = () => {
  return (
    <div className='ml-20 mr-5 flex-grow mt-16' style={{ marginTop: '-50px' }}>
      <ButtonList />
      <div className="flex-grow overflow-y-auto">
        <VideoContainer />
      </div>
    </div>
  );
}

export default Feed;
