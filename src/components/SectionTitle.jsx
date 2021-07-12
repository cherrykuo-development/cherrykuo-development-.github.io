import React from 'react';

const SectionTitle = ({ title, color }) => {
    return (
        <div className={'w-full flex-center mb-20'}>
            <span
                className={
                    'text-rem64 font-700 tracking-wider ' +
                    ('text-' + color) +
                    ' text-base border-b-2 laptop:border-b-5 border-solid ' +
                    ('border-' + color) +
                    ' pb-3'
                }
            >
                {title}
            </span>
        </div>
    );
};

export default SectionTitle;
