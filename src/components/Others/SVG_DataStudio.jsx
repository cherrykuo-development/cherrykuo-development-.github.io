import React, { useEffect, useRef } from 'react';
import { gsap } from '../../constant/gsap';

const SVG_DataStudio = () => {
    const section = useRef(null);
    const itemEls = useRef(new Array());

    useEffect(() => {
        const defaults = {
            opacity: 0,
            duration: 0.4,
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
                          scaleX: 0,
                          transformOrigin: '0% 50%',
                      },
                      '-=.4'
                  )
                : scrollTl.from(
                      el,
                      {
                          x: '-250%',
                      },
                      '-=.4'
                  );
        });
    }, []);

    return (
        <svg viewBox='0 0 200 184' fill='none' xmlns='http://www.w3.org/2000/svg' ref={section}>
            <path
                d='M174.574 133.475H102.368C84.8845 133.475 75.1426 145.537 75.1426 158.333C75.1426 170.17 83.4286 183.191 102.368 183.191H174.574V133.475Z'
                fill='#669DF6'
                ref={element => itemEls.current.push(element)}
            />
            <path
                d='M174.575 183.191C188.303 183.191 199.433 172.062 199.433 158.333C199.433 144.605 188.303 133.475 174.575 133.475C160.846 133.475 149.717 144.605 149.717 158.333C149.717 172.062 160.846 183.191 174.575 183.191Z'
                fill='#1A73E8'
                ref={element => itemEls.current.push(element)}
            />
            <path
                d='M100 67.1875H27.7937C10.3103 67.1875 0.568359 79.2495 0.568359 92.0455C0.568359 103.883 8.85434 116.903 27.7937 116.903H100V67.1875Z'
                fill='#669DF6'
                ref={element => itemEls.current.push(element)}
            />
            <path
                d='M100.001 116.903C113.729 116.903 124.858 105.774 124.858 92.0455C124.858 78.3168 113.729 67.1875 100.001 67.1875C86.2719 67.1875 75.1426 78.3168 75.1426 92.0455C75.1426 105.774 86.2719 116.903 100.001 116.903Z'
                fill='#1A73E8'
                ref={element => itemEls.current.push(element)}
            />
            <path
                d='M174.574 0.899628H102.368C84.8845 0.899628 75.1426 12.9617 75.1426 25.7576C75.1426 37.5947 83.4286 50.6155 102.368 50.6155H174.574V0.899628Z'
                fill='#669DF6'
                ref={element => itemEls.current.push(element)}
            />
            <path
                d='M174.575 50.6155C188.303 50.6155 199.433 39.4863 199.433 25.7576C199.433 12.0289 188.303 0.899628 174.575 0.899628C160.846 0.899628 149.717 12.0289 149.717 25.7576C149.717 39.4863 160.846 50.6155 174.575 50.6155Z'
                fill='#1A73E8'
                ref={element => itemEls.current.push(element)}
            />
        </svg>
    );
};

export default SVG_DataStudio;
