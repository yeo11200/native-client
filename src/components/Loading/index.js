import React from 'react';
import { ImageBackground } from "react-native"

import image from '../../asstes/images/splash.png';

function Loading() {
    return (
            <ImageBackground source={image} style={{width:"100%",height:"100%"}} />
    );
}

export default Loading;
