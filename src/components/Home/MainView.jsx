import React, { useEffect, useRef } from 'react';
import { useIsMobileUI } from '../../constant/RwdContext';
import { useLangTrans } from '../../constant/LangContext';
import { gsap } from '../../constant/gsap';

import PageTitle from '../PageTitle';
import SVG_MainView from './SVG_MainView';

const MainView = () => {
    const isMobileUI = useIsMobileUI();
    const langTrans = useLangTrans();
    const mainViewMask = useRef(null);
    const data_cursor = useRef(null);
    const date_from = useRef(null);
    const date_to = useRef(null);

    useEffect(() => {
        const cursor_h1 = gsap.timeline();
        cursor_h1.to(data_cursor.current, { opacity: 0, ease: 'power2.inOut', repeat: 10 });

        const wordsTl = gsap.timeline({ delay: 0 }).pause();
        gsap.timeline()
            .to(mainViewMask.current, {
                width: 0,
                delay: 0.2,
                duration: 0.7,
                ease: 'back.out(1.2)',
            })
            .to(date_from.current, {
                delay: 0.1,
                duration: 0.8,
                text: '2016.08.01 ~ ',
                onComplete: () => wordsTl.play(),
            });

        const words = [
            {
                repeat: 1,
                yoyo: true,
                duration: 0.8,
                text: '2021.',
                color: '#6d6d6d',
            },
            {
                repeat: 0,
                yoyo: false,
                duration: 0.8,
                text: 'never end',
                color: '#0167A1',
            },
        ];
        words.forEach(word => {
            const { repeat, yoyo, duration, text, color } = word;
            const tl = gsap.timeline({ delay: 0.1, repeat: repeat, yoyo: yoyo });
            tl.to(date_to.current, {
                duration: duration,
                text: text,
                color: color,
            });
            wordsTl.add(tl);
        });
    }, []);
    return (
        <section
            className='w-full bg-grey-light py-10 laptop:py-20 flex-center'
            style={{ height: isMobileUI ? '66rem' : 'calc(100vh - 5rem)' }}
        >
            <div className='max-w-1280 w-11/12 h-full flex bg-blue pl-20 pr-5 relative rounded-3xl overflow-hidden'>
                <div
                    className='w-full bg-white px-10 laptop:px-20 pt-20 pb-10 flex justify-center align-top border-5 laptop:border-10 border-blue'
                    style={{ borderStyle: 'dashed none' }}
                >
                    <div className='w-256 leading-normal tracking-wider text-base relative'>
                        <figure className='w-105 absolute bottom-0 right-0'>
                            <SVG_MainView />
                        </figure>
                        <div className='absolute top-0 left-0 space-y-20'>
                            <PageTitle title={langTrans('web_title')} />
                            <div className='text-rem48 laptop:text-rem36 font-700 text-grey space-y-10'>
                                <div>{langTrans('professional_title')}</div>
                                <div>
                                    <div>{langTrans('coding_life')}</div>
                                    <div>
                                        <span ref={date_from}></span>
                                        <span ref={date_to}></span>
                                        <span ref={data_cursor}>_</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className='w-full h-full absolute top-0 right-0 bg-blue'
                    ref={mainViewMask}
                ></div>
            </div>
        </section>
    );
};

export default MainView;
