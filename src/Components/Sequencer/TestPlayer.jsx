import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import captureVideoFrame from "./capture-video-frame.js";
import * as Icon from "react-feather";

import CanvasFrame from "../CanvasFrame/CanvasFrame.component";
import { Button, Modal, TextField } from "@material-ui/core";
import useStyles from "./player.styles";

function Player(props) {
  const [playing, setPlaying] = useState(false);
  const [image, setImage] = useState(null);
  const [nframe, setNframe] = useState(false);
  const [pframe, setPframe] = useState(false);
  const [canvasModal, setCanvasModal] = useState(false);
  const [progress, setProgress] = useState("00:00");
  const [progressInSec, setProgressInSec] = useState("0");
  const [showControls, setShowControls] = useState(false); //player controls
  const [FPS, setFPS] = useState(25);
  const canvasModalToggle = () => setCanvasModal(!canvasModal);
  const classes = useStyles();
  const frameRate = FPS; // change fps dynamically
  if (props.image) {
    setImage(props.image);
  }

  // states of seekbar
  const [totalDuration, setTotalDuration] = useState("");
  const [seekBarArray, setSeekBarArray] = useState([]);
  const [currentLength, setCurrentLength] = useState(0);
  const [seekBarPositionOnClick, setSeekBarPositionOnClick] = useState(0);
  const [annotationTimeStamp, setAnnotationTimeStamp] = useState([]);

  // to get the seekbar width of one second
  function generateSeekBar() {
    let totalDurationNum = parseFloat(totalDuration);
    const oneSecond = 96.5 / totalDurationNum;
    let arr = [];
    for (let i = 0; i < totalDurationNum; i++) {
      arr.push(oneSecond);
    }
    setSeekBarArray(arr);
  }

  // function to get annotation timestamp
  const getTimeStamp = () => {
    // to hold the array of timestamp with number and characters from comments
    let timeStampArray = [];

    // to hold the array of timestamps converted to number
    let timeStampArray2 = [];

    // get timestamp string from comments
    props.comments?.map((eachComment) => {
      let splitComment = eachComment.description.replace(/<p>/, ":").split(":");
      timeStampArray.push(splitComment);
    });
    console.log("timeStampArray", timeStampArray);

    // converting timestamp string array to integer array
    timeStampArray.map((eachItem) => {
      let timeStampInNumber = [];
      eachItem.map((i) => {
        timeStampInNumber.push(parseInt(i));
      });
      if (!isNaN(timeStampInNumber[0])) timeStampArray2.push(timeStampInNumber);
    });
    console.log("timeStampArray2", timeStampArray2);

    // to hold the final calculated time
    let finalTimeStamp = [];

    timeStampArray2.map((i) => {
      if (i.length == 4) {
        // calculating array of time from H:M:S to seconds
        let timeinsec = i[0] * 60 * 60 + i[1] * 60 + i[2];
        finalTimeStamp.push();
      } else if (i.length === 3) {
        // calculating array of time from M:S to seconds
        let timeinsec = i[0] * 60 + i[1];
        finalTimeStamp.push(timeinsec);
      }
    });
    console.log("finalTimeStamp", finalTimeStamp);
    setAnnotationTimeStamp(finalTimeStamp);
  };

  useEffect(() => {
    getTimeStamp();
  }, [props.comments]);

  useEffect(() => {
    let curLength = 0;
    seekBarArray.map((eachSize, index) =>
      index <= progressInSec ? setCurrentLength((curLength += eachSize)) : ""
    );
  }, [progress]);

  useEffect(() => {
    generateSeekBar();
  }, [totalDuration]);

  let player = null;
  useEffect(() => {
    if (props.seekTime) {
      player.seekTo(props.seekTime, "seconds");
      setPlaying(false);
    }
  }, [props.seekTime]);

  useEffect(() => {
    player.seekTo(player.getCurrentTime() - 0.1, "seconds");
  }, [pframe]);

  useEffect(() => {
    player.seekTo(player.getCurrentTime() + 0.1, "seconds");
  }, [nframe]);

  return (
    <>
      <div className="player-wrapper">
        <Modal open={canvasModal} className={classes.modal}>
          <div className={classes.canvasDiv}>
            <div className={classes.modalHead}>
              <h1>Canvas</h1>
              <Icon.X onClick={canvasModalToggle} />
            </div>
            <CanvasFrame
              users={props.users}
              setCommentList={props.setList}
              isUpdate={props.setList ? true : false}
              image={props.screenshot}
              assetId={props.assetId}
              toggle={canvasModalToggle}
              fetchComments={props.fetchComments}
              nframe={nframe}
              setNframe={setNframe}
              pframe={pframe}
              setPframe={setPframe}
              version_id={props.version_id}
              progress={progress}
            />
          </div>
        </Modal>

        <div style={{ position: "relative", paddingTop: "56.25%" }}>
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
              setTotalDuration(e);
            }}
            onContextMenu={(e) => e.preventDefault()}
            className="react-player"
            url={props.data ? props.data : ""}
            playing={playing}
            width="100%"
            height="100%"
            style={{ position: "absolute", top: "0", left: "0" }}
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
              setSeekBarPositionOnClick(0);
            }}
          />
        </div>
      </div>
      {process.env.NODE_ENV === "test" || "stage" ? (
        <div style={{ position: "relative" }}>
          <Button onClick={() => setPlaying(!playing)}>Play</Button>

          <div
            style={{ display: "flex", marginTop: "10px", cursor: "pointer" }}
          >
            {seekBarArray.map((eachSize, index) => {
              return (
                <div
                  onClick={(e) => {
                    setPlaying(false);
                    player.seekTo(index);
                    setSeekBarPositionOnClick(e.pageX - 163);
                  }}
                  style={{
                    height: "4px",
                    width: eachSize + "%",
                    backgroundColor: annotationTimeStamp?.includes(index)
                      ? "red"
                      : "grey",
                  }}
                  key={index}
                />
              );
            })}
          </div>
          <div
            style={{
              width: "10px",
              height: "10px",
              backgroundColor: "white",
              borderRadius: "50px",
              position: "relative",
              bottom: "7px",
              left: seekBarPositionOnClick || currentLength + "%",
            }}
          />
        </div>
      ) : (
        ""
      )}

      <div style={{ textAlign: "center", marginTop: "13px" }}>
        <Button
          onClick={() => {
            setPlaying(false);
            player.seekTo(
              Math.min(
                player.getDuration(),
                player.getCurrentTime() - 1 / frameRate
              ),
              "seconds"
            );
          }}
          className={classes.ChevronsBtn}
        >
          <Icon.ChevronsLeft />
        </Button>
        <Button
          onClick={() => {
            const frame = captureVideoFrame(player.getInternalPlayer());
            props.setScreenshot(frame.dataUri);
            setCanvasModal(true);
          }}
          className={classes.annotateButton}
        >
          <Icon.Edit style={{ strokeWidth: "1.2px" }} />
        </Button>
        <Button
          onClick={() => {
            setPlaying(false);
            player.seekTo(
              Math.min(
                player.getDuration(),
                player.getCurrentTime() + 1 / frameRate
              ),
              "seconds"
            );
          }}
          className={classes.ChevronsBtn}
        >
          <Icon.ChevronsRight />
        </Button>
      </div>
    </>
  );
}

export default Player;
