import React, { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";
import VideoEditingTimeline from "video-editing-timeline-react";
import { Video } from "./Video";
import SeekBar from "react-seekbar-component";
import "react-seekbar-component/dist/index.css";
import SeekSlider from "./SeekSlider";
import { Box } from "@mui/material";
import MyVideo from "./Facebook_4.mp4";
import MyVideo2 from "./Linkin Park -  Numb (Lyrics).mp4";

const Sequencer = () => {
  const [playerOne, setPlayerOne] = useState(true);
  const [playerTwo, setPlayerTwo] = useState(false);
  // const [videoUrl, setVideoUrl] = useState("https://youtu.be/7wtfhZwyrcc");
  const [videoUrl, setVideoUrl] = useState(MyVideo);
  // url='https://stream.mux.com/6fiGM5ChLz8T66ZZiuzk1KZuIKX8zJz00/medium.mp4'
  const [value, setValue] = useState(0);

  const config = {
    mode: "stander",
    canvasWidth: 2000,
    canvasHeight: 100,
    minimumScale: 10,
    minimumScaleTime: 1,
  };

  const videoEl = useRef(null);

  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch((error) => {
        console.error("Error attempting to play", error);
      });
  };

  useEffect(() => {
    attemptPlay();
  }, []);

  const [progress, setProgress] = useState("00:00");
  const [progressInSec, setProgressInSec] = useState("0");
  let player = null;
  const [playing, setPlaying] = useState(false);
  const [showControls, setShowControls] = useState(false);
  const [totalDuration, setTotalDuration] = useState("");
  const handleSeek = (val) => {
    player.seekTo(val);
  };

  const image = [
    "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv-XzZJ0liF3xqTopH1BQ330Nkd9F3K-Itm33SrZc21X3y00DnXBs_GvB8TQbmV9gmjkI&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPrWps2upGevuvXZxkp1g52wwo0C00x6BZFKk-hJV5SQvcylGNjr0hnDgO0btsRBnWwuc&usqp=CAU",
  ];

  return (
    <div className="mx-auto text-center">
      <h2>This is for testing sequencer</h2>
      <Box sx={{ mx: "auto" }}>
        <ReactPlayer
          ref={(p) => {
            player = p;
          }}
          config={{
            file: {
              attributes: {
                crossOrigin: "anonymous",
              },
            },
          }}
          onDuration={(e) => {
            // console.log(e);
            setTotalDuration(e);
          }}
          onContextMenu={(e) => e.preventDefault()}
          className="react-player"
          url={videoUrl}
          playing={playing}
          width="800px"
          height="500px"
          style={{
            position: "relative",
            top: "0",
            left: "25%",
            right: "25%",
            border: "2px solid black",
            borderRadius: "20px",
            marginBottom: "5px",
          }}
          controls={showControls}
          onMouseEnter={() => setShowControls(true)}
          onMouseLeave={() => setShowControls(false)}
          onProgress={(p) => {
            setProgressInSec(p.playedSeconds);
            let seconds = 0;
            let minutes = 0;
            if (p.playedSeconds % 60) {
              minutes = parseInt(p.playedSeconds / 60);
              seconds = parseInt(p.playedSeconds % 60);
              if (seconds < 10) {
                seconds = `0${seconds}`;
              }
            }
            let time = `${minutes}:${seconds}`;
            setProgress(time);
          }}
          onPause={() => {
            setPlaying(false);
          }}
          onPlay={() => {
            setPlaying(true);
          }}
          /* onEnded={() => {
            setVideoUrl(MyVideo2);
            setPlaying(true);
          }} */
          onEnded={() => {
            setVideoUrl("https://youtu.be/mWRsgZuwf_8");
          }}
        />
      </Box>
      <SeekSlider
        progressInSec={progressInSec}
        totalDuration={totalDuration}
        handleSeek={handleSeek}
      />
      {/* {image.map((sI) => {
        console.log(sI);
        return (
          <div style={{ display: "flex" }}>
            <SeekSlider
              progressInSec={progressInSec}
              totalDuration={totalDuration}
              handleSeek={handleSeek}
              sI={sI}
            />
          </div>
        );
      })} */}
      {/* <div style={{ width: "100%", overflowX: "scroll" }} className="container">
        <VideoEditingTimeline config={config} />
      </div> */}
      {/* <video
        style={{ maxWidth: "100%", width: "800px", margin: "0 auto" }}
        playsInline
        controls
        alt="All the devices"
        src={videoUrl}
        ref={videoEl}
        onProgress={(p) => {
          setProgressInSec(p.playedSeconds);
          let seconds = 0;
          let minutes = 0;
          if (p.playedSeconds % 60) {
            minutes = parseInt(p.playedSeconds / 60);
            seconds = parseInt(p.playedSeconds % 60);
            if (seconds < 10) {
              seconds = `0${seconds}`;
            }
          }
          let time = `${minutes}:${seconds}`;
          setProgress(time);
          console.log(time);
        }}
      /> */}
      {/* <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/_l-bltvdQjU"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      /> */}
      <div
        style={{
          height: "60px",
          width: "500px",
          border: "2px solid red",
          marginTop: "20px",
        }}
      >
        {[...Array(500 / 50 - 1)].map((star, i) => {
          return (
            <img
              src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
              alt=""
              height="55px"
              width="50px"
              // style={{ paddingRight: "3px" }}
            />
          );
        })}
      </div>
      <div>
        <SeekBar
          getNumber={setValue}
          width="60%"
          backgroundColor="gray"
          fillColor="red"
          fillSecondaryColor="blue"
          headColor="white"
          headShadow="white"
          headShadowSize={6}
          progress={89}
        />
      </div>
    </div>
  );
};

export default Sequencer;
