import React from 'react';
import { useLangTrans } from '../../constant/LangContext';

import main_view from '../../assets/images/main_view.svg';

const Home = () => {
    const langTrans = useLangTrans();

    return (
        <>
            <section className='w-full h-full bg-grey-light py-20 flex-center'>
                <div className='max-w-1280 w-11/12 h-full flex bg-blue pl-20 pr-5'>
                    <div className='w-full bg-white px-20 pt-20 pb-10 flex justify-center align-top'>
                        <div className='w-256 leading-normal tracking-wider text-base relative'>
                            <h1 className='text-rem72 font-900 text-blue mb-10'>
                                {langTrans('web_title')}
                            </h1>
                            <div className='text-rem36 font-700 text-grey mb-10'>
                                {langTrans('front_end')}
                            </div>
                            <div className='text-rem36 font-700 text-grey'>
                                {langTrans('coding_life')}
                            </div>
                            <div className='text-rem36 font-700'>
                                <span className='text-grey'>2016.08.01 ~ </span>
                                <span className='text-blue'>never end</span>
                            </div>
                            <figure className='w-105 absolute bottom-0 right-0'>
                                <img src={main_view} alt='main_view' />
                            </figure>
                        </div>
                    </div>
                </div>
            </section>
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
        </>
    );
};

export default Home;
