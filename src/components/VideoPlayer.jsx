import React from "react";
import YouTube from "react-youtube";
import moment from "moment";
import { Button, useMediaQuery, useTheme } from "@mui/material";

export function VideoPlayer({ videoId, videoDetails }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const opts = {
    height: "600",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div>
      {/**VIDEO PLAYER */}
      <YouTube videoId={videoId} opts={opts} />
      {videoDetails && (
        <div className={`mt-4 ${isMobile && "px-2"}`}>
          <div className="font-semibold text-lg">
            {videoDetails.snippet?.title}
            {/**TITLE*/}
          </div>
          <div className="flex items-center mt-2">
            <div className="text-md">{videoDetails.snippet?.channelTitle}</div>{" "}
            {/**CHANNEL NAME */}
            <Button
              size="small"
              style={{
                borderRadius: 25,
                marginLeft: 20,
                backgroundColor: "#0f0f0f",
                textTransform: "capitalize",
                fontWeight: 500,
                padding: "6px 20px",
              }}
              variant="contained"
              disableElevation
            >
              Subscribe
            </Button>
          </div>
          <div className="bg-slate-200 w-full p-2 mt-2 rounded-lg">
            <div className="font-semibold">
              {moment(videoDetails.snippet?.publishedAt).fromNow()}
            </div>
            <div className="text-sm mt-2">
              {videoDetails.snippet?.description} {/**DESCRIPTION*/}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
