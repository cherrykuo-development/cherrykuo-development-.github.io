import React from 'react';
import { useLangTrans } from '../../constant/LangContext';

import PageTitle from '../PageTitle';
import SVG_Figma from './SVG_Figma';
import SVG_Git from './SVG_Git';
import SVG_GoogleSheets from './SVG_GoogleSheets';
import SVG_GoogleAppsScript from './SVG_GoogleAppsScript';
import SVG_UiUx from './SVG_UiUx';
import SVG_DataStudio from './SVG_DataStudio';
import SVG_Seo from './SVG_Seo';

const MainView = () => {
    const langTrans = useLangTrans();

    return (
        <section className='w-full bg-grey-light py-10 laptop:py-20 flex-center'>
            <div className='max-w-1280 w-11/12 h-full flex-center'>
                <div className='w-full space-y-20'>
                    <PageTitle title={langTrans('others.page_title')} />

                    <div className='w-full relative flex flex-col'>
                        <figure className='w-50 laptop:w-60'>
                            <SVG_Figma />
                        </figure>
                        <figure className='w-100 laptop:w-130 absolute top-0 left-1/2 transform -translate-x-1/2'>
                            <SVG_Git />
                        </figure>
                        <figure className='w-50 laptop:w-70 absolute top-0 right-0'>
                            <SVG_GoogleSheets />
                        </figure>
                        <figure className='w-80 laptop:w-130'>
                            <SVG_GoogleAppsScript />
                        </figure>
                        <figure className='w-40 laptop:w-60 absolute top-1/2 left-1/2 transform -translate-y-1/2'>
                            <SVG_UiUx />
                        </figure>
                        <figure className='w-40 laptop:w-50 absolute bottom-0 left-1/3 laptop:left-1/2 transform translate-x-1/4 laptop:-translate-x-1/2'>
                            <SVG_DataStudio />
                        </figure>
                        <figure className='w-90 laptop:w-120 absolute bottom-0 right-0'>
                            <SVG_Seo />
                        </figure>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MainView;
