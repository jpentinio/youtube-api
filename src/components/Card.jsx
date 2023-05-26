import React from "react";

export function YoutubeCard({
  item,
  thumbnail,
  title,
  channel,
  selectedVideo,
}) {
  return (
    <>
      <div
        className="flex col-12 h-28 mb-2 cursor-pointer"
        onClick={() => selectedVideo(item)}
      >
        <div className="col-5 h-full rounded-lg">
          {/**VIDEO THUMBNAIL*/}
          <img
            src={thumbnail}
            alt={""}
            className="rounded-lg"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
        <div className="col-7 p-2">
          <div
            className="text-sm font-bold"
            style={{
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {title} {/**TITLE*/}
          </div>
          <div className="pt-2 text-xs">{channel}</div>
          {/**CHANNEL*/}
        </div>
      </div>
    </>
  );
}
