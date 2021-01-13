import React, { useContext } from 'react';
import { TimerContext } from '../contexts/TimerProvider'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fas, fab);



const Options = () => {
    const { session, breaker, addBreaker, removeBreaker, addSession, removeSession } = useContext(TimerContext)
    return (
        <div className='options'>
            <div className='row row--justify_between'>
                <div className='cell cell--6' id="break-label">
                    <div className='options__title'>
                        <h2 className='caption caption--size_4 caption--align_center'>Break Length</h2>
                    </div>
                    <div className='options__controls'>
                        <button id="break-decrement" onClick={() => { removeBreaker() }}>
                            <span>
                                <FontAwesomeIcon icon={['fas', 'arrow-down']} className="icon icon-down" />
                            </span>
                        </button>
                        <div id="break-length">
                            <h3 className='caption caption--size_3 caption--align_center'>
                                {breaker}
                            </h3>
                        </div>
                        <button id="break-increment" onClick={() => { addBreaker() }}>
                            <span>
                                <FontAwesomeIcon icon={['fas', 'arrow-up']} className="icon icon-up" />
                            </span>
                        </button>
                    </div>
                </div>
                <div className='cell cell--6' id="session-label">
                    <div className='options__title'>
                        <h2 className='caption caption--size_4 caption--align_center'>Session Length</h2>
                    </div>
                    <div className='options__controls'>
                        <button id="session-decrement" onClick={() => { removeSession() }}>
                            <span>
                                <FontAwesomeIcon icon={['fas', 'arrow-down']} className="icon icon-down" />
                            </span>
                        </button>
                        <div id="session-length">
                            <h3 className='caption caption--size_3 caption--align_center'>
                                {session}
                            </h3>
                        </div>
                        <button id="session-increment" onClick={() => { addSession() }}>
                            <span>
                                <FontAwesomeIcon icon={['fas', 'arrow-up']} className="icon icon-up" />
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Options