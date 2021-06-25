import React from 'react';

const SVG_Sql = () => {
    const list = [
        {
            name: 'create',
        },
        {
            name: 'retrieve',
        },
        {
            name: 'update',
        },
        {
            name: 'delete',
        },
    ];

    return (
        <>
            {list.map(item => (
                <div key={item.name}></div>
            ))}
        </>
    );
};

export default SVG_Sql;
