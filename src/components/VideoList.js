import React from 'react';
import VideoItem from './VideoItem';
const VideoList = ({videos}) => { //Functionla Component

    const RENDERED_LIST = videos.map(video=>{
        return <VideoItem/>
    })
    return <div>{RENDERED_LIST}</div>
}

export default VideoList;