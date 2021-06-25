import React, { useEffect, useRef } from 'react';
import { useLangTrans } from '../../constant/LangContext';
import { gsap } from '../../constant/gsap';

import SectionTitle from './SectionTitle';
import bg_responsibilities from '../../assets/images/bg_responsibilities.png';

const Content = () => {
    const langTrans = useLangTrans();
    const section = useRef(null);
    const itemEls = useRef(new Array());

    useEffect(() => {
        const scrollTrigger = {
            trigger: section.current,
            start: 'top 60%',
            end: 'bottom top',
            toggleActions: 'restart none none reverse',
        };
        const scrollTl = gsap.timeline({ scrollTrigger });
        itemEls.current.map(el => {
            scrollTl.fromTo(el, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.3 });
        });
    }, []);

    return (
        <div
            className='w-full laptop:w-280 h-135 flex flex-col absolute bottom-0 left-0 pt-10 laptop:pt-20 pb-10 laptop:pb-5 pl-10 pr-10 laptop:pr-0 bg-white bg-opacity-75 box-shadow'
            ref={section}
        >
            <SectionTitle
                boxColor='bg-blue'
                textColor='text-grey-dark'
                title={langTrans('responsibilities.title')}
            />
            <div className='h-full text-rem28 font-700 tracking-wider text-grey-dark text-base flex flex-col justify-between pl-15'>
                {langTrans('responsibilities.list', { returnObjects: true }).map(item => (
                    <div key={item} ref={element => itemEls.current.push(element)}>
                        <span className='mr-3'>。</span>
                        <span>{item}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

const Responsibilities = () => {
    const section = useRef(null);
    const bg = useRef(null);

    useEffect(() => {
        const scrollTrigger = {
            trigger: section.current,
            start: 'top 60%',
            end: 'bottom top',
            toggleActions: 'restart none none reverse',
        };
        const scrollTl = gsap.timeline({ scrollTrigger });
        scrollTl.fromTo(
            bg.current,
            { opacity: 0.5, scale: 0.9 },
            { opacity: 1, scale: 1, duration: 0.2 }
        );
    }, []);

    return (
        <section
            className='w-full h-288 laptop:h-220 bg-grey-light py-20 flex-center bg-no-repeat bg-right'
            ref={section}
        >
            <div className='max-w-1280 w-11/12 h-full laptop:space-y-6 flex flex-col justify-between relative'>
                <figure className='w-full laptop:w-280 laptop:absolute top-0 right-0' ref={bg}>
                    <img src={bg_responsibilities} alt='bg_responsibilities' />
                </figure>
                <Content />
            </div>
        </section>
    );
};

export default Responsibilities;
