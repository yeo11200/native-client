import React from 'react';
import {LivePlayer} from "react-native-live-stream";


const Stream = () => {

    const player = new React.useRef();

    return(
        <LivePlayer 
            source={{uri:"rtmp://a.rtmp.youtube.com/live2"}}
            ref={player}
            paused={false}
            muted={false}
            bufferTime={300}
            maxBufferTime={1000}
            resizeMode={"contain"}
            onLoading={()=>{}}
            onLoad={()=>{}}
            onEnd={()=>{}}
        />
    )
}

export default Stream;