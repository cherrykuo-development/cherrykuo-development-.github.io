import React from 'react';
import { useLangTrans } from '../../constant/LangContext';

import SectionTitle from '../SectionTitle';
import SVG_Vue from './SVG_Vue';
import SVG_React from './SVG_React';

const Item = ({ item, index }) => {
    const svgList = [<SVG_Vue />, <SVG_React />];

    return (
        <li className={'flex justify-between ' + (index % 2 === 1 ? 'flex-row-reverse' : '')}>
            <div className='w-100 laptop:w-150 flex-center'>
                <figure className='w-120'>{svgList[index]}</figure>
            </div>
            <div className='w-120 laptop:w-150 bg-white rounded-xl px-5 laptop:px-10 pt-5 flex flex-col'>
                <div className='w-full bg-blue box-shadow rounded-xl flex-center py-2 laptop:py-0'>
                    <span className='text-rem48 font-500 tracking-wider text-white text-base'>
                        {item.title}
                    </span>
                </div>
                <div className='h-full flex-center py-5'>
                    <ul className='space-y-3'>
                        {item.contents.map(content => (
                            <li
                                key={content}
                                className='text-rem32 font-500 tracking-wide laptop:tracking-wider leading-normal text-black-dark text-base text-center'
                            >
                                - {content} -
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </li>
    );
};

const JavaScriptFramework = () => {
    const langTrans = useLangTrans();

    return (
        <section className='w-full bg-blue py-20 flex-center'>
            <div className='max-w-1280 w-11/12 h-full laptop:space-y-6 flex flex-col justify-between relative'>
                <SectionTitle
                    title={langTrans('frontend.javascript_framework.title')}
                    color='white'
                />
                <ul className='space-y-20'>
                    {langTrans('frontend.javascript_framework.list', { returnObjects: true }).map(
                        (item, index) => (
                            <Item key={item.title} item={item} index={index} />
                        )
                    )}
                </ul>
            </div>
        </section>
    );
};

export default JavaScriptFramework;
