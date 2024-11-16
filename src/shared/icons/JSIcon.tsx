import { DefaultIconProps } from "./model";

export const JSIcon = ({ color, transitionDuration, size }: DefaultIconProps) => {
  return (
    <svg width={`${size || 438}`} height={`${size || 438}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 438 438">
      <g>
        <title>background</title>
        <rect fill="#fff" id="canvas_background" height="440" width="440" y="-1" x="-1" />
        <g display="none" overflow="visible" y="0" x="0" height="100%" width="100%" id="canvasGrid">
          <rect fill={color} stroke-width="0" y="0" x="0" height="100%" width="100%" />
        </g>
      </g>
      <g>
        <title>Layer 1</title>
        <rect
          id="svg_1"
          height="438"
          width="438"
          y="0"
          x="0"
          stroke-width="0"
          stroke="#000"
          fill={color}
          style={{ transition: `all ${transitionDuration || "3000"}ms` }}
        />
        <line
          stroke="#ffffff"
          stroke-width="40"
          stroke-linecap="undefined"
          stroke-linejoin="undefined"
          id="svg_2"
          y2="300.18973"
          x2="171"
          y1="135"
          x1="171"
          fill="none"
        />
        <line
          stroke-linecap="undefined"
          stroke-linejoin="undefined"
          id="svg_4"
          y2="292"
          x2="182.17103"
          y1="292"
          x1="109"
          stroke-width="40"
          stroke="#ffffff"
          fill="none"
        />
        <line
          stroke-linecap="undefined"
          stroke-linejoin="undefined"
          id="svg_6"
          y2="301.08215"
          x2="105"
          y1="228"
          x1="105"
          fill-opacity="null"
          stroke-opacity="null"
          stroke-width="40"
          stroke="#ffffff"
          fill="none"
        />
        <rect stroke="#ffffff" id="svg_7" height="3" width="56" y="154" x="267" stroke-width="40" fill="none" />
        <rect stroke="#ffffff" id="svg_8" height="31" width="3" y="170" x="249" stroke-width="40" fill="none" />
        <line
          stroke="#ffffff"
          stroke-linecap="null"
          stroke-linejoin="null"
          id="svg_9"
          y2="217"
          x2="329.22838"
          y1="217"
          x1="244"
          fill-opacity="null"
          stroke-opacity="null"
          stroke-width="35"
          fill="none"
        />
        <rect stroke="#ffffff" id="svg_12" height="45" width="3" y="232" x="322" stroke-width="40" fill="none" />
        <line
          stroke="#ffffff"
          stroke-linecap="null"
          stroke-linejoin="null"
          id="svg_13"
          y2="296"
          x2="326.22838"
          y1="296"
          x1="241"
          fill-opacity="null"
          stroke-opacity="null"
          stroke-width="35"
          fill="none"
        />
      </g>
    </svg>
  );
};
