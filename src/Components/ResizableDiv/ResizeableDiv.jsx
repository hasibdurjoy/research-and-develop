import React from "react";
import { useState } from "react";
import SplitPane, { Pane } from "split-pane-react";
import "split-pane-react/esm/themes/default.css";

const ResizableDiv = () => {
  const [sizes, setSizes] = useState([100, "30%", "auto"]);

  const layoutCSS = {
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  const [height, setHeight] = useState(30);

  const [size, setSize] = useState({ x: 400, y: 300 });

  const handler = (mouseDownEvent) => {
    console.log(mouseDownEvent.clientX);
    const startSize = size;
    const startPosition = { x: mouseDownEvent.pageX, y: mouseDownEvent.pageY };

    function onMouseMove(mouseMoveEvent) {
      setSize((currentSize) => ({
        x: startSize.x - startPosition.x + mouseMoveEvent.pageX,
        y: startSize.y - startPosition.y + mouseMoveEvent.pageY,
      }));
    }
    function onMouseUp() {
      document.body.removeEventListener("mousemove", onMouseMove);
      // uncomment the following line if not using `{ once: true }`
      // document.body.removeEventListener("mouseup", onMouseUp);
    }

    document.body.addEventListener("mousemove", onMouseMove);
    document.body.addEventListener("mouseup", onMouseUp, { once: true });
  };
  return (
    <div>
      <h1>Trying to do resizable Div</h1>
      {/* <div style={{ height: 500 }}>
        <SplitPane split="horizontal" sizes={sizes} onChange={setSizes}>
          <div style={{ ...layoutCSS, background: "green" }}>pane2</div>
          <div style={{ ...layoutCSS, background: "blue" }}>pane2</div>
        </SplitPane>
      </div> */}
      {[1, 2, 3, 4].map((s) => {
        return (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                height: "100px",
                width: "300px",
                border: "2px solid red",
                resize: "vertical",
                overflow: "auto",
                maxHeight: "200px",
                minHeight: "50px",
                marginBottom: "10px",
              }}
            >
              I am resizable
            </div>
          </div>
        );
      })}
      {/* <div
        style={{
          height: "2px",
          // border: "2px solid green",
          cursor: "row-resize",
          backgroundColor: "red",
        }}
        onMouseDown={handler}
      ></div>
      <div
        id="container"
        style={{
          width: size.x,
          height: size.y,
          border: "2px solid green",
          cursor: "row-resize",
        }}
        // onMouseDown={handler}
      ></div>
      <div
        style={{
          height: "2px",
          // border: "2px solid green",
          cursor: "row-resize",
          backgroundColor: "red",
        }}
        onMouseDown={handler}
      ></div> */}
    </div>
  );
};

export default ResizableDiv;
