import React from 'react';
import { useLangTrans } from '../../constant/LangContext';

import SectionTitle from '../SectionTitle';
import SVG_TailwindCss from './SVG_TailwindCss';
import SVG_BootStrap from './SVG_BootStrap';
import SVG_Sass from './SVG_Sass';

const Item = ({ item, index }) => {
    const svgList = [<SVG_TailwindCss />, <SVG_BootStrap />, <SVG_Sass />];

    return (
        <li className='flex flex-col space-y-10'>
            <div className='flex justify-center items-baseline space-x-20'>
                <figure className='w-100'>{svgList[index]}</figure>
                <div className='bg-white rounded-xl px-10 laptop:px-20'>
                    <span className='text-rem48 font-500 tracking-wider text-blue text-base uppercase'>
                        {item.title}
                    </span>
                </div>
            </div>
            <div className='flex-center space-x-5'>
                <div className='w-16'>
                    <svg viewBox='0 0 60 114' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <path d='M0 57.1187H20V113.119H0V57.1187Z' fill='#EEEEEE' />
                        <path d='M40 1.11865H60V113.119H40V1.11865Z' fill='#EEEEEE' />
                    </svg>
                </div>
                <div className='flex flex-col'>
                    {item.contents.map(content => (
                        <span
                            key={content}
                            className='text-rem32 font-500 tracking-wider text-white text-base uppercase'
                        >
                            。{content}
                        </span>
                    ))}
                </div>
            </div>
        </li>
    );
};

const CssSkills = () => {
    const langTrans = useLangTrans();

    return (
        <section className='w-full bg-blue py-20 flex-center'>
            <div className='max-w-1280 w-11/12 h-full laptop:space-y-6 flex flex-col justify-between relative'>
                <SectionTitle title={langTrans('frontend.css_skills.title')} color='white' />
                <ul className='space-y-40'>
                    {langTrans('frontend.css_skills.list', { returnObjects: true }).map(
                        (item, index) => (
                            <Item key={item.title} item={item} index={index} />
                        )
                    )}
                </ul>
            </div>
        </section>
    );
};

export default CssSkills;
