import React, { useRef, useEffect } from 'react';
import { useIsMobileUI } from '../../constant/RwdContext';
import { useLangTrans } from '../../constant/LangContext';
import { gsap } from '../../constant/gsap';

import SectionTitle from '../SectionTitle';
import SVG_Laravel from './SVG_Laravel';
import PNG_Smarty from '../../assets/images/backend/smarty.png';

const Item = ({ item, index }) => {
    const isMobileUI = useIsMobileUI();
    const section = useRef(null);
    const itemEls = useRef(new Array());
    const svgList = [
        {
            img: <SVG_Laravel />,
            widthClass: isMobileUI ? 'w-80' : 'w-90',
        },
        {
            img: <img src={PNG_Smarty} alt='smarty' />,
            widthClass: isMobileUI ? 'w-90' : 'w-100',
        },
    ];

    useEffect(() => {
        const defaults = {};
        const scrollTrigger = {
            trigger: section.current,
            start: 'top 60%',
            end: 'bottom top',
            toggleActions: 'restart none none reverse',
        };
        const scrollTl = gsap.timeline({ defaults, scrollTrigger });
        itemEls.current.map(el => {
            scrollTl.from(el, { y: 20, scale: 0, duration: 0.2, ease: 'back.out(1.2)' });
        });
    }, []);

    return (
        <li
            className='flex-center flex-col laptop:flex-row border-5 laptop:border-10 border-dashed border-blue bg-white rounded-3xl space-x-5 laptop:space-x-20 space-y-5 laptop:space-y-0 py-10'
            ref={section}
        >
            <figure
                className={svgList[index].widthClass}
                ref={element => itemEls.current.push(element)}
            >
                {svgList[index].img}
            </figure>
            <div className='w-150 px-5 py-10 space-y-10'>
                <div className='w-full bg-blue flex-center rounded-xl'>
                    <span className='text-rem48 font-500 tracking-wider text-white bg-base text-base'>
                        {item.title}
                    </span>
                </div>
                <ul className='flex-center flex-col space-y-5'>
                    {item.contents.map(content => (
                        <li
                            key={content}
                            className='text-rem32 font-500 tracking-wider text-black text-base text-center'
                        >
                            {content}
                        </li>
                    ))}
                </ul>
            </div>
        </li>
    );
};

const PhpFramework = () => {
    const langTrans = useLangTrans();

    return (
        <section className='w-full bg-blue py-20 flex-center'>
            <div className='max-w-1280 w-11/12 h-full laptop:space-y-6 flex flex-col justify-between relative'>
                <SectionTitle title={langTrans('backend.php_framework.title')} color='white' />
                <ul className='space-y-20'>
                    {langTrans('backend.php_framework.list', { returnObjects: true }).map(
                        (item, index) => (
                            <Item key={item.title} item={item} index={index} />
                        )
                    )}
                </ul>
            </div>
        </section>
    );
};

export default PhpFramework;
