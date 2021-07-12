import React, { useEffect, useRef } from 'react';
import { gsap } from '../constant/gsap';

import wave from '../assets/images/frontend/wave.png';

const Wave = () => {
    const section = useRef(null);
    const itemEls = useRef(new Array());

    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: section.current,
                start: 'top 80%',
                end: 'bottom top',
                scrub: true,
            },
        });

        itemEls.current.map((layer, index) => {
            const depth = index;
            const movement = -(layer.offsetHeight * depth) * 1.2;
            tl.to(layer, { backgroundPosition: `${movement}px 0`, ease: 'none' }, 0);
        });
    }, []);

    return (
        <section className='w-full h-36 relative mt-10' ref={section}>
            {[750, 400, -265, 50].map((item, index) => (
                <div
                    key={item}
                    className='w-full h-full absolute bottom-0 left-0 bg-bottom bg-repeat-x bg-cover laptop:bg-auto animate-wave-loop'
                    style={{
                        backgroundImage: `url(${wave})`,
                        backgroundPositionX: item,
                        opacity: `${(index + 1) * 0.25}`,
                        animationDelay: `${index * 0.25}s`,
                    }}
                    data-depth={(index + 1) * 0.25}
                    ref={element => itemEls.current.push(element)}
                ></div>
            ))}
        </section>
    );
};

export default Wave;
