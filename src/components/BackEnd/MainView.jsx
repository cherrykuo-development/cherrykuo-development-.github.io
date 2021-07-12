import React from 'react';
import { useLangTrans } from '../../constant/LangContext';

import PageTitle from '../PageTitle';
import SVG_Php from './SVG_Php';
import SVG_Sql from './SVG_Sql';

const MainView = () => {
    const langTrans = useLangTrans();
    const skills = [
        {
            name: 'PHP',
            img: <SVG_Php />,
        },
        {
            name: 'SQL',
            img: <SVG_Sql />,
        },
    ];

    return (
        <section className='w-full bg-grey-light py-10 laptop:py-20 flex-center'>
            <div className='max-w-1280 w-11/12 h-full flex-center'>
                <div className='w-full space-y-20'>
                    <PageTitle title={langTrans('backend.page_title')} />

                    <div className='w-full space-y-20'>
                        {skills.map(skill => (
                            <div key={skill.name} className='w-full flex justify-between'>
                                <div className='flex space-x-5'>
                                    <div className='w-10 bg-blue rounded-l-xl'></div>
                                    <span className='text-rem48 font-500 tracking-wider text-blue text-base'>
                                        {skill.name}
                                    </span>
                                </div>
                                <div>{skill.img}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MainView;
