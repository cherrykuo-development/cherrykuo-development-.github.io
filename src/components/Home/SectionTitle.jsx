import React from 'react';

const SectionTitle = ({ boxColor, textColor, title }) => {
    return (
        <div className='flex mb-10 space-x-5'>
            <div className={`w-10 h-16 ${boxColor} box-shadow`}></div>
            <span className={`text-rem48 font-700 tracking-wider ${textColor} text-base`}>
                {title}
            </span>
        </div>
    );
};

export default SectionTitle;
