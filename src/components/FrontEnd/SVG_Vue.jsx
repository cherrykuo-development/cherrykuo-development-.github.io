import React, { useEffect, useRef } from 'react';
import { gsap } from '../../constant/gsap';

const SVG_Vue = () => {
    const section = useRef(null);
    const outer = useRef(null);
    const inner = useRef(null);

    useEffect(() => {
        const defaults = {
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
            .from(outer.current, {
                rotation: 270,
                opacity: 0,
                duration: 0.3,
                transformOrigin: '50% 50%',
            })
            .fromTo(
                outer.current,
                {
                    opacity: 0,
                },
                {
                    opacity: 1,
                    duration: 1,
                }
            )
            .from(
                inner.current,
                {
                    y: 20,
                    scaleY: 0.5,
                    opacity: 0,
                    duration: 0.3,
                    transformOrigin: '50% 50%',
                },
                '-=.9'
            );
    }, []);

    return (
        <svg viewBox='0 0 481 416' fill='none' xmlns='http://www.w3.org/2000/svg' ref={section}>
            <g ref={outer}>
                <path
                    d='M385 0.00219727L241 249L97 0.00219727H0.990967L240.985 415.689L480.979 0.00219727H385Z'
                    fill='#41B883'
                />
            </g>
            <g ref={inner}>
                <path
                    d='M296.409 0.00213623L240.985 95.9997L185.561 0.00213623H96.9885L240.985 249.409L384.981 0.00213623H296.409Z'
                    fill='#34495E'
                />
            </g>
        </svg>
    );
};

export default SVG_Vue;
