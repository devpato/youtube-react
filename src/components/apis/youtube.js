import axios from "axios";

const KEY = 'AIzaSyCHITA0aj4hs02BhwJLS6eQ68GnZ2VDK_U';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})