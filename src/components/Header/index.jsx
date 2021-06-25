import React, { useState, useEffect } from 'react';
import { useLocation, Link, NavLink } from 'react-router-dom';
import { useIsMobileUI, useIsHorizontal } from '../../constant/RwdContext';
import { useLang, useLangUpdate, useLangTrans, useLangList } from '../../constant/LangContext';
import { Transition } from 'react-transition-group';

import logo from '../../assets/images/logo.svg';
import SVG_Hamburger from './SVG_Hamburger';
import icon_home from '../../assets/images/icon_home.svg';
import icon_frontend from '../../assets/images/icon_frontend.svg';
import icon_backend from '../../assets/images/icon_backend.svg';
import icon_others from '../../assets/images/icon_others.svg';

const Lang = () => {
    const { pathname } = useLocation();
    const lang = useLang();
    const langUpdate = useLangUpdate();
    const langList = useLangList();

    return (
        <ul className='flex space-x-3 laptop:space-x-2'>
            {Object.keys(langList).map(item => (
                <li key={item}>
                    <Link to={{ pathname: pathname, search: `?locale=${item}` }}>
                        <div
                            className='group cursor-pointer relative'
                            onClick={() => langUpdate(item)}
                        >
                            <div
                                className={
                                    'w-28 laptop:w-12 h-16 laptop:h-8 bg-white rounded-md transition-opacity duration-200 group-hover:opacity-100 ' +
                                    (item === lang ? 'opacity-100 box-shadow' : 'opacity-0')
                                }
                            ></div>
                            <div className='w-full h-full absolute top-0 left-0 flex-center'>
                                <span
                                    className={
                                        'text-rem36 laptop:text-rem18 font-500 tracking-wider text-base group-hover:text-blue ' +
                                        (item === lang ? 'text-blue' : 'text-white')
                                    }
                                >
                                    {item}
                                </span>
                            </div>
                        </div>
                    </Link>
                </li>
            ))}
        </ul>
    );
};

const Header = () => {
    const [hamburgerActive, setHamburgerActive] = useState(false);
    const hamburgerMaskStyles = {
        entering: { transform: 'translateX(0)' },
        entered: { transform: 'translateX(0)' },
        exiting: { transform: 'translateX(100%)' },
        exited: { transform: 'translateX(100%)' },
    };
    const mobileIcons = [icon_home, icon_frontend, icon_backend, icon_others];

    const { pathname, search } = useLocation();
    const query = new URLSearchParams(search);

    const isMobileUI = useIsMobileUI();
    const isHorizontal = useIsHorizontal();
    const langTrans = useLangTrans();

    const hamburgerClick = () => {
        setHamburgerActive(prev => !prev);
    };

    const getLocale = () => {
        return query.get('locale') ? `?locale=${query.get('locale')}` : '';
    };

    useEffect(() => {
        document.body.style.overflow = hamburgerActive ? 'hidden' : 'unset';
    }, [hamburgerActive]);

    return (
        <header className='w-full h-24 md:h-20 bg-blue flex-center fixed top-0 left-0 z-30 box-shadow'>
            <div
                className={
                    'max-w-92 laptop:max-w-1280 w-full laptop:w-11/12 flex justify-between items-center ' +
                    (hamburgerActive ? 'fixed z-40 overflow-hidden' : '')
                }
            >
                <div className='flex items-center'>
                    {/* LOGO */}
                    <Link to={{ pathname: '/', search: getLocale() }}>
                        <div className='flex items-center space-x-5 laptop:space-x-3 laptop:mr-10'>
                            <figure className='w-16 md:w-12 laptop:w-9'>
                                <img src={logo} alt='logo' />
                            </figure>
                            <span className='text-rem48 md:text-rem36 laptop:text-rem24 font-700 laptop:font-900 tracking-wider text-white text-base'>
                                {langTrans('web_title')}
                            </span>
                        </div>
                    </Link>

                    {/* NAVBAR - PC ONLY */}
                    {!isMobileUI && (
                        <nav>
                            <ul className='flex space-x-10'>
                                {langTrans('page_list', { returnObjects: true }).map(item => (
                                    <li key={item.text} className='px-3'>
                                        <NavLink
                                            className='relative py-2 border-b border-solid border-transparent hover:border-white'
                                            to={{
                                                pathname: item.url,
                                                search: getLocale(),
                                            }}
                                            activeStyle={{
                                                borderBottom: '1px solid white',
                                            }}
                                            exact
                                        >
                                            <span className='text-rem24 font-500 leading-6 tracking-wide text-white text-base inline-block'>
                                                {item.text}
                                            </span>
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    )}
                </div>
                {/* LANG - PC ONLY */}
                {!isMobileUI && <Lang />}

                {/* HAMBURGER BUTTON - MOBILE ONLY */}
                {isMobileUI && (
                    <figure
                        className='w-24 md:w-20 cursor-pointer pl-10 py-2'
                        onClick={hamburgerClick}
                    >
                        <SVG_Hamburger active={hamburgerActive} />
                    </figure>
                )}
            </div>

            {/* HAMBURGER MASK - MOBILE ONLY */}
            {isMobileUI && (
                <Transition in={hamburgerActive} timeout={500}>
                    {state => (
                        <section
                            className='w-full bg-blue fixed top-24 md:top-20 left-0 transition-transform duration-200'
                            style={{
                                height: isHorizontal ? 'calc(100% - 6rem)' : '100%',
                                overflow: isHorizontal ? 'scroll' : 'auto',
                                ...hamburgerMaskStyles[state],
                            }}
                        >
                            <nav
                                className={
                                    'w-full px-40 ' +
                                    (isHorizontal ? 'py-10 space-y-10' : 'py-20 space-y-20')
                                }
                            >
                                <ul
                                    className={
                                        'flex flex-wrap ' +
                                        (isHorizontal ? 'justify-between' : 'space-y-20')
                                    }
                                >
                                    {langTrans('page_list', { returnObjects: true }).map(
                                        (item, index) => (
                                            <li
                                                key={item.text}
                                                style={{
                                                    width: isHorizontal ? '47.5%' : '100%',
                                                }}
                                                onClick={hamburgerClick}
                                            >
                                                <NavLink
                                                    className={
                                                        'w-full relative border-b border-solid border-transparent hover:border-white flex items-end space-x-10 ' +
                                                        (isHorizontal ? 'py-5' : 'py-2')
                                                    }
                                                    to={{
                                                        pathname: item.url,
                                                        search: getLocale(),
                                                    }}
                                                    activeStyle={{
                                                        borderBottom: '1px solid white',
                                                    }}
                                                    exact
                                                >
                                                    <figure className='w-16'>
                                                        <img
                                                            src={mobileIcons[index]}
                                                            alt={item.text}
                                                        />
                                                    </figure>
                                                    <span className='text-rem36 font-700 tracking-wide text-white text-base inline-block'>
                                                        {item.text}
                                                    </span>
                                                </NavLink>
                                            </li>
                                        )
                                    )}
                                </ul>
                                <div className='flex justify-end' onClick={hamburgerClick}>
                                    <Lang />
                                </div>
                            </nav>
                        </section>
                    )}
                </Transition>
            )}
        </header>
    );
};

export default Header;
