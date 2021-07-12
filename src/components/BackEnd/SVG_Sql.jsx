import React, { useEffect, useRef } from 'react';
import { useIsMobileUI } from '../../constant/RwdContext';
import { useLangTrans } from '../../constant/LangContext';
import { gsap } from '../../constant/gsap';

const Create = () => {
    return (
        <svg viewBox='0 0 100 120' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M2.24658 117.321C9.70425 114.326 48.6524 101.994 48.5072 99.8131C48.3594 97.6355 50.2849 75.4007 49.2424 75.0735C48.1998 74.7463 32.6701 64.0132 32.6701 64.0132L14.1789 65.8878L2.24658 117.321Z'
                fill='#777BB3'
                stroke='black'
                strokeWidth='5'
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M2.48779 117.196C6.63248 114.687 13.2488 114.491 16.4181 111.116C15.1385 107.699 11.5923 102.497 7.30095 102.056C6.02135 106.039 2.74323 111.139 2.48779 117.196Z'
                fill='black'
                stroke='black'
                strokeWidth='5'
                strokeLinejoin='round'
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M14.3675 65.224C73.6151 3.19671 73.4567 1.88483 73.4567 1.88483C73.4567 1.88483 81.2427 2.76923 83.1061 5.26776C84.9668 7.76598 32.3255 73.3279 29.1821 71.4806C26.0386 69.6303 14.944 65.9148 14.3662 65.2246L14.3675 65.224Z'
                fill='#777BB3'
                stroke='black'
                strokeWidth='5'
                strokeLinejoin='round'
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M29.6348 71.7417C29.6348 71.7417 37.2202 80.4668 42.8023 85.5031C46.3285 82.0315 92.9152 18.499 93.1052 15.4528L82.3051 4.44489L29.6348 71.7406V71.7417Z'
                fill='#777BB3'
                stroke='black'
                strokeWidth='5'
                strokeLinejoin='round'
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M42.8286 85.7411L48.4081 100.213L98.7084 26.3733L93.1869 15.639L42.8286 85.7399V85.7411Z'
                fill='#777BB3'
                stroke='black'
                strokeWidth='5'
                strokeLinejoin='round'
            />
        </svg>
    );
};
const Retrieve = () => {
    return (
        <svg viewBox='0 0 181 120' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M4.50488 44.9253C16.5166 70.0778 27.3001 90.9511 39.3118 116.098C63.9903 101.334 74.4511 96.3465 95.9364 87.0801C105.333 90.441 115.221 84.3314 119.228 79.7462C136.956 76.6915 157.628 73.0305 177.567 70.5819C177.076 66.6149 178.058 65.0845 177.567 61.1174C156.896 42.2786 135.979 22.5275 115.302 3.68866C77.5528 17.0301 42.2546 31.5899 4.50488 44.9253Z'
                fill='black'
                stroke='black'
                strokeWidth='5'
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M9.16211 45.8436C19.9505 67.2271 30.7341 88.6046 41.5176 109.988C60.6381 97.4629 83.337 78.81 101.09 83.7913C100.228 76.4274 103.007 72.3044 106.479 67.5271C77.6346 61.3215 63.2533 81.9909 42.7458 91.9654C42.3364 97.1568 41.927 102.354 41.5176 107.545C42.0908 102.558 42.1726 97.5649 42.7458 92.5776C33.4311 74.5549 22.402 51.9531 13.0825 33.9305C10.0628 35.761 9.73524 41.5645 9.16211 45.8436Z'
                fill='#8B9DD7'
                stroke='black'
                strokeWidth='5'
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M103.782 74.5549C111.709 55.7161 118.134 54.3897 133.691 51.647C145.871 49.4985 154.415 50.0026 166.836 49.2944C165.772 53.7716 167.597 59.6891 169.23 65.6967C157.545 66.3088 148.313 65.3906 135.405 67.5271C126.823 66.6149 119.227 73.3306 113.588 80.3584C114.079 67.3291 108.193 75.3712 103.782 74.5549Z'
                fill='#8B9DD7'
                stroke='black'
                strokeWidth='5'
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M67.9923 22.6295L104.764 66.921C75.0625 62.3358 59.2075 84.7876 42.4999 92.1214C32.8578 73.0785 22.604 52.8173 12.9619 33.7744C25.0555 26.5486 33.0408 14.6355 50.5912 12.853C57.3917 12.1629 62.6848 17.8403 67.9923 22.6295Z'
                fill='#8B9DD7'
                stroke='black'
                strokeWidth='5'
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M106.532 67.6771C115.659 48.4542 134.495 51.2569 166.677 48.2381C149.69 33.8344 132.703 19.4367 115.717 5.039C93.4703 10.4404 78.5063 -1.01056 66.4897 20.373L106.532 67.6771Z'
                fill='#8B9DD7'
                stroke='black'
                strokeWidth='5'
            />
        </svg>
    );
};
const Update = () => {
    return (
        <svg viewBox='0 0 106 120' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path
                d='M20.4142 25.308L26.2456 32.7721C13.8831 42.4521 7.5853 58.0801 10.0345 73.5914C13.7665 97.15 35.9256 113.244 59.3675 109.512C82.9261 105.78 99.0206 83.6213 95.2885 60.1793C93.5391 48.7499 87.3579 38.72 78.0278 31.9557C69.8639 26.0077 60.1839 23.2087 50.2706 23.7918H50.3873L58.5511 32.3056L52.4866 38.0203L33.9429 18.5436L53.4196 0L59.1343 6.06458L50.3873 14.3451C62.2832 13.7619 73.9459 17.2607 83.7425 24.375C95.0553 32.6554 102.519 44.7846 104.735 58.6632C109.284 87.2367 89.5738 114.294 61.0003 118.726C58.2013 119.192 55.5188 119.426 52.8364 119.426C27.4118 119.426 5.01952 100.882 0.937592 74.9909C-2.0947 56.0974 5.48602 37.0873 20.6475 25.308H20.4142Z'
                fill='black'
            />
        </svg>
    );
};
const Delete = () => {
    return (
        <svg viewBox='0 0 81 120' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path
                d='M49.6954 3.18689H31.3046C27.9189 3.18689 25.1743 5.50064 25.1743 8.35481C25.1743 11.209 27.9189 13.5227 31.3046 13.5227H49.6954C53.081 13.5227 55.8257 11.209 55.8257 8.35481C55.8257 5.50064 53.081 3.18689 49.6954 3.18689Z'
                fill='black'
                stroke='black'
                strokeWidth='6'
            />
            <path
                d='M3.71826 13.4376H77.2815'
                stroke='black'
                strokeWidth='6'
                strokeLinecap='round'
            />
            <path
                d='M28.2393 22.7458L29.7718 116.457'
                stroke='black'
                strokeWidth='6'
                strokeLinecap='round'
            />
            <path
                d='M52.7606 22.7458L51.228 116.457'
                stroke='black'
                strokeWidth='6'
                strokeLinecap='round'
            />
            <path
                d='M6.47705 22.4012L9.8487 114.735'
                stroke='black'
                strokeWidth='6'
                strokeLinecap='round'
            />
            <path
                d='M74.523 22.7458L71.1514 115.079'
                stroke='black'
                strokeWidth='6'
                strokeLinecap='round'
            />
            <path
                d='M6.47705 22.7458H74.523'
                stroke='black'
                strokeWidth='6'
                strokeLinecap='square'
            />
            <path
                d='M10.7681 116.457H70.2316'
                stroke='black'
                strokeWidth='6'
                strokeLinecap='round'
            />
        </svg>
    );
};

const SVG_Sql = () => {
    const isMobileUI = useIsMobileUI();
    const langTrans = useLangTrans();
    const section = useRef(null);
    const itemEls = useRef(new Array());

    const list = [
        {
            name: langTrans('backend.main_view.sql', { returnObjects: true })[0],
            svg: <Create />,
            widthClass: {
                card: isMobileUI ? 'w-72' : 'w-56',
                svg: isMobileUI ? 'w-32' : 'w-24',
            },
        },
        {
            name: langTrans('backend.main_view.sql', { returnObjects: true })[1],
            svg: <Retrieve />,
            widthClass: {
                card: isMobileUI ? 'w-80' : 'w-64',
                svg: isMobileUI ? 'w-56' : 'w-44',
            },
        },
        {
            name: langTrans('backend.main_view.sql', { returnObjects: true })[2],
            svg: <Update />,
            widthClass: {
                card: isMobileUI ? 'w-80' : 'w-56',
                svg: isMobileUI ? 'w-32' : 'w-28',
            },
        },
        {
            name: langTrans('backend.main_view.sql', { returnObjects: true })[3],
            svg: <Delete />,
            widthClass: {
                card: isMobileUI ? 'w-72' : 'w-56',
                svg: isMobileUI ? 'w-24' : 'w-20',
            },
        },
    ];

    useEffect(() => {
        const defaults = {
            ease: 'back.out(1.2)',
        };
        const scrollTrigger = {
            trigger: section.current,
            start: 'top 60%',
            end: 'bottom top',
            toggleActions: 'restart none none reverse',
        };
        const scrollTl = gsap.timeline({ defaults, scrollTrigger });
        itemEls.current.map((el, index) => {
            index % 2 === 0
                ? scrollTl.from(el, { y: 20, duration: 0.35 }, '-=.2')
                : scrollTl.from(el, { opacity: 0, y: -30, duration: 0.25 }, '-=.5');
        });
    }, []);

    return (
        <div
            className='w-full laptop:w-256 flex justify-center laptop:justify-evenly items-end flex-wrap laptop:flex-nowrap'
            ref={section}
        >
            {list.map((item, index) => (
                <div
                    key={item.name}
                    className={
                        item.widthClass.card +
                        ' border-2 laptop:border-5 border-solid border-black rounded-3xl px-6 pt-8 pb-6 laptop:pb-8 flex-center flex-col justify-end mx-3 laptop:mx-0 my-3 laptop:my-0 ' +
                        (index % 2 === 0 ? 'bg-purple' : 'bg-purple-light')
                    }
                    ref={element => itemEls.current.push(element)}
                >
                    <figure
                        className={item.widthClass.svg}
                        ref={element => itemEls.current.push(element)}
                    >
                        {item.svg}
                    </figure>
                    <div className='font-900 tracking-wider text-black text-base text-stroke'>
                        <span className='text-rem72 laptop:text-rem64'>
                            {item.name.substring(0, 1)}
                        </span>
                        <span className='text-rem48 laptop:text-rem36'>
                            {item.name.substring(1)}
                        </span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SVG_Sql;
