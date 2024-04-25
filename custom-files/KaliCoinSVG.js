// This import is required if you are defining react components in this module.
import React from 'react';
import Svg, { Rect, Path } from 'react-native-svg';

export const Icon = () => (
  <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <Rect width="20" height="20" rx="10" fill="#202020" />
    <Path
      d="M12.3503 15.5L9.63031 10.748C9.44898 10.9507 9.26231 11.1533 9.07031 11.356C8.88898 11.5587 8.69698 11.7667 8.49431 11.98V15.5H6.57431V4.62H8.49431V9.788C9.30498 8.86 9.99831 7.98 10.5743 7.148C11.1503 6.30533 11.6463 5.46267 12.0623 4.62H14.1583C13.6996 5.53733 13.209 6.40667 12.6863 7.228C12.1743 8.03867 11.6303 8.79067 11.0543 9.484L14.6703 15.5H12.3503Z"
      fill="white"
    />
  </Svg>
);
