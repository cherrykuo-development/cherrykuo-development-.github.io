import React, { useEffect, useRef } from 'react';
import { useLangTrans } from '../../constant/LangContext';

const Proverb001 = () => {
    const langTrans = useLangTrans();

    return (
        <section className='w-full bg-blue py-20 flex-center'>
            <div className='max-w-1280 w-11/12 h-full space-y-10'>
                {langTrans('proverb001', { returnObjects: true }).map(item => (
                    <div
                        key={item}
                        className='text-rem28 font-700 leading-10 tracking-wider text-white text-base'
                    >
                        {item}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Proverb001;
