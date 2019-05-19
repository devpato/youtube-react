import React from 'react';
import SearchBar from './SearchBar';
import youtube from './apis/youtube';
import VideoList from './apis/VideoList';

class App extends React.Component {

    state = {
        videos: []
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
    render() {
        return (
            <div className="ui container"><SearchBar onFormSubmit={this.onTermSubmit}/>
                <VideoList videos={this.state.videos}/>
            </div>
        );
    }
}

export default App;