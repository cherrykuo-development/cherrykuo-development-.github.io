import React, { useEffect, useRef } from 'react';
import { gsap } from '../../constant/gsap';

const SVG_BootStrap = () => {
    const section = useRef(null);
    const bg = useRef(null);
    const char = useRef(null);

    useEffect(() => {
        const defaults = {
            transformOrigin: '50% 50%',
        };
        const scrollTrigger = {
            trigger: section.current,
            start: 'top 60%',
            end: 'bottom top',
            toggleActions: 'restart none none reverse',
        };
        const scrollTl = gsap.timeline({ defaults, scrollTrigger });
        scrollTl
            .from(bg.current, {
                y: 50,
                scaleY: 0,
                duration: 0.5,
                ease: 'elastic.out(1, 0.3)',
            })
            .from(
                char.current,
                {
                    fill: '#563D7C',
                    opacity: 0,
                    scale: 0.8,
                    duration: 0.3,
                    ease: 'circ.out',
                },
                '-=.3'
            );
    }, []);

    return (
        <svg viewBox='0 0 400 401' fill='none' xmlns='http://www.w3.org/2000/svg' ref={section}>
            <path
                d='M400 333.893C400 370.559 370 400.559 333.333 400.559H66.6667C30 400.559 0 370.559 0 333.893V67.226C0 30.5593 30 0.559326 66.6667 0.559326H333.333C370 0.559326 400 30.5593 400 67.226V333.893Z'
                fill='#563D7C'
                ref={bg}
            />
            <path
                d='M108.693 87.4875H222.092C243.007 87.4875 259.804 92.2588 272.418 101.867C285.033 111.474 291.373 125.919 291.373 145.331C291.373 157.095 288.497 167.161 282.745 175.527C276.994 183.893 268.758 190.429 258.039 195.004V195.657C272.418 198.729 283.333 205.527 290.719 216.05C298.105 226.638 301.83 239.84 301.83 255.788C301.83 264.939 300.196 273.501 296.928 281.409C293.66 289.383 288.562 296.246 281.569 301.997C274.575 307.749 265.686 312.324 254.771 315.723C243.856 319.122 230.915 320.821 215.882 320.821H108.693V87.4875ZM149.543 185.2H216.209C226.013 185.2 234.183 182.455 240.719 176.834C247.255 171.213 250.523 163.239 250.523 152.782C250.523 141.017 247.582 132.716 241.699 127.945C235.817 123.174 227.32 120.756 216.209 120.756H149.543V185.2ZM149.543 287.488H221.765C234.183 287.488 243.856 284.285 250.654 277.814C257.516 271.409 260.98 262.259 260.98 250.494C260.98 238.925 257.582 230.102 250.654 223.827C243.726 217.553 234.183 214.546 221.765 214.546H149.543V287.488Z'
                fill='white'
                ref={char}
            />
        </svg>
    );
};

export default SVG_BootStrap;
