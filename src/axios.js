import axios from "axios";

export default axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 6,
    key: "AIzaSyAC1crIoS0H9mJWR2T9fVDtsfz-VuYdZgs",
  },
});
