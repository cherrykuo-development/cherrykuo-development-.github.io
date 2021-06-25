import React, { useEffect } from 'react';
import { useLangTrans } from '../../constant/LangContext';

import PageTitle from '../PageTitle';
import SVG_MainView from './SVG_MainView';

const MainView = () => {
    const langTrans = useLangTrans();

    useEffect(() => {}, []);

    return (
        <section className='w-full bg-grey-light py-10 laptop:py-20 flex-center'>
            <div className='max-w-1280 w-11/12 h-full flex-center'>
                <div className='w-full space-y-20'>
                    <PageTitle title={langTrans('frontend.page_title')} />
                    <div className='w-full flex justify-end'>
                        <SVG_MainView />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MainView;
