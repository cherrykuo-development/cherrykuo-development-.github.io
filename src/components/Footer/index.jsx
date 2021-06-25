import React, { useState } from 'react';
import { useLangTrans } from '../../constant/LangContext';

import logo from '../../assets/images/logo.svg';
import to_top from '../../assets/images/to_top.svg';

const Footer = () => {
    const langTrans = useLangTrans();
    const [showScroll, setShowScroll] = useState(false);

    const checkScrollTop = () => {
        if (!showScroll && window.pageYOffset > 0) {
            setShowScroll(true);
        } else if (showScroll && window.pageYOffset <= 0) {
            setShowScroll(false);
        }
    };

    const scrollToTop = () => {
        window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    };

    window.addEventListener('scroll', checkScrollTop);

    return (
        <section className='w-full bg-blue py-20 flex-center'>
            <div className='max-w-1280 w-11/12 h-full flex-center'>
                <div className='flex space-x-5 laptop:space-x-3'>
                    <figure className='w-9'>
                        <img src={logo} alt='logo' />
                    </figure>
                    <span className='text-rem36 laptop:text-rem24 font-700 tracking-wider text-white text-base'>
                        {langTrans('web_title')} @ 2021
                    </span>
                </div>
            </div>

            {showScroll && (
                <div className='group fixed bottom-20 right-20'>
                    <figure
                        className='w-16 min-w-36 p-4 box-shadow rounded-xl transition-colors duration-200 group-hover:bg-white cursor-pointer'
                        onClick={scrollToTop}
                    >
                        <img src={to_top} alt='to top' />
                    </figure>
                </div>
            )}
        </section>
    );
};

export default Footer;
