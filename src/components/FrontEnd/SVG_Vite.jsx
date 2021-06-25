import React, { useEffect, useRef } from 'react';
import { gsap } from '../../constant/gsap';

const SVG_Vite = () => {
    const section = useRef(null);
    const lightning = useRef(null);
    const triangle = useRef(null);

    useEffect(() => {
        const defaults = {
            opacity: 0,
            duration: 0.5,
            transformOrigin: '50% 50%',
            ease: 'elastic.out(1, 0.3)',
        };
        const scrollTrigger = {
            trigger: section.current,
            start: 'top 60%',
            end: 'bottom top',
            toggleActions: 'restart none none reverse',
        };
        const scrollTl = gsap.timeline({ defaults, scrollTrigger });
        scrollTl
            .from(triangle.current, {
                y: 50,
                scaleY: 0,
            })
            .from(
                lightning.current,
                {
                    y: 20,
                    scaleY: 0.5,
                },
                '-=.2'
            );
    }, []);

    return (
        <svg viewBox='0 0 401 395' fill='none' xmlns='http://www.w3.org/2000/svg' ref={section}>
            <path
                d='M390.393 58.0728L210.883 379.068C207.177 385.696 197.655 385.735 193.893 379.14L10.8234 58.1038C6.72499 50.9167 12.8707 42.2113 21.015 43.667L200.717 75.7878C201.864 75.9926 203.037 75.9907 204.184 75.7818L380.128 43.713C388.245 42.2336 394.42 50.8717 390.393 58.0728Z'
                fill='url(#paint0_linear)'
                ref={triangle}
            />
            <path
                d='M286.319 1.53597L153.476 27.566C151.293 27.9938 149.676 29.8442 149.545 32.0648L141.373 170.078C141.181 173.329 144.166 175.852 147.339 175.12L184.324 166.584C187.785 165.786 190.912 168.834 190.2 172.314L179.212 226.122C178.473 229.743 181.873 232.84 185.409 231.766L208.253 224.825C211.795 223.75 215.197 226.856 214.448 230.48L196.986 315C195.893 320.287 202.925 323.17 205.858 318.637L207.817 315.61L316.065 99.5824C317.877 95.9653 314.752 91.841 310.779 92.6076L272.709 99.9551C269.131 100.645 266.087 97.3132 267.097 93.813L291.945 7.67498C292.955 4.16889 289.901 0.834293 286.319 1.53597Z'
                fill='url(#paint1_linear)'
                ref={lightning}
            />
            <defs>
                <linearGradient
                    id='paint0_linear'
                    x1='6.35358'
                    y1='32.1951'
                    x2='229.768'
                    y2='335.61'
                    gradientUnits='userSpaceOnUse'
                >
                    <stop stopColor='#41D1FF' />
                    <stop offset='1' stopColor='#BD34FE' />
                </linearGradient>
                <linearGradient
                    id='paint1_linear'
                    x1='190.403'
                    y1='8.60307'
                    x2='230.818'
                    y2='285.843'
                    gradientUnits='userSpaceOnUse'
                >
                    <stop stopColor='#FFEA83' />
                    <stop offset='0.0833333' stopColor='#FFDD35' />
                    <stop offset='1' stopColor='#FFA800' />
                </linearGradient>
            </defs>
        </svg>
    );
};

export default SVG_Vite;
