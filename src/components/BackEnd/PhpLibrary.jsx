import React, { useRef, useEffect } from 'react';
import { useLangTrans } from '../../constant/LangContext';
import { gsap } from '../../constant/gsap';

import SectionTitle from '../SectionTitle';
import SVG_Tcpdf from './SVG_Tcpdf';
import SVG_PhpMailer from './SVG_PhpMailer';

const Item = ({ item, index }) => {
    const section = useRef(null);
    const itemEls = useRef(new Array());
    const svgList = [
        {
            img: <SVG_Tcpdf />,
            widthClass: 'w-150',
        },
        {
            img: <SVG_PhpMailer />,
            widthClass: 'w-100',
        },
    ];

    useEffect(() => {
        const scrollTrigger = {
            trigger: section.current,
            start: 'top 60%',
            end: 'bottom top',
            toggleActions: 'restart none none reverse',
        };
        const scrollTl = gsap.timeline({ scrollTrigger });
        itemEls.current.map(el => {
            scrollTl.from(el, {
                x: 50,
                opacity: 0,
                duration: 0.2,
                ease: 'back.out(1.2)',
            });
        });
    }, []);

    return (
        <li className='flex-center flex-col' ref={section}>
            <figure
                className={svgList[index].widthClass}
                ref={element => itemEls.current.push(element)}
            >
                {svgList[index].img}
            </figure>
            <div className='w-full laptop:w-260 flex flex-col rounded-3xl overflow-hidden px-5 laptop:px-10 bg-blue'>
                <ul className='flex flex-col space-y-5 px-5 lapotp:px-10 pt-20 pb-10 bg-white'>
                    {item.contents.map(content => (
                        <li
                            key={content}
                            className='text-rem32 font-500 tracking-wider text-black text-base'
                        >
                            # {content}
                        </li>
                    ))}
                </ul>
                <div className='flex justify-end bg-blue'>
                    <span className='text-rem48 font-500 tracking-wider text-white text-base'>
                        {item.title}
                    </span>
                </div>
            </div>
        </li>
    );
};

const PhpLibrary = () => {
    const langTrans = useLangTrans();

    return (
        <section className='w-full pt-20 pb-40 laptop:pb-20 flex-center'>
            <div className='max-w-1280 w-11/12 h-full laptop:space-y-6 flex flex-col justify-between relative'>
                <SectionTitle title={langTrans('backend.php_library.title')} color='blue' />
                <ul className='w-full space-y-20'>
                    {langTrans('backend.php_library.list', { returnObjects: true }).map(
                        (item, index) => (
                            <Item key={item.title} item={item} index={index} />
                        )
                    )}
                </ul>
            </div>
        </section>
    );
};

export default PhpLibrary;
