
import React, { useContext, useRef } from 'react';
import { TimerContext } from "../contexts/TimerProvider";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fas, fab);




const Control = () => {
    const { minutes, seconds, pauseToggler, refreshToggler, play } = useContext(TimerContext)
    const sound = useRef();
    if (seconds === '00' && minutes === '00') {
        play(sound.current)
    }
    return (
        <div className='control'>
            <div className="control__buttons">
                <button id="start_stop"
                    onClick={() => {
                        pauseToggler()
                    }}>
                    <FontAwesomeIcon icon={['fas', 'play']} className="icon icon-down" />
                    <FontAwesomeIcon icon={['fas', 'pause']} className="icon icon-down" />
                </button>
                <button id="reset" onClick={() => {
                    refreshToggler(sound.current)
                }}>
                    <FontAwesomeIcon icon={['fas', 'sync-alt']} className="icon icon-down" />
                </button>
            </div>
            <div className='audio'>
                <audio id='beep' src='https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav'
                    ref={sound}></audio>
            </div>
        </div>
    )
}
export default Control