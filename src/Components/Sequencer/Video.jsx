import { Composition } from "remotion";
import Style from "./Style";

// we cannot use dynamic imports on codesandbox

export const Video = () => {
  return (
    <Composition
      id="style"
      component={Style}
      durationInFrames={200}
      fps={60}
      height={1080}
      width={1080}
    />
  );
};
