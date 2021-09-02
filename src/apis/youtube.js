import axios from 'axios';

const KEY = 'AIzaSyA0Wf2SxnRo-AChvCjs5uh8yYCM8ETRyjY';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY,
  },
});
