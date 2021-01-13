import React, { useContext } from 'react'
import { TimerContext } from "../contexts/TimerProvider";

const Display = () => {

    const { minutes, seconds, status } = useContext(TimerContext)


    return (
        <div className={`screen ${minutes < 1 ? 'is-active' : ''}`} id='display' >
            <div className='screen__title' id="timer-label">
                <h3 className='caption caption--size_3 caption--align_center caption--line_height_1'>
                    {status}
                </h3>
            </div>
            <div className='screen__time' id="time-left">
                <h3 className='caption caption--size_1 caption--align_center caption--line_height_1 caption--bold'>
                    {minutes}:{seconds}
                </h3>
            </div>
        </div >
    )
}

export default Display

