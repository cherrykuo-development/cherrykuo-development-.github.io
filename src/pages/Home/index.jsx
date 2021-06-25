import React from 'react';

import MainView from '../../components/Home/MainView';
import Proverb001 from '../../components/Home/Proverb001';
import Experience from '../../components/Home/Experience';
import Skills from '../../components/Home/Skills';
import Responsibilities from '../../components/Home/Responsibilities';
import Projects from '../../components/Home/Projects';
import Proverb002 from '../../components/Home/Proverb002';

const Home = () => {
    return (
        <>
            <MainView />
            <Proverb001 />
            <Experience />
            <Skills />
            <Responsibilities />
            <Projects />
            <Proverb002 />
        </>
    );
};

export default Home;
