import React, { useEffect, useRef } from 'react';
import { gsap } from '../../constant/gsap';

const SVG_TailwindCss = () => {
    const section = useRef(null);
    const top = useRef(null);
    const bottom = useRef(null);

    useEffect(() => {
        const defaults = {
            scale: 0,
            transformOrigin: '50% 50%',
            duration: 1,
            ease: 'bounce.out',
        };
        const scrollTrigger = {
            trigger: section.current,
            start: 'top 60%',
            end: 'bottom top',
            toggleActions: 'restart none none reverse',
        };
        const scrollTl = gsap.timeline({ defaults, scrollTrigger });
        scrollTl
            .from(top.current, {
                x: '-50%',
                y: '50%',
            })
            .from(
                bottom.current,
                {
                    x: '50%',
                    y: '-50%',
                },
                '-=1'
            );
    }, []);

    return (
        <svg viewBox='0 0 400 239' fill='none' xmlns='http://www.w3.org/2000/svg' ref={section}>
            <g ref={top}>
                <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M200.004 0C146.666 0 113.338 26.5083 99.998 79.525C120.001 53.0167 143.335 43.078 170 49.7012C185.213 53.4791 196.093 64.4524 208.124 76.6014C227.735 96.3847 250.434 119.28 300.002 119.28C353.332 119.28 386.667 92.7713 400 39.7625C380.005 66.2708 356.671 76.2095 330.006 69.5785C314.785 65.8006 303.905 54.8273 291.874 42.6861C272.263 22.8872 249.572 0 200.004 0Z'
                    fill='#06B6D4'
                />
            </g>
            <g ref={bottom}>
                <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M99.998 119.28C46.6678 119.28 13.3325 145.788 0 198.805C20.0027 172.296 43.3367 162.358 69.9939 168.981C85.2155 172.759 96.0947 183.732 108.126 195.881C127.737 215.664 150.428 238.559 200.004 238.559C253.334 238.559 286.669 212.059 300.002 159.042C279.999 185.551 256.665 195.489 230 188.866C214.787 185.08 203.907 174.107 191.876 161.966C172.265 142.183 149.566 119.28 99.998 119.28Z'
                    fill='#06B6D4'
                />
            </g>
        </svg>
    );
};

export default SVG_TailwindCss;
