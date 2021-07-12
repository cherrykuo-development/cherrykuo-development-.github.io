import React from 'react';

import Wave from '../../components/Wave';
import MainView from '../../components/FrontEnd/MainView';
import JavaScriptFramework from '../../components/FrontEnd/JavaScriptFramework';
import JavaScriptSkills from '../../components/FrontEnd/JavaScriptSkills';
import CssSkills from '../../components/FrontEnd/CssSkills';

const FrontEnd = () => {
    return (
        <>
            <MainView />
            <Wave />
            <JavaScriptFramework />
            <JavaScriptSkills />
            <Wave />
            <CssSkills />
        </>
    );
};

export default FrontEnd;
