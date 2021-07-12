import React, { useEffect, useRef } from 'react';
import { gsap } from '../../constant/gsap';

const SVG_GoogleSheets = () => {
    const section = useRef(null);
    const container = useRef(null);

    useEffect(() => {
        const defaults = {
            opacity: 0,
            transformOrigin: '50% 50%',
            duration: 0.3,
            ease: 'circ.out',
        };
        const scrollTrigger = {
            trigger: section.current,
            start: 'top 60%',
            end: 'bottom top',
            toggleActions: 'restart none none reverse',
        };
        const scrollTl = gsap.timeline({ defaults, scrollTrigger });
        scrollTl.from(container.current, {
            scaleX: 0,
        });
    }, []);

    return (
        <svg viewBox='0 0 267 383' fill='none' xmlns='http://www.w3.org/2000/svg' ref={section}>
            <g ref={container}>
                <mask id='mask0' maskUnits='userSpaceOnUse' x='4' y='5' width='272' height='373'>
                    <path
                        d='M173.81 5.47644H30.1198C16.1734 5.47644 4.7627 16.8872 4.7627 30.8336V352.024C4.7627 365.97 16.1734 377.381 30.1198 377.381H249.882C263.828 377.381 275.239 365.97 275.239 352.024V106.905L173.81 5.47644Z'
                        fill='white'
                    />
                </mask>
                <g mask='url(#mask0)'>
                    <path
                        d='M173.81 5.47644H30.1198C16.1734 5.47644 4.7627 16.8872 4.7627 30.8336V352.024C4.7627 365.97 16.1734 377.381 30.1198 377.381H249.882C263.828 377.381 275.239 365.97 275.239 352.024V106.905L216.072 64.6431L173.81 5.47644Z'
                        fill='#0F9D58'
                    />
                </g>
                <mask id='mask1' maskUnits='userSpaceOnUse' x='4' y='5' width='272' height='373'>
                    <path
                        d='M173.81 5.47644H30.1198C16.1734 5.47644 4.7627 16.8872 4.7627 30.8336V352.024C4.7627 365.97 16.1734 377.381 30.1198 377.381H249.882C263.828 377.381 275.239 365.97 275.239 352.024V106.905L173.81 5.47644Z'
                        fill='white'
                    />
                </mask>
                <g mask='url(#mask1)'>
                    <path
                        d='M72.3828 187.203V309.762H207.621V187.203H72.3828ZM131.549 292.857H89.2876V271.726H131.549V292.857ZM131.549 259.048H89.2876V237.917H131.549V259.048ZM131.549 225.238H89.2876V204.107H131.549V225.238ZM190.716 292.857H148.454V271.726H190.716V292.857ZM190.716 259.048H148.454V237.917H190.716V259.048ZM190.716 225.238H148.454V204.107H190.716V225.238Z'
                        fill='#F1F1F1'
                    />
                </g>
                <mask id='mask2' maskUnits='userSpaceOnUse' x='4' y='5' width='272' height='373'>
                    <path
                        d='M173.81 5.47644H30.1198C16.1734 5.47644 4.7627 16.8872 4.7627 30.8336V352.024C4.7627 365.97 16.1734 377.381 30.1198 377.381H249.882C263.828 377.381 275.239 365.97 275.239 352.024V106.905L173.81 5.47644Z'
                        fill='white'
                    />
                </mask>
                <g mask='url(#mask2)'>
                    <path
                        d='M181.228 99.488L275.239 193.478V106.905L181.228 99.488Z'
                        fill='url(#paint0_linear)'
                    />
                </g>
                <mask id='mask3' maskUnits='userSpaceOnUse' x='4' y='5' width='272' height='373'>
                    <path
                        d='M173.81 5.47644H30.1198C16.1734 5.47644 4.7627 16.8872 4.7627 30.8336V352.024C4.7627 365.97 16.1734 377.381 30.1198 377.381H249.882C263.828 377.381 275.239 365.97 275.239 352.024V106.905L173.81 5.47644Z'
                        fill='white'
                    />
                </mask>
                <g mask='url(#mask3)'>
                    <path
                        d='M173.811 5.47644V81.5479C173.811 95.5577 185.158 106.905 199.168 106.905H275.239L173.811 5.47644Z'
                        fill='#87CEAC'
                    />
                </g>
                <mask id='mask4' maskUnits='userSpaceOnUse' x='4' y='5' width='272' height='373'>
                    <path
                        d='M173.81 5.47644H30.1198C16.1734 5.47644 4.7627 16.8872 4.7627 30.8336V352.024C4.7627 365.97 16.1734 377.381 30.1198 377.381H249.882C263.828 377.381 275.239 365.97 275.239 352.024V106.905L173.81 5.47644Z'
                        fill='white'
                    />
                </mask>
                <g mask='url(#mask4)'>
                    <path
                        d='M30.1198 5.47644C16.1734 5.47644 4.7627 16.8872 4.7627 30.8336V32.9467C4.7627 19.0002 16.1734 7.58954 30.1198 7.58954H173.81V5.47644H30.1198Z'
                        fill='white'
                        fillOpacity='0.2'
                    />
                </g>
                <mask id='mask5' maskUnits='userSpaceOnUse' x='4' y='5' width='272' height='373'>
                    <path
                        d='M173.81 5.47644H30.1198C16.1734 5.47644 4.7627 16.8872 4.7627 30.8336V352.024C4.7627 365.97 16.1734 377.381 30.1198 377.381H249.882C263.828 377.381 275.239 365.97 275.239 352.024V106.905L173.81 5.47644Z'
                        fill='white'
                    />
                </mask>
                <g mask='url(#mask5)'>
                    <path
                        d='M249.882 375.268H30.1198C16.1734 375.268 4.7627 363.858 4.7627 349.911V352.024C4.7627 365.971 16.1734 377.381 30.1198 377.381H249.882C263.828 377.381 275.239 365.971 275.239 352.024V349.911C275.239 363.858 263.828 375.268 249.882 375.268Z'
                        fill='#263238'
                        fillOpacity='0.2'
                    />
                </g>
                <mask id='mask6' maskUnits='userSpaceOnUse' x='4' y='5' width='272' height='373'>
                    <path
                        d='M173.81 5.47644H30.1198C16.1734 5.47644 4.7627 16.8872 4.7627 30.8336V352.024C4.7627 365.97 16.1734 377.381 30.1198 377.381H249.882C263.828 377.381 275.239 365.97 275.239 352.024V106.905L173.81 5.47644Z'
                        fill='white'
                    />
                </mask>
                <g mask='url(#mask6)'>
                    <path
                        d='M199.168 106.905C185.158 106.905 173.811 95.5577 173.811 81.5479V83.6609C173.811 97.6708 185.158 109.018 199.168 109.018H275.239V106.905H199.168Z'
                        fill='#263238'
                        fillOpacity='0.1'
                    />
                </g>
                <path
                    d='M173.81 5.47644H30.1198C16.1734 5.47644 4.7627 16.8872 4.7627 30.8336V352.024C4.7627 365.97 16.1734 377.381 30.1198 377.381H249.882C263.828 377.381 275.239 365.97 275.239 352.024V106.905L173.81 5.47644Z'
                    fill='url(#paint1_radial)'
                />
                <defs>
                    <linearGradient
                        id='paint0_linear'
                        x1='228.238'
                        y1='107.558'
                        x2='228.238'
                        y2='193.492'
                        gradientUnits='userSpaceOnUse'
                    >
                        <stop stopColor='#263238' stopOpacity='0.2' />
                        <stop offset='1' stopColor='#263238' stopOpacity='0.02' />
                    </linearGradient>
                    <radialGradient
                        id='paint1_radial'
                        cx='0'
                        cy='0'
                        r='1'
                        gradientUnits='userSpaceOnUse'
                        gradientTransform='translate(13.3315 12.8688) scale(436.139 436.139)'
                    >
                        <stop stopColor='white' stopOpacity='0.1' />
                        <stop offset='1' stopColor='white' stopOpacity='0' />
                    </radialGradient>
                </defs>
            </g>
        </svg>
    );
};

export default SVG_GoogleSheets;
