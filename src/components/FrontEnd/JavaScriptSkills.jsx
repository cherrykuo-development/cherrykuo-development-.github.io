import React from 'react';
import { useIsMobileUI } from '../../constant/RwdContext';
import { useLangTrans } from '../../constant/LangContext';

import SectionTitle from '../SectionTitle';
import SVG_Vite from './SVG_Vite';
import SVG_BabylonJs from './SVG_BabylonJs';
import SVG_Gsap from './SVG_Gsap';

const Item = ({ item, index }) => {
    const isMobileUI = useIsMobileUI();
    const svgList = [<SVG_Vite />, <SVG_BabylonJs />, <SVG_Gsap />];

    return (
        <li className='border-5 laptop:border-20 border-solid border-blue rounded-xl bg-blue'>
            {isMobileUI && (
                <div className='w-full flex-center'>
                    <figure className='w-120 py-10'>{svgList[index]}</figure>
                </div>
            )}

            <div className='flex justify-between items-center px-8 laptop:px-20 py-10 rounded-xl bg-white'>
                {!isMobileUI && <figure className='w-100 flex-center'>{svgList[index]}</figure>}

                <div className='w-full laptop:w-160 flex flex-col justify-center space-y-10'>
                    <div className='flex-center'>
                        <span className='text-rem48 font-500 tracking-wider text-white text-base uppercase px-20 bg-blue box-shadow rounded-xl'>
                            {item.title}
                        </span>
                    </div>
                    <ul className='space-y-3'>
                        {item.contents.map(content => (
                            <li key={content} className='flex-center'>
                                <span className='text-rem28 laptop:text-rem32 font-500 tracking-wider text-black text-base uppercase'>
                                    # {content}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </li>
    );
};

const JavaScriptSkills = () => {
    const langTrans = useLangTrans();

    return (
        <section className='w-full py-20 flex-center'>
            <div className='max-w-1280 w-11/12 h-full laptop:space-y-6 flex flex-col justify-between relative'>
                <SectionTitle title={langTrans('frontend.javascript_skills.title')} color='blue' />
                <ul className='space-y-20'>
                    {langTrans('frontend.javascript_skills.list', { returnObjects: true }).map(
                        (item, index) => (
                            <Item key={item.title} item={item} index={index} />
                        )
                    )}
                </ul>
            </div>
        </section>
    );
};

export default JavaScriptSkills;
