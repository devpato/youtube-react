import React from 'react';
import './VideoDetails.css'
const VideoDetail = ({video}) => {
    if(video) {  
        const YOUTUBE_VIDEO = `https://www.youtube.com/embed/${video.id.videoId}`;  
        return (
            <div>
                <div className="ui embeded">
                    <iframe title={video.snippet.title} className="video-player" src={YOUTUBE_VIDEO}/>
                </div>
                <div className="ui segment">
                    <h4 className="ui header">{video.snippet.title}</h4>
                    <p>
                        {video.snippet.description}
                    </p>
                </div>
            </div>
        )
    }

    return null;

}

export default VideoDetail;
