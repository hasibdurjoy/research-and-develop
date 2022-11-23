import React, { useState } from "react";
import { Resizable } from "re-resizable";

const ReResizable = () => {
  return (
    <div>
      {["layer1", "layer2"].map((s) => {
        return <Resize s={s} />;
      })}
    </div>
  );
};

export default ReResizable;

const Resize = ({ s }) => {
  const [height, setHeight] = useState(
    document.getElementById(s)?.offsetHeight || 0
  );
  const style = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "solid 1px #ddd",
    background: "#f0f0f0",
    marginTop: "10px",
  };
  return (
    <div>
      <h3>
        {s} height is :{height} px
      </h3>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        id={s}
      >
        <Resizable
          style={style}
          defaultSize={{
            width: 200,
            height: 100,
          }}
          maxHeight="300px"
          minHeight="50px"
          minWidth="300px"
          maxWidth="300px"
          onResize={() => {
            console.log(s, document.getElementById(s).offsetHeight + "px");
            setHeight(document.getElementById(s).offsetHeight);
          }}
        >
          <div>I am resizable try it</div>
        </Resizable>
        {/* <div
          style={{
            height: `${height}px`,
            width: "400px",
            backgroundColor: "aquamarine",
          }}
        ></div> */}
      </div>
    </div>
  );
};
