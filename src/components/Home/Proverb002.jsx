import React, { useEffect, useRef } from 'react';
import { useLangTrans } from '../../constant/LangContext';

import proverb002 from '../../assets/images/bg_proverb002.png';

const Proverb002 = () => {
    const langTrans = useLangTrans();

    return (
        <section className='w-full bg-grey-light py-20 flex-center'>
            <div className='max-w-1280 w-11/12 h-full flex flex-col-reverse laptop:flex-row justify-between'>
                <figure className='w-130'>
                    <img src={proverb002} alt='proverb 002' />
                </figure>
                <div className='flex flex-col items-end space-y-10'>
                    <div className='w-8 laptop:w-10 h-11 laptop:h-16 mr-3 laptop:mr-5 bg-blue box-shadow'></div>
                    {langTrans('proverb002', { returnObjects: true }).map(item => (
                        <div
                            key={item}
                            className='text-rem28 font-700 leading-tight tracking-wide text-grey-dark text-base'
                        >
                            {item}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Proverb002;
