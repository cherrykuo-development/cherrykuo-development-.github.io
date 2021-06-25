import React from 'react';

const SVG_Hamburger = ({ active }) => {
    const style = {
        top: {
            transform: active ? 'rotate(-135deg) scale(1.2)' : 'unset',
            transformOrigin: '16px 8px',
        },
        middle: {
            opacity: active ? 0 : 1,
        },
        bottom: {
            transform: active ? 'rotate(-45deg) scale(1.2)' : 'unset',
            transformOrigin: '1px 23px',
        },
    };
    return (
        <svg viewBox='0 0 28 28' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path
                d='M2.68115 3.20251H25.3202'
                stroke='white'
                strokeWidth='4'
                strokeLinecap='round'
                className='transition-transform duration-200'
                style={style.top}
            />
            <path
                d='M2.68115 13.999H25.3202'
                stroke='white'
                strokeWidth='4'
                strokeLinecap='round'
                className='transition-transform duration-200'
                style={style.middle}
            />
            <path
                d='M2.68115 24.7955H25.3202'
                stroke='white'
                strokeWidth='4'
                strokeLinecap='round'
                className='transition-transform duration-200'
                style={style.bottom}
            />
        </svg>
    );
};

export default SVG_Hamburger;
