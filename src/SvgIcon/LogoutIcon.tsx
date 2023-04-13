import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

interface Props {
  color: string;
  size: number;
}

function LogoutIcon(props: Props) {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path d="M5 5H12V3H3V21H12V19H5V5Z" fill="black" />
      <Path d="M21 12L17 8V11H9V13H17V16L21 12Z" fill="black" />
    </Svg>
  );
}

export default LogoutIcon;
