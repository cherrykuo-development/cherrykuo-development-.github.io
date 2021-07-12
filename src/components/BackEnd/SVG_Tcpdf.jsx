import React, { useEffect, useRef } from 'react';
import { gsap } from '../../constant/gsap';

const SVG_Tcpdf = () => {
    const section = useRef(null);
    const itemEls = useRef(new Array());

    useEffect(() => {
        const defaults = {};
        const scrollTrigger = {
            trigger: section.current,
            start: 'top 60%',
            end: 'bottom top',
            toggleActions: 'restart none none reverse',
        };
        const scrollTl = gsap.timeline({ defaults, scrollTrigger });
        itemEls.current.map(el => {
            scrollTl.fromTo(
                el,
                {
                    scale: 1,
                    transformOrigin: '50% 50%',

                    ease: 'elastic.out(1, 0.3)',
                },
                { scale: 0, duration: 0.2 },
                '-=.1'
            );
        });
    }, []);

    return (
        <svg viewBox='0 0 300 102' fill='none' xmlns='http://www.w3.org/2000/svg' ref={section}>
            <g clipPath='url(#clip0)'>
                <path d='M300 0.949707H0V101.326H300V0.949707Z' fill='#D50000' />
                <g filter='url(#filter0_d)'>
                    <path
                        d='M60.1558 30.6663H41.8663V80.3064H27.176V30.6663H9.22119V19.314H60.1558V30.6663ZM118.808 59.6542C118.613 63.8992 117.469 67.6556 115.376 70.9229C113.284 74.1624 110.34 76.6757 106.545 78.4631C102.778 80.2506 98.4679 81.1441 93.6131 81.1441C85.6052 81.1441 79.2992 78.533 74.6955 73.3105C70.0918 68.0884 67.7899 60.7155 67.7899 51.1926V48.1766C67.7899 42.2001 68.8224 36.9778 70.8868 32.5095C72.9795 28.0132 75.9791 24.5503 79.8851 22.1207C83.7915 19.6631 88.3116 18.4343 93.4455 18.4343C100.84 18.4343 106.783 20.3892 111.275 24.299C115.767 28.1808 118.32 33.5428 118.934 40.3849H104.285C104.174 36.6706 103.239 34.0036 101.481 32.3838C99.7236 30.7641 97.0451 29.9542 93.4455 29.9542C89.7902 29.9542 87.1116 31.3226 85.4098 34.0594C83.7079 36.7963 82.8148 41.1668 82.7312 47.1711V51.4856C82.7312 57.9929 83.5404 62.6428 85.1586 65.4353C86.8048 68.2278 89.6231 69.6245 93.6131 69.6245C96.9889 69.6245 99.5698 68.8283 101.356 67.2365C103.141 65.6446 104.09 63.1172 104.202 59.6542H118.808Z'
                        fill='black'
                    />
                </g>
                <g filter='url(#filter1_d)'>
                    <path
                        d='M144.864 59.6138V80.3075H130.173V19.3152H154.49C159.149 19.3152 163.265 20.1809 166.836 21.9124C170.436 23.6159 173.212 26.0595 175.165 29.2432C177.146 32.3989 178.136 35.9875 178.136 40.009C178.136 45.9575 176.002 50.7189 171.733 54.2934C167.492 57.8405 161.66 59.6138 154.239 59.6138H144.864ZM144.864 48.2614H154.49C157.336 48.2614 159.498 47.5493 160.977 46.1248C162.484 44.7006 163.237 42.69 163.237 40.0928C163.237 37.2443 162.47 34.9682 160.935 33.2647C159.401 31.5611 157.308 30.6954 154.657 30.6674H144.864V48.2614ZM190.291 80.3075V19.3152H209.919C215.305 19.3152 220.145 20.544 224.442 23.0015C228.739 25.4312 232.087 28.8802 234.487 33.3484C236.914 37.7888 238.142 42.7738 238.17 48.3035V51.1101C238.17 56.6951 236.984 61.7084 234.613 66.1485C232.269 70.5612 228.948 74.0241 224.651 76.5374C220.382 79.0228 215.612 80.2796 210.338 80.3075H190.291ZM204.981 30.6674V68.9972H210.087C214.3 68.9972 217.537 67.5031 219.796 64.515C222.057 61.4986 223.187 57.0306 223.187 51.1101V48.4707C223.187 42.5783 222.057 38.1379 219.796 35.1497C217.537 32.1615 214.244 30.6674 209.919 30.6674H204.981ZM288.368 56.011H264.679V80.3075H249.989V19.3152H290.754V30.6674H264.679V44.7006H288.368V56.011Z'
                        fill='white'
                    />
                </g>
            </g>
            <defs>
                <filter
                    id='filter0_d'
                    x='5.22119'
                    y='18.4343'
                    width='117.713'
                    height='70.7098'
                    filterUnits='userSpaceOnUse'
                    colorInterpolationFilters='sRGB'
                >
                    <feFlood floodOpacity='0' result='BackgroundImageFix' />
                    <feColorMatrix
                        in='SourceAlpha'
                        type='matrix'
                        values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                    />
                    <feOffset dy='4' />
                    <feGaussianBlur stdDeviation='2' />
                    <feColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0' />
                    <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow' />
                    <feBlend
                        mode='normal'
                        in='SourceGraphic'
                        in2='effect1_dropShadow'
                        result='shape'
                    />
                </filter>
                <filter
                    id='filter1_d'
                    x='126.173'
                    y='19.3152'
                    width='168.58'
                    height='68.9923'
                    filterUnits='userSpaceOnUse'
                    colorInterpolationFilters='sRGB'
                >
                    <feFlood floodOpacity='0' result='BackgroundImageFix' />
                    <feColorMatrix
                        in='SourceAlpha'
                        type='matrix'
                        values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                    />
                    <feOffset dy='4' />
                    <feGaussianBlur stdDeviation='2' />
                    <feColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0' />
                    <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow' />
                    <feBlend
                        mode='normal'
                        in='SourceGraphic'
                        in2='effect1_dropShadow'
                        result='shape'
                    />
                </filter>
                <clipPath id='clip0'>
                    <rect
                        width='300'
                        height='100.376'
                        fill='white'
                        transform='translate(0 0.949707)'
                    />
                </clipPath>
            </defs>
        </svg>
    );
};

export default SVG_Tcpdf;
