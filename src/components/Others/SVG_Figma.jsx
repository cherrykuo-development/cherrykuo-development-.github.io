import React, { useEffect, useRef } from 'react';
import { gsap } from '../../constant/gsap';

const SVG_Figma = () => {
    const section = useRef(null);
    const itemEls = useRef(new Array());

    useEffect(() => {
        const defaults = {
            opacity: 0,
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
        itemEls.current.map((el, index) => {
            index % 2 === 0
                ? scrollTl.from(
                      el,
                      {
                          x: 20,
                      },
                      '-=.2'
                  )
                : scrollTl.from(
                      el,
                      {
                          x: -20,
                      },
                      '-=.2'
                  );
        });
    }, []);

    return (
        <svg viewBox='0 0 240 360' fill='none' xmlns='http://www.w3.org/2000/svg' ref={section}>
            <g ref={element => itemEls.current.push(element)}>
                <path d='M60 0H120V120H60V0Z' fill='#F24E1E' />
                <path
                    d='M120 60C120 93.1371 93.1371 120 60 120C26.8629 120 0 93.1371 0 60C0 26.8629 26.8629 0 60 0C93.1371 0 120 26.8629 120 60Z'
                    fill='#F24E1E'
                />
            </g>
            <g ref={element => itemEls.current.push(element)}>
                <path d='M120 0H180V120H120V0Z' fill='#FF7262' />
                <path
                    d='M240 60C240 93.1371 213.136 120 180 120C146.863 120 120 93.1371 120 60C120 26.8629 146.863 0 180 0C213.136 0 240 26.8629 240 60Z'
                    fill='#FF7262'
                />
            </g>
            <g ref={element => itemEls.current.push(element)}>
                <path d='M60 120H120V240H60V120Z' fill='#A259FF' />
                <path
                    d='M120 180C120 213.136 93.1371 240 60 240C26.8629 240 0 213.136 0 180C0 146.863 26.8629 120 60 120C93.1371 120 120 146.863 120 180Z'
                    fill='#A259FF'
                />
            </g>
            <g ref={element => itemEls.current.push(element)}>
                <path
                    d='M240 180C240 213.136 213.136 240 180 240C146.863 240 120 213.136 120 180C120 146.863 146.863 120 180 120C213.136 120 240 146.863 240 180Z'
                    fill='#1ABCFE'
                />
            </g>
            <g ref={element => itemEls.current.push(element)}>
                <path d='M120 240H60V300H120V240Z' fill='#0ACF83' />
                <path
                    d='M120 300C120 333.136 93.1371 360 60 360C26.8629 360 0 333.136 0 300C0 266.864 26.8629 240 60 240C93.1371 240 120 266.864 120 300Z'
                    fill='#0ACF83'
                />
            </g>
        </svg>
    );
};

export default SVG_Figma;
