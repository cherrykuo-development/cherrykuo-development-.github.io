import React, { useEffect, useRef } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useLangTrans } from '../../constant/LangContext';
import { gsap } from '../../constant/gsap';

import SectionTitle from './SectionTitle';

const typesData = [
    {
        list: [
            'JavaScript',
            'Vue.js',
            'React.js',
            'vite',
            'Babylon.js',
            'gsap',
            'HTML',
            'TailwindCss',
            'bootstrap',
            'Sass / Scss / CSS',
        ],
        link: '/frontend',
    },
    {
        list: ['Laravel', 'Smarty', 'PHP', 'TCPDF', 'PHPMailer', 'SQL'],
        link: '/backend',
    },
    {
        list: ['Git', 'Google Apps Script', 'Data analyst', 'UI/UX', 'Web design, Figma'],
        link: '/others',
    },
];

const Skill = ({ type, typeIndex }) => {
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
        itemEls.current.map((el, index) => {
            index % 2 === 0
                ? scrollTl.fromTo(el, { opacity: 0, x: -10 }, { opacity: 1, x: 0, duration: 0.3 })
                : scrollTl.fromTo(
                      el,
                      { opacity: 0, x: 20 },
                      { opacity: 1, x: 0, duration: 0.3 },
                      '+=0.2'
                  );
        });
    }, []);

    const { search } = useLocation();
    const query = new URLSearchParams(search);
    const getLocale = () => {
        return query.get('locale') ? `?locale=${query.get('locale')}` : '';
    };

    return (
        <Link to={{ pathname: typesData[typeIndex].link, search: getLocale() }} ref={section}>
            <div
                className='group w-full h-full flex flex-col cursor-pointer'
                style={{ justifyContent: 'space-between' }}
            >
                <div
                    className='flex flex-col items-baseline mb-2'
                    ref={element => itemEls.current.push(element)}
                >
                    <div className='w-full laptop:w-auto text-center inline-block bg-white px-2 py-3 box-shadow rounded-md mb-7 transition-all duration-200 group-hover:px-5'>
                        <span className='text-rem36 font-700 tracking-wider leading-9 text-blue text-base'>
                            {type}
                        </span>
                    </div>
                    <div className='space-y-2 transition-all duration-200 border-l border-solid border-transparent group-hover:border-white group-hover:pl-5'>
                        {typesData[typeIndex].list.map((item, index) => (
                            <span
                                key={item}
                                className={
                                    'text-rem32 laptop:text-rem24 font-700 tracking-wider text-white text-base block ' +
                                    (index % 2 === 0 ? 'opacity-100' : 'opacity-75')
                                }
                            >
                                # {item}
                            </span>
                        ))}
                    </div>
                </div>
                <div className='text-right' ref={element => itemEls.current.push(element)}>
                    <span className='text-rem32 laptop:text-rem24 font-700 tracking-wider text-white text-base group-hover:font-900'>
                        ... {langTrans('skills.more')}
                    </span>
                </div>
            </div>
        </Link>
    );
};

const Skills = () => {
    const langTrans = useLangTrans();

    return (
        <section className='w-full bg-blue py-20 flex-center'>
            <div className='max-w-1280 w-11/12 h-full space-y-6'>
                <SectionTitle
                    boxColor='bg-white'
                    textColor='text-white'
                    title={langTrans('skills.title')}
                />
                <div className='grid grid-rows-none laptop:grid-cols-3 gap-20 laptop:gap-10 px-40 laptop:px-0'>
                    {langTrans('skills.types', { returnObjects: true }).map((type, index) => (
                        <Skill key={type} type={type} typeIndex={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
