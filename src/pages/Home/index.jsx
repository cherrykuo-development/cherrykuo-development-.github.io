import React, { useEffect, useRef } from 'react';
import { useLangTrans } from '../../constant/LangContext';

import MainView from '../../components/Home/MainView';
import Experience from '../../components/Home/Experience';

const Home = () => {
    const langTrans = useLangTrans();

    useEffect(() => {}, []);

    return (
        <>
            <MainView />
            <section className='w-full bg-blue py-20 flex-center'>
                <div className='max-w-1280 w-11/12 h-full space-y-6'>
                    {langTrans('proverb001', { returnObjects: true }).map(item => (
                        <div
                            key={item}
                            className='text-rem36 font-700 leading-tight tracking-wider text-white text-base'
                        >
                            {item}
                        </div>
                    ))}
                </div>
            </section>
            <Experience />
        </>
    );
};

export default Home;
