import React from 'react';

const VideoDetail = ({video}) => {
    if(video) {    
        return <div>{video.snippet.title}</div>
    }

    return null;

}

export default VideoDetail;
