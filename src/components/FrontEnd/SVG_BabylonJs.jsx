import React, { useEffect, useRef } from 'react';
import { gsap } from '../../constant/gsap';

const SVG_BabylonJs = () => {
    const section = useRef(null);
    const outer = useRef(null);
    const inner = useRef(null);
    const shadow = useRef(null);

    useEffect(() => {
        const defaults = {
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
            .from(outer.current, {
                opacity: 0,
                duration: 0.01,
            })
            .from(
                outer.current,
                {
                    scale: 0.8,
                    rotation: 180,
                    duration: 0.5,
                    transformOrigin: '50% 50%',
                    ease: 'steps(3)',
                },
                '-=.01'
            )
            .from(
                inner.current,
                {
                    scale: 0,
                    rotation: -180,
                    duration: 0.4,
                    transformOrigin: '50% 50%',
                    ease: 'steps(3)',
                },
                '-=.3'
            )
            .from(
                shadow.current,
                {
                    opacity: 0,
                    duration: 0.5,
                    transformOrigin: '50% 50%',
                    ease: 'elastic.out(1, 0.3)',
                },
                '-=.2'
            );
        // .from(
        //     lightning.current,
        //     {
        //         y: 20,
        //         scaleY: 0.5,
        //         opacity: 0,
        //         duration: 0.5,
        //         transformOrigin: '50% 50%',
        //     },
        //     '-=.2'
        // );
    }, []);

    return (
        <svg viewBox='0 0 401 462' fill='none' xmlns='http://www.w3.org/2000/svg' ref={section}>
            <g ref={outer}>
                <path
                    d='M399.351 116.15L337.222 80.2882L277.376 114.779L339.62 150.755L399.351 116.15Z'
                    fill='#E0684B'
                />
                <path
                    d='M61.8631 150.756L260.473 35.9762L200.741 1.48511L2.01758 116.151L61.8631 150.756Z'
                    fill='#E0684B'
                />
                <path
                    d='M339.619 150.756V311.105L200.741 391.28L61.8631 311.105V150.756L2.01758 116.15V345.596L200.741 460.376L399.351 345.596V116.15L339.619 150.756Z'
                    fill='#BB464B'
                />
            </g>
            <g ref={inner}>
                <path
                    d='M200.741 159.093L138.498 194.954V266.792L200.741 230.93L262.871 266.792V194.954L200.741 159.093Z'
                    fill='#BB464B'
                />
                <path
                    d='M138.498 266.792L200.741 302.654L262.871 266.792L200.741 230.93L138.498 266.792Z'
                    fill='#E0684B'
                />
            </g>
            <g ref={shadow}>
                <path
                    d='M339.619 150.756L262.871 194.955V266.792L200.741 302.654V391.28L339.619 311.105V150.756Z'
                    fill='#E0DED8'
                />
                <path
                    d='M61.8633 150.756L138.498 194.955V266.792L200.742 302.654V391.28L61.8633 311.105V150.756Z'
                    fill='#D5D2CA'
                />
                <path
                    d='M260.473 35.9753L337.221 80.2884L277.376 114.78L339.62 150.755L262.871 194.954L200.742 159.093L138.498 194.954L61.8633 150.755L260.473 35.9753Z'
                    fill='white'
                />
            </g>
        </svg>
    );
};

export default SVG_BabylonJs;
