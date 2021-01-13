import React, { useState, useEffect } from "react";


export const TimerContext = React.createContext();

export const TimerContextProvider = ({ children }) => {
    const [breaker, setBreaker] = useState(5)
    const [session, setSession] = useState(25)
    const [status, setStatus] = useState('Session')

    const [minutes, setMinutes] = useState(session);
    const [seconds, setSeconds] = useState('00');

    const [pause, setPause] = useState(false)
    const [refresh, setRefresh] = useState(false)

    const pauseToggler = () => {
        setPause(!pause)
    }

    const statusToggler = () => {
        if (status === 'Session') {
            breaker < 10 ? setMinutes(`0${breaker}`) : setMinutes(breaker)
            setStatus('Break')
        } else {
            session < 10 ? setMinutes(`0${session}`) : setMinutes(session)
            setStatus('Session')
        }
    }

    const addBreaker = () => {
        if (breaker < 60 && !pause) {
            setBreaker(breaker + 1)
            if (status === 'Break') {
                minutes >= 9 ? setMinutes(`0${breaker + 1}`) : setMinutes(breaker + 1)
                setSeconds('00')
            }
        }
    }

    const removeBreaker = () => {
        if (breaker > 1 && !pause) {
            setBreaker(breaker - 1)
            if (status === 'Break') {
                minutes <= 10 ? setMinutes(`0${breaker - 1}`) : setMinutes(breaker - 1)
                setSeconds('00')
            }
        }
    }

    const addSession = () => {
        if (session < 60 && !pause) {
            setSession(session + 1)
            if (status === 'Session') {
                minutes >= 9 ? setMinutes(session + 1) : setMinutes(`0${session + 1}`)

                setSeconds('00')
            }
        }
    }

    const removeSession = () => {
        if (session > 1 && !pause) {
            setSession(session - 1)
            if (status === 'Session') {
                minutes <= 10 ? setMinutes(`0${session - 1}`) : setMinutes(session - 1)
                setSeconds('00')
            }
        }
    }
    const play = (value) => {
        value.play()
    }

    const refreshToggler = (value) => {
        setRefresh(!refresh)
        setSession(25)
        setBreaker(5)
        setStatus('Session')
        setMinutes(25)
        setSeconds('00')
        setPause(false)
        value.pause()
        value.currentTime = 0
    }

    useEffect(() => {
        if (pause) {
            let myInterval = setInterval(() => {
                if (+seconds > 0) {
                    seconds <= 10 && seconds > 0 ? setSeconds(`0${+seconds - 1}`) : setSeconds(+seconds - 1);
                }
                if (+seconds === 0) {
                    if (+minutes === 0) {
                        clearInterval(myInterval)
                        statusToggler()
                    } else {
                        setSeconds(59);
                        minutes <= 10 && minutes > 0 ? setMinutes(`0${+minutes - 1}`) : setMinutes(+minutes - 1);
                    }
                }
            }, 1000)
            return () => {
                clearInterval(myInterval);
            };
        }
    }, [pause, minutes, seconds]);
    return (
        <TimerContext.Provider value={{
            breaker,
            addBreaker: addBreaker,
            removeBreaker: removeBreaker,
            session,
            addSession: addSession,
            removeSession: removeSession,
            status,
            minutes,
            seconds,
            play: play,
            pause,
            pauseToggler: pauseToggler,
            refresh,
            refreshToggler: refreshToggler
        }}>
            {children}
        </TimerContext.Provider>
    )
}
