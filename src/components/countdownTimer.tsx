'use client';

import { useState, useEffect } from 'react';

const CountdownTimer = () => {
    const [time, setTime] = useState(24 * 60 * 60);

    useEffect(() => {
        const getStartTime = () => {
            if (typeof window !== 'undefined') {
                const startTime = localStorage.getItem('startTime');
                const now = Date.now();

                if (startTime) {
                    const elapsed = Math.floor((now - Number(startTime)) / 1000);
                    return Math.max(24 * 60 * 60 - elapsed, 0);
                } else {
                    localStorage.setItem('startTime', String(now));
                    return 24 * 60 * 60;
                }
            }
            return 24 * 60 * 60;
        };

        setTime(getStartTime());

        const intervalId = setInterval(() => {
            setTime(prevTime => prevTime > 0 ? prevTime - 1 : 0);
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    const hours = `${Math.floor(time / 3600)}`.padStart(2, '0');
    const minutes = `${Math.floor((time % 3600) / 60)}`.padStart(2, '0');
    const seconds = `${time % 60}`.padStart(2, '0');

    return (
        <div className='bg-red-400 text-white font-semibold text-lg py-2 px-4 rounded-xl'>
            <span > Ends In: </span>
            <span>{hours}</span> : {" "}
            <span>{minutes}</span> : {" "}
            <span>{seconds}</span>
        </div>
    );
};

export default CountdownTimer;
