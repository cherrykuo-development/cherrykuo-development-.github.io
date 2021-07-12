import React from 'react';

import Wave from '../../components/Wave';
import MainView from '../../components/BackEnd/MainView';
import PhpFramework from '../../components/BackEnd/PhpFramework';
import PhpLibrary from '../../components/BackEnd/PhpLibrary';

const BackEnd = () => {
    return (
        <>
            <MainView />
            <Wave />
            <PhpFramework />
            <PhpLibrary />
        </>
    );
};

export default BackEnd;
