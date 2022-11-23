import React from "react";

const SeekVideo = () => {
  return (
    <div>
      <video
        id="videojs-sprite-thumbnails-player"
        class="video-js vjs-default-skin"
        data-setup='{"aspectRatio":"12:5"}'
        controls
      >
        <source src="//vjs.zencdn.net/v/oceans.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default SeekVideo;
