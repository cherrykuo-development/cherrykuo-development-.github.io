import React from 'react';

import Wave from '../../components/Wave';
import MainView from '../../components/Others/MainView';
import Git from '../../components/Others/Git';
import GoogleAppsScript from '../../components/Others/GoogleAppsScript';
import UiUx from '../../components/Others/UiUx';

const Others = () => {
    return (
        <>
            <MainView />
            <Wave />
            <Git />
            <GoogleAppsScript />
            <Wave />
            <UiUx />
        </>
    );
};

export default Others;
