import React from "react";
import { Appbar } from "./components/Appbar";
import "./App.css";
import { Skeleton, useMediaQuery, useTheme } from "@mui/material";
import { YoutubeCard } from "./components/Card";
import axios from "./axios";
import { VideoPlayer } from "./components/VideoPlayer";

function App() {
  const [loading, setLoading] = React.useState(false);
  const [items, setItems] = React.useState([]);
  const [selected, setSelected] = React.useState("");
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  //Search videos based on keyword inputed from Youtube API
  const handleSearch = (value) => {
    try {
      setLoading(true);
      setTimeout(async () => {
        const res = await axios.get(
          "/search",
          {
            params: {
              q: value,
            },
          },
          500
        );

        if (res.status === 200) {
          setItems(res.data.items);
          setSelected(res.data.items[0]);
          setLoading(false);
        }
      });
    } catch (e) {
      console.log(e);
    }
  };

  //SHOW SELECTED VIDEO
  const selectedVideo = (value) => {
    setSelected(value);
  };

  return (
    <div className="App">
      {/*Appbar that includes Search field*/}
      <Appbar handleSearch={handleSearch} />
      <div
        className={`lg:py-20 py-10 ${
          isMobile ? "px-0" : "px-10"
        } min-h-screen bg-slate-100 col-12 lg:flex gx-4`}
      >
        <div className={`col-12 col-md-9 ${isMobile ? "pr-0" : "pr-8"}`}>
          {loading ? (
            <Skeleton variant="rectangular" width="100%" height="600px" />
          ) : (
            <VideoPlayer
              videoId={selected.id?.videoId}
              videoDetails={selected}
            />
          )}
        </div>
        <div className={`col-12 col-md-3 ${isMobile && "px-2 mt-2"}`}>
          {loading
            ? [...Array(5)].map((i) => (
                <Skeleton
                  variant="rectangular"
                  height="120px"
                  className="w-full mb-2 rounded-lg"
                />
              ))
            : items.length > 0 &&
              items
                .filter(
                  (item, index) => item.id.videoId !== selected.id.videoId
                )
                .map((item) => (
                  <YoutubeCard
                    item={item}
                    loading={loading}
                    thumbnail={item.snippet?.thumbnails.high.url}
                    title={item.snippet?.title}
                    channel={item.snippet?.channelTitle}
                    selectedVideo={selectedVideo}
                  />
                ))}
        </div>
      </div>
    </div>
  );
}

export default App;
