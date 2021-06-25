import React, { useEffect, useRef } from 'react';
import { gsap } from '../constant/gsap';

const PageTitle = ({ title }) => {
    const h1_mask = useRef(null);

    useEffect(() => {
        gsap.timeline().to(h1_mask.current, {
            width: 0,
            delay: 0.2,
            duration: 0.7,
            ease: 'back.out(1.2)',
        });
    }, []);

    return (
        <div className='relative inline-block rounded-2xl overflow-hidden'>
            <div className='inline-block bg-blue rounded-2xl px-10 box-shadow'>
                <h1 className='text-rem72 font-900 text-white'>{title}</h1>
            </div>
            <div className='w-full h-full absolute top-0 right-0 bg-blue' ref={h1_mask}></div>
        </div>
    );
};

export default PageTitle;
