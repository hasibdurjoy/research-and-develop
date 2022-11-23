import React, { useState } from "react";
import { Stage, Layer, Text } from "react-konva";

const Draggable = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [x, setX] = useState(50);
  const [y, setY] = useState(50);
  return (
    <div>
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          <div
            style={{ height: "50px", width: "200px", backgroundColor: "red" }}
          ></div>
          <Text
            style={{ height: "50px", width: "200px", backgroundColor: "red" }}
            text="Draggable Text"
            x={x}
            y={y}
            draggable
            fill={isDragging ? "green" : "black"}
            onDragStart={() => {
              setIsDragging(true);
            }}
            onDragEnd={(e) => {
              setIsDragging(false);
              setX(e.target.x());
              setY(e.target.y());
            }}
          />
        </Layer>
      </Stage>
    </div>
  );
};

export default Draggable;
