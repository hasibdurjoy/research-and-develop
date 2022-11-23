import * as React from "react";
import PropTypes from "prop-types";
import Slider, { SliderThumb } from "@mui/material/Slider";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import Box from "@mui/material/Box";

function ValueLabelComponent(props) {
  const { children, value } = props;

  return (
    <Tooltip enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>
  );
}

ValueLabelComponent.propTypes = {
  children: PropTypes.element.isRequired,
  value: PropTypes.number.isRequired,
};

const PrettoSlider = styled(Slider)({
  color: "transparent",
  backgroundImage: `url("https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg")`,
  backgroundRepeat: "repeat-x",
  backgroundSize: "100px",
  height: 30,
  "& .MuiSlider-track": {
    border: "none",
  },
  "& .MuiSlider-thumb": {
    height: 100,
    width: 4,
    backgroundColor: "red",
    "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
      boxShadow: "inherit",
    },
    "&:before": {
      display: "none",
    },
  },
  "& .MuiSlider-valueLabel": {
    lineHeight: 1.2,
    fontSize: 12,
    background: "unset",
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: "50% 50% 50% 0",
    backgroundColor: "#52af77",
    transformOrigin: "bottom left",
    transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
    "&:before": { display: "none" },
    "&.MuiSlider-valueLabelOpen": {
      transform: "translate(50%, -100%) rotate(-45deg) scale(1)",
    },
    "& > *": {
      transform: "rotate(45deg)",
    },
  },
});

export default function SeekSlider(props) {
  const [value, setValue] = React.useState(0);
  React.useEffect(() => {
    const avgTime = 100 / props.totalDuration;
    setValue(Math.floor(props.progressInSec * avgTime));
  }, [props.progressInSec]);

  return (
    <Box sx={{ width: 1000, mx: "auto" }}>
      <Box sx={{ m: 3 }} />
      <PrettoSlider
        valueLabelDisplay="auto"
        aria-label="pretto slider"
        defaultValue={0}
        onChange={(e) => {
          console.log(e.target.value);
          setValue(e.target.value);
          props.handleSeek((e.target.value / 100) * props.totalDuration);
        }}
        value={value}
      />
    </Box>
  );
}
