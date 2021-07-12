import React from 'react';
import { useLangTrans } from '../../constant/LangContext';

import SectionTitle from '../SectionTitle';
import SVG_GoogleAppsScript from './SVG_GoogleAppsScript';
import SVG_Sql from './SVG_Sql';
import SVG_GoogleSheets from './SVG_GoogleSheets';
import SVG_DataStudio from './SVG_DataStudio';

const DataAnalysis = ({ item }) => {
    const svgList = [
        {
            img: <SVG_Sql />,
            widthClass: 'w-64',
        },
        {
            img: <SVG_GoogleSheets />,
            widthClass: 'w-44',
        },
        {
            img: <SVG_DataStudio />,
            widthClass: 'w-70',
        },
    ];

    return (
        <div className='w-full flex-center flex-col'>
            <ul className='h-auto laptop:h-96 flex-center laptop:flex flex-wrap'>
                {item.contents.map((content, index) => (
                    <li
                        key={content}
                        className='h-full flex flex-col-reverse laptop:flex-col items-center mx-5 my-5 laptop:my-0'
                    >
                        <div className='min-w-full border-2 laptop:border-4 border-solid border-blue px-5 py-1 rounded-xl flex-center mb-0 laptop:mb-10'>
                            <span className='text-rem32 font-500 tracking-wider text-blue text-base'>
                                {content}
                            </span>
                        </div>
                        <figure className={'mb-10 laptop:mb-0 ' + svgList[index].widthClass}>
                            {svgList[index].img}
                        </figure>
                    </li>
                ))}
            </ul>
            <div className='w-full bg-blue rounded-bl-3xl rounded-br-3xl flex justify-end px-10'>
                <span className='text-rem48 font-500 tracking-wider text-white text-base'>
                    {item.title}
                </span>
            </div>
        </div>
    );
};

const Gas = ({ item }) => {
    return (
        <div className='rounded-3xl bg-blue px-15 laptop:px-10'>
            <div className='flex-center flex-col laptop:flex-row space-x-0 laptop:space-x-10 space-y-20 laptop:space-y-0 py-20 bg-white'>
                <ul className='flex flex-col space-y-3'>
                    {item.contents.map(content => (
                        <li
                            key={content}
                            className='text-rem32 font-500 tracking-wider text-black text-base'
                        >
                            # {content}
                        </li>
                    ))}
                </ul>
                <figure className='w-120 laptop:w-105'>
                    <SVG_GoogleAppsScript />
                </figure>
            </div>
        </div>
    );
};

const GoogleAppsScript = () => {
    const langTrans = useLangTrans();

    return (
        <section className='w-full py-20 flex-center'>
            <div className='max-w-1280 w-11/12 h-full laptop:space-y-6 flex flex-col justify-between relative'>
                <SectionTitle title={langTrans('others.google_apps_script.title')} color='blue' />

                <ul className='space-y-20'>
                    {langTrans('others.google_apps_script.list', { returnObjects: true }).map(
                        (item, index) => (
                            <div key={item.title}>
                                {index === 0 ? <Gas item={item} /> : <DataAnalysis item={item} />}
                            </div>
                        )
                    )}
                </ul>
            </div>
        </section>
    );
};

export default GoogleAppsScript;
