import React from 'react';
import VideoItem from './VideoItem';
const VideoList = ({videos, onVideoSelect}) => { //Functionla Component
    const RENDERED_LIST = videos.map(video =>{
        return <VideoItem key={video.id.videoId} onVideoSelect={onVideoSelect} video={video}/>
    });
    
    return <div className="ui relaxed divided list">{RENDERED_LIST}</div>
}

export default VideoList;