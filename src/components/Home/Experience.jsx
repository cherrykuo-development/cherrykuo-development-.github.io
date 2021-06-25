import React, { useEffect, useRef } from 'react';
import { useLangTrans } from '../../constant/LangContext';
import { gsap } from '../../constant/gsap';

import SectionTitle from './SectionTitle';
import bg_laptop from '../../assets/images/bg_laptop.png';

const Company = () => {
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
            scrollTl.fromTo(el, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.15 });
        });
    }, []);

    return (
        <div
            className='bg-white laptop:bg-transparent bg-opacity-75 space-y-5 laptop:space-y-10 rounded-2xl'
            ref={section}
        >
            {langTrans('experience.company', { returnObjects: true }).map(company => (
                <div key={company.name} className='flex space-x-3'>
                    <div
                        className='text-rem32 laptop:text-rem36 font-700 tracking-wide laptop:tracking-wider text-grey-dark'
                        ref={element => itemEls.current.push(element)}
                    >
                        。
                    </div>
                    <div className='space-y-3'>
                        <div
                            className='text-rem32 laptop:text-rem36 font-700 tracking-wide laptop:tracking-wider text-grey-dark uppercase'
                            ref={element => itemEls.current.push(element)}
                        >
                            {company.name}
                        </div>
                        <div>
                            {company.works.map(item => (
                                <div
                                    key={item}
                                    className='text-rem24 laptop:text-rem28 font-700 tracking-wide laptop:tracking-wider text-grey uppercase'
                                    ref={element => itemEls.current.push(element)}
                                >
                                    - {item}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

const Experience = () => {
    const langTrans = useLangTrans();
    const section = useRef(null);
    const years = useRef(null);
    const months = useRef(null);

    useEffect(() => {
        const scrollTrigger = {
            trigger: section.current,
            start: 'top 60%',
            end: 'bottom top',
            toggleActions: 'restart none none reset',
        };
        const scrollTl = gsap.timeline({ scrollTrigger });
        scrollTl
            .from(years.current, {
                textContent: 0,
                duration: 0.5,
                ease: 'linear',
                snap: { textContent: 1 },
                stagger: 1,
            })
            .from(
                months.current,
                {
                    textContent: 0,
                    duration: 0.5,
                    ease: 'linear',
                    snap: { textContent: 1 },
                    stagger: 1,
                },
                '-=.5'
            );
    }, []);
    return (
        <section
            className='w-full h-180 bg-grey-light py-20 flex-center bg-contain bg-no-repeat bg-right'
            style={{ backgroundImage: `url(${bg_laptop})` }}
            ref={section}
        >
            <div className='max-w-1280 w-11/12 h-full space-y-6 flex flex-col justify-between'>
                <div className='flex flex-col laptop:flex-row items-baseline space-x-10'>
                    <SectionTitle
                        boxColor='bg-blue'
                        textColor='text-grey-dark'
                        title={langTrans('experience.title')}
                    />
                    <div className='text-rem36 font-700 tracking-wider'>
                        <span className='text-blue' ref={years}>
                            4
                        </span>
                        <span className='text-grey-dark px-4'>
                            {langTrans('experience.period.years')}
                        </span>
                        <span className='text-blue' ref={months}>
                            10
                        </span>
                        <span className='text-grey-dark px-4'>
                            {langTrans('experience.period.months')}
                        </span>
                    </div>
                </div>
                <Company />
            </div>
        </section>
    );
};

export default Experience;
