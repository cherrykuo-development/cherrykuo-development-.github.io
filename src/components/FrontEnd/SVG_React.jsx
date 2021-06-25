import React, { useEffect, useRef } from 'react';
import { gsap } from '../../constant/gsap';

const SVG_React = () => {
    const section = useRef(null);
    const dot = useRef(null);
    const circle01 = useRef(null);
    const circle02 = useRef(null);
    const circle03 = useRef(null);

    useEffect(() => {
        const defaults = {
            opacity: 0,
            transformOrigin: '50% 50%',
            duration: 0.5,
            ease: 'back.out(1.2)',
        };
        const scrollTrigger = {
            trigger: section.current,
            start: 'top 60%',
            end: 'bottom top',
            toggleActions: 'restart none none reverse',
        };
        const scrollTl = gsap.timeline({ defaults, scrollTrigger });
        scrollTl
            .from(circle01.current, {
                scale: 0.8,
                rotation: 360,
                duration: 0.7,
            })
            .from(
                circle02.current,
                {
                    rotation: -60,
                },
                '-=.3'
            )
            .from(
                circle03.current,
                {
                    rotation: 60,
                },
                '-=.5'
            )
            .from(
                dot.current,
                {
                    scaleX: 5.5,
                    scaleY: 1.9,
                },
                '-=.5'
            );
    }, []);

    return (
        <svg viewBox='0 0 478 486' fill='none' xmlns='http://www.w3.org/2000/svg' ref={section}>
            <g ref={circle01}>
                <path
                    d='M239 330.288C365.785 330.288 468.565 291.044 468.565 242.636C468.565 194.227 365.785 154.983 239 154.983C112.215 154.983 9.43481 194.227 9.43481 242.636C9.43481 291.044 112.215 330.288 239 330.288Z'
                    stroke='#61DAFB'
                    strokeWidth='18'
                />
            </g>
            <g ref={circle02}>
                <path
                    d='M163.089 286.461C226.482 396.261 311.857 465.649 353.781 441.445C395.704 417.24 378.3 308.609 314.907 198.809C251.514 89.0099 166.139 19.6216 124.216 43.8261C82.2921 68.0306 99.6964 176.662 163.089 286.461Z'
                    stroke='#61DAFB'
                    strokeWidth='18'
                />
            </g>
            <g ref={circle03}>
                <path
                    d='M163.089 198.809C99.6964 308.609 82.2921 417.24 124.215 441.445C166.139 465.649 251.514 396.261 314.907 286.461C378.3 176.662 395.704 68.0305 353.781 43.826C311.857 19.6215 226.482 89.0099 163.089 198.809Z'
                    stroke='#61DAFB'
                    strokeWidth='18'
                />
            </g>
            <g ref={dot}>
                <path
                    d='M238.999 285.418C262.627 285.418 281.782 266.264 281.782 242.635C281.782 219.007 262.627 199.853 238.999 199.853C215.371 199.853 196.216 219.007 196.216 242.635C196.216 266.264 215.371 285.418 238.999 285.418Z'
                    fill='#61DAFB'
                />
            </g>
        </svg>
    );
};

export default SVG_React;
