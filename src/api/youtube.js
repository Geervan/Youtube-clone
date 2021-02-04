import axios from 'axios';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part : 'snippet',
        maxResuts :  5,
        key:  '[AIzaSyAp7jquVugM1CRYymAE0EzIy6cIBLU-zLk]'
    }
});