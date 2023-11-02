import React from 'react';
import { styled } from 'styled-components';

function Main(props) {
    return (
        <VideoLayOut>
            <VideoContainer>
                <Video autoPlay='true' loop='loop' muted='true'>
                    <source src={require("../img/video1.mp4")} type='video/mp4'/>
                </Video>
            </VideoContainer>
        </VideoLayOut>

    );
}

const VideoLayOut = styled.div`
    
`;

const Video = styled.video`
    width: 100vw;
    max-height: 80vh;
    object-fit: cover;
`;

const VideoContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 998;
`;

export default Main;