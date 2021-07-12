import React from 'react';
import { useLangTrans } from '../../constant/LangContext';

import SectionTitle from '../SectionTitle';
import SVG_Git from './SVG_Git';

const Item = ({ item }) => {
    return (
        <li className='flex-center flex-col bg-white rounded-3xl space-y-20 px-10 laptop:px-20 py-20 laptop:py-10'>
            <figure className='w-120 laptop:w-130'>
                <SVG_Git />
            </figure>
            <div className='w-full flex-center border-5 laptop:border-10 border-dashed border-blue rounded-xl py-10'>
                <ul className='space-y-5'>
                    {item.contents.map(content => (
                        <li
                            key={content}
                            className='text-rem32 font-500 tracking-wide laptop:tracking-wider leading-normal text-black-dark text-base text-center'
                        >
                            。{content}
                        </li>
                    ))}
                </ul>
            </div>
        </li>
    );
};

const Git = () => {
    const langTrans = useLangTrans();

    return (
        <section className='w-full bg-blue py-20 flex-center'>
            <div className='max-w-1280 w-11/12 h-full laptop:space-y-6 flex flex-col justify-between relative'>
                <SectionTitle title={langTrans('others.git.title')} color='white' />

                <ul className='space-y-20'>
                    {langTrans('others.git.list', { returnObjects: true }).map((item, index) => (
                        <Item key={item.title} item={item} index={index} />
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Git;
