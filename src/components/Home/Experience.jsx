import React, { useEffect, useRef } from 'react';
import { useLangTrans } from '../../constant/LangContext';
import { gsap } from '../../constant/gsap';

import bg_laptop from '../../assets/images/bg_laptop.png';

const SectionTitle = ({ boxColor, textColor, title }) => {
    return (
        <div className='flex'>
            <div
                className={`w-8 laptop:w-10 h-11 laptop:h-16 mr-3 laptop:mr-5 ${boxColor} box-shadow`}
            ></div>
            <span className={`text-rem48 font-700 tracking-wider ${textColor} text-base`}>
                {title}
            </span>
        </div>
    );
};

const Experience = () => {
    const langTrans = useLangTrans();
    const sectionExperience = useRef(null);
    const years = useRef(null);
    const months = useRef(null);
    const itemEls = useRef(new Array());

    useEffect(() => {
        const numberTl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionExperience.current,
                start: 'top 50%',
                end: 'bottom top',
                toggleActions: 'restart none none reset',
            },
        });
        numberTl
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

        itemEls.current.map(item => {
            numberTl.fromTo(item, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.3 });
        });
    }, []);
    return (
        <section
            className='w-full h-180 bg-grey-light py-20 flex-center bg-no-repeat bg-right'
            style={{ backgroundImage: `url(${bg_laptop})` }}
            ref={sectionExperience}
        >
            <div className='max-w-1280 w-11/12 h-full space-y-6 flex flex-col justify-between'>
                <div className='flex flex-col'>
                    <div className='mb-10'>
                        <SectionTitle
                            boxColor='bg-blue'
                            textColor='text-grey-dark'
                            title={langTrans('experience.title')}
                        ></SectionTitle>
                    </div>
                    <div className='text-rem36 font-700 tracking-wider text-grey-dark pl-15'>
                        <span ref={years}>4</span>
                        <span className='px-4'>{langTrans('experience.period.years')}</span>
                        <span ref={months}>10</span>
                        <span className='px-4'>{langTrans('experience.period.months')}</span>
                    </div>
                </div>
                <div className='space-y-10'>
                    {langTrans('experience.company', { returnObjects: true }).map(company => (
                        <div key={company.name} className='flex text-rem36 font-700 tracking-wider'>
                            <div className='mr-3' ref={element => itemEls.current.push(element)}>
                                。
                            </div>
                            <div>
                                <div
                                    className='text-grey-dark mb-3'
                                    ref={element => itemEls.current.push(element)}
                                >
                                    {company.name}
                                </div>
                                <div
                                    className='text-grey'
                                    ref={element => itemEls.current.push(element)}
                                >
                                    {company.period}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
