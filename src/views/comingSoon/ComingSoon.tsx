'use client'
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import rockCanCodeLogo from 'public/logo-rockcancode.png';

export const ComingSoon = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
    });

    useEffect(() => {
        const countDownDate = new Date("Mar 31, 2025 00:00:00").getTime();

        const updateCountdown = () => {
            const now = new Date().getTime();
            const distance = countDownDate - now;

            if (distance < 0) {
                clearInterval(interval);
                return;
            }

            setTimeLeft({
                days: String(Math.floor(distance / (1000 * 60 * 60 * 24))).padStart(2, '0'),
                hours: String(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0'),
                minutes: String(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0'),
                seconds: String(Math.floor((distance % (1000 * 60)) / 1000)).padStart(2, '0'),
            });
        };

        const interval = setInterval(updateCountdown, 1000);
        updateCountdown();

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="bg-gradient-to-b from-gray-200 via-gray-400 to-gray-600 h-screen flex flex-col items-center justify-center text-white">
            <h1 className="text-4xl font-bold mb-6 text-black">Coming Soon</h1>
            <Image src={rockCanCodeLogo} width={400} height={400} alt='logo rock can code' />
            <p className="text-black text-xl mt-6">
                We're working hard to bring you something amazing. Stay tuned!
            </p>
            <div className="flex text-2xl my-6 text-black">
                <div className="mr-2">
                    <span className="font-semibold">{timeLeft.days}</span> Days
                </div>
                <div className="mr-2">
                    <span className="font-semibold">{timeLeft.hours}</span> Hours
                </div>
                <div className="mr-2">
                    <span className="font-semibold">{timeLeft.minutes}</span> Minutes
                </div>
                <div>
                    <span className="font-semibold">{timeLeft.seconds}</span> Seconds
                </div>
            </div>

            <div className="mt-4 space-x-4 text-black">
                <a href="#" className="text-gray-700 hover:text-black">
                    <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="text-gray-700 hover:text-black">
                    <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-gray-700 hover:text-black">
                    <i className="fab fa-instagram"></i>
                </a>
            </div>
        </div>

    );
};
