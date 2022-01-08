import axios from "axios";

const KEY = "AIzaSyBz0xhv5XKDRFyiLOzXw0L7CYYO8Mqff2c";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
