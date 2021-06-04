import React from 'react';
import { useLocation, Link, NavLink } from 'react-router-dom';
import { useIsMobileUI } from '../../constant/RwdContext';
import { useLang, useLangUpdate, useLangTrans, useLangList } from '../../constant/LangContext';

import logo from '../../assets/images/logo.svg';
import hamburger from '../../assets/images/hamburger.svg';

const Header = () => {
    const { pathname, search } = useLocation();
    const query = new URLSearchParams(search);

    const getLocale = () => {
        return query.get('locale') ? `?locale=${query.get('locale')}` : '';
    };

    const isMobileUI = useIsMobileUI();
    const lang = useLang();
    const langUpdate = useLangUpdate();
    const langTrans = useLangTrans();
    const langList = useLangList();

    return (
        <header className='w-full h-24 md:h-20 bg-blue flex-center fixed top-0 left-0 z-30'>
            <div className='max-w-92 laptop:max-w-1280 w-full laptop:w-11/12 flex justify-between items-center'>
                <div className='flex items-center'>
                    {/* LOGO */}
                    <Link to={{ pathname: '/', search: getLocale() }}>
                        <div className='flex items-center laptop:mr-10'>
                            <figure className='w-16 md:w-12 laptop:w-9 mr-5 laptop:mr-3'>
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
                {!isMobileUI && (
                    <ul className='flex space-x-2'>
                        {Object.keys(langList).map(item => (
                            <li key={item}>
                                <Link to={{ pathname: pathname, search: `?locale=${item}` }}>
                                    <div
                                        className='group cursor-pointer relative'
                                        onClick={() => langUpdate(item)}
                                    >
                                        <div
                                            className={
                                                'w-12 h-8 bg-white rounded-md transition-opacity duration-200 group-hover:opacity-100 ' +
                                                (item === lang
                                                    ? 'opacity-100 box-shadow'
                                                    : 'opacity-0')
                                            }
                                        ></div>
                                        <div className='w-full h-full absolute top-0 left-0 flex-center'>
                                            <span
                                                className={
                                                    'text-rem18 font-500 tracking-wider text-base group-hover:text-blue ' +
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
                )}

                {/* HAMBURGER - MOBILE ONLY */}
                {isMobileUI && (
                    <figure className='w-20 md:w-12 cursor-pointer py-2'>
                        <img src={hamburger} alt='hamburger' />
                    </figure>
                )}
            </div>
        </header>
    );
};

export default Header;
