import React, { useEffect, useRef } from 'react';
import { useLangTrans } from '../../constant/LangContext';
import { gsap } from '../../constant/gsap';

import SectionTitle from '../SectionTitle';
import SVG_UiUx from './SVG_UiUx';
import SVG_Figma from './SVG_Figma';

const Item = ({ item, index }) => {
    // const isMobileUI = useIsMobileUI();
    const section = useRef(null);
    const itemEls = useRef(new Array());
    const svgList = [
        {
            img: <SVG_UiUx />,
            widthClass: 'w-90',
        },
        {
            img: <SVG_Figma />,
            widthClass: 'w-60',
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
            className={
                'flex-center flex-col justify-between border-2 laptop:border-5 border-dashed border-black bg-white rounded-3xl space-y-10 laptop:space-y-0 px-20 py-20 ' +
                (index % 2 === 0 ? 'laptop:flex-row' : 'laptop:flex-row-reverse')
            }
            ref={section}
        >
            <div className='w-100 flex-center'>
                <figure
                    className={svgList[index].widthClass}
                    ref={element => itemEls.current.push(element)}
                >
                    {svgList[index].img}
                </figure>
            </div>
            <div className='w-full laptop:w-160 border-10 laptop:border-20 border-dashed border-white rounded-xl px-10 py-20 bg-blue'>
                <ul className='flex-center flex-col space-y-5'>
                    {item.contents.map(content => (
                        <li
                            key={content}
                            className='text-rem32 font-500 tracking-wider text-white text-base text-center'
                        >
                            。{content}
                        </li>
                    ))}
                </ul>
            </div>
        </li>
    );
};

const UiUx = () => {
    const langTrans = useLangTrans();

    return (
        <section className='w-full bg-blue py-20 flex-center'>
            <div className='max-w-1280 w-11/12 h-full laptop:space-y-6 flex flex-col justify-between relative'>
                <SectionTitle title={langTrans('others.ui_ux.title')} color='white' />
                <ul className='space-y-20'>
                    {langTrans('others.ui_ux.list', { returnObjects: true }).map((item, index) => (
                        <Item key={item.title} item={item} index={index} />
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default UiUx;
