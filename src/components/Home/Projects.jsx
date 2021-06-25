import React, { useEffect, useRef } from 'react';
import { useIsMobileUI } from '../../constant/RwdContext';
import { useLangTrans } from '../../constant/LangContext';
import { gsap } from '../../constant/gsap';

import SectionTitle from './SectionTitle';
import project001 from '../../assets/images/project001.png';
import project002 from '../../assets/images/project002.png';
import project003 from '../../assets/images/project003.png';
import project004 from '../../assets/images/project004.png';
import project005 from '../../assets/images/project005.png';
import project_icon from '../../assets/images/project_icon.svg';

const productData = [
    {
        id: 1,
        src: project001,
        url: 'https://cherrykuo-development.github.io/',
    },
    {
        id: 2,
        src: project002,
        url: 'https://showcase.cipherlab.com/',
    },
    {
        id: 3,
        src: project003,
        url: 'https://stilo-group.com/',
    },
    {
        id: 4,
        src: project004,
        url: 'https://cherrykuo-development.github.io/demo003/',
    },
    {
        id: 5,
        src: project005,
        url: 'https://cherrykuo-development.github.io/demo001/',
    },
];

const Project = ({ project, index }) => {
    const langTrans = useLangTrans();
    const section = useRef(null);
    const itemEls = useRef(null);

    useEffect(() => {
        const scrollTrigger = {
            trigger: section.current,
            start: 'top 60%',
            end: 'bottom top',
            toggleActions: 'restart none none reverse',
        };
        const scrollTl = gsap.timeline({ scrollTrigger });
        scrollTl.to(itemEls.current, {
            width: 0,
            delay: 0.2,
            duration: 0.7,
            ease: 'back.out(1.2)',
        });
        // scrollTl.fromTo(
        //     itemEls.current,
        //     { opacity: 0, x: -10 },
        //     { opacity: 1, x: 0, duration: 0.3 }
        // );
    }, []);

    return (
        <div key={project.url} className='w-full laptop:w-150 relative' ref={section}>
            <a href={project.url} target='_blank' className='group w-full h-full inline-block'>
                <figure className='opacity-50 box-shadow group-hover:opacity-100 transform transition-transform duration-200 group-hover:scale-95'>
                    <img src={project.src} alt={'project 00' + (index + 1)} />
                </figure>
                <div className='border-r-5 laptop:border-r-20 border-l-0 border-solid border-white pr-5 transition-all duration-200 group-hover:border-r-5 group-hover:border-l-15 mt-5'>
                    <div className='flex flex-col space-y-5'>
                        {langTrans('projects.contentList', { returnObjects: true })[
                            project.id - 1
                        ].map(content => (
                            <span
                                key={content}
                                className='text-rem32 laptop:text-rem24 font-700 tracking-wider leading-normal laptop:leading-8 text-white text-base text-right'
                            >
                                。{content}
                            </span>
                        ))}
                    </div>
                </div>
            </a>
            <div
                className='w-full h-full inline-block absolute top-0 right-0 bg-blue'
                ref={itemEls}
            ></div>
        </div>
    );
};

const Projects = () => {
    const isMobileUI = useIsMobileUI();
    const langTrans = useLangTrans();

    return (
        <section className='w-full bg-blue py-20 flex-center'>
            <div className='max-w-1280 w-11/12 h-full space-y-6'>
                <SectionTitle
                    boxColor='bg-white'
                    textColor='text-white'
                    title={langTrans('projects.title')}
                />
                <div className='grid grid-cols-1 laptop:grid-cols-2 gap-20 relative'>
                    {productData.map((project, index) => (
                        <Project key={project.url} project={project} index={index} />
                    ))}
                    {!isMobileUI && productData.length % 2 === 1 && (
                        <figure className='w-50 absolute bottom-0 right-0'>
                            <img src={project_icon} alt='project_icon' />
                        </figure>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Projects;
