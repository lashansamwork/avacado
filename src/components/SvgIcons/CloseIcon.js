import React from 'react';
import {TouchableOpacity, View, Image} from 'react-native';
import layout from '../../theme/layout';
import Svg, {Defs, ClipPath, Rect, Path, G} from 'react-native-svg';

const CloseIcon = ({style}) => {
  return (
    <View style={style}>
      <Svg
        id="Component_109_1"
        data-name="Component 109 – 1"
        width="31.688"
        height="31.688"
        viewBox="0 0 31.688 31.688">
        <Defs>
          <ClipPath id="clip-path">
            <Rect width="24" height="24" fill="none" />
          </ClipPath>
        </Defs>
        <G id="add-button">
          <Path
            id="Oval-8"
            d="M15.844,31.688A15.844,15.844,0,1,0,0,15.844,15.844,15.844,0,0,0,15.844,31.688Z"
            fill="#ebbdbd"
            fill-rule="evenodd"
          />
        </G>
        <G
          id="Icon_Close_Rounded"
          data-name="Icon / Close / Rounded"
          transform="translate(4.344 4)"
          clip-path="url(#clip-path)">
          <Rect id="Box" width="24" height="24" fill="none" />
          <Path
            id="Path_2016"
            data-name="Path 2016"
            d="M111.8,3.3a.967.967,0,0,0-1.4,0l-4.9,4.9-4.9-4.9a.99.99,0,0,0-1.4,1.4l4.9,4.9-4.9,4.9a.99.99,0,0,0,1.4,1.4l4.9-4.9,4.9,4.9a.99.99,0,1,0,1.4-1.4l-4.9-4.9,4.9-4.9A.967.967,0,0,0,111.8,3.3Z"
            transform="translate(-94 2)"
            fill="#1e535a"
          />
        </G>
      </Svg>
    </View>
  );
};

export default CloseIcon;
