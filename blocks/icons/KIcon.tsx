// This import is required if you are defining react components in this module.
import React from "react";

import Svg, { Rect, Path } from "react-native-svg";
// <KaliSvgIcon />
export const Icon = () => (
  <Svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <Rect x="0.5" y="0.5" width="21" height="21" rx="10.5" stroke="white" />
    <Path
      d="M15.0174 6.48V7.68L8.89742 10.32V11.22L15.0174 13.86V15.12L8.89742 12.48V15H7.69742V6.6H8.89742V9.12L15.0174 6.48Z"
      fill="white"
    />
  </Svg>
);
