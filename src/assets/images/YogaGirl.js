import React from 'react';
import Svg, { Image, Rect, Defs, Pattern} from 'react-native-svg';

const YogaGirl = () => {
    return (
        <Svg     width="192" height="149" viewBox="0 0 192 149">
            <Defs>
                <Pattern id="pattern" preserveAspectRatio="none" width="100%" height="100%" viewBox="0 0 1207 939">
                    <Image 
                    
                    width="1207" 
                    height="939" 
                    href={require('./yogaGirl.png')}
                    />
                </Pattern>
            </Defs>
            <Rect id="_1" data-name="1" width="192" height="149" fill="url(#pattern)" />
        </Svg>

    );
}

export default YogaGirl;