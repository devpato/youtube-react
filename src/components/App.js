import React from 'react';
import SearchBar from './SearchBar';
import youtube from './apis/youtube';
import VideoList from './VideoList';

class App extends React.Component {

    state = {
        videos: [],
        selectedVidoe: null
    }

    onTermSubmit= async(term)=>{
        console.log(term);
        const RESPONSE = await youtube.get('/search', {
            params: {
                q : term
            }
        })

       this.setState({videos: RESPONSE.data.items})
    }

    onVideoSelect=(video)=> {
        console.log('From the app.js', video);
    }

    render() {
        return (
            <div className="ui container"><SearchBar onFormSubmit={this.onTermSubmit}/>
                <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos}/>
            </div>
        );
    }
}

export default App;