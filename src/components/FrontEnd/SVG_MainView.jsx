import React, { useEffect, useRef } from 'react';
import { gsap } from '../../constant/gsap';

const HTML = ({ text, icon }) => {
    return (
        <svg viewBox='0 0 280 400' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <g ref={text}>
                <path
                    d='M26.9939 0H44.6033V17.8125H60.8345V0H78.4439V53.9062H60.8345V35.9375H44.7564V53.9062H26.9939V0ZM101.719 17.9688H86.1767V0H134.947V17.9688H119.328V53.9062H101.719V17.9688ZM142.68 0H161.131L172.463 18.9844L183.794 0H202.245V53.9062H184.636V27.1875L172.31 46.5625L159.983 27.1875V53.9062H142.68V0ZM210.974 0H228.583V36.0938H253.542V53.9062H210.974'
                    fill='black'
                />
            </g>
            <g ref={icon}>
                <path
                    d='M26.3811 367.969L1.11548 78.5938H278.884L253.619 367.812L139.77 400'
                    fill='#E44D26'
                />
                <path d='M140 375.391V102.344H253.542L231.875 349.219' fill='#F16529' />
                <path
                    d='M52.7188 137.734H140V173.203H90.8469L94.0625 209.531H140V244.922H62.2125L52.7188 137.734ZM63.7437 262.734H98.6562L101.106 291.094L140 301.719V338.75L68.6438 318.438'
                    fill='#EBEBEB'
                />
                <path
                    d='M226.975 137.734H139.847V173.203H223.759L226.975 137.734ZM220.62 209.531H139.847V245H182.722L178.664 291.094L139.847 301.719V338.594L211.05 318.437'
                    fill='white'
                />
            </g>
        </svg>
    );
};

const JavaScript = ({ text, icon }) => {
    return (
        <svg viewBox='0 0 280 400' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <g ref={text}>
                <path
                    d='M112.76 35.7757H87.8328V53.9366H130.602V0H112.781L112.76 35.7757ZM192.156 0.28936H148.704V19.1701C154.506 25.0586 157.532 27.8907 166.078 36.4195H148.704V53.6364H192.153V36.4485L174.796 19.199H192.171L192.156 0.28936Z'
                    fill='#231F20'
                />
            </g>
            <g ref={icon}>
                <path
                    d='M280 78.3839H0L26.2493 367.263L139.986 400L253.722 367.263L280 78.3839Z'
                    fill='#E6A329'
                />
                <path
                    d='M139.986 101.92V375.52L232.138 349.026L254.556 101.92H139.986Z'
                    fill='#F1BF22'
                />
                <path
                    d='M213.298 137.359H71.6091L61.7402 245.507L61.9434 244.835H182.316L178.396 290.593L139.989 301.806L101.016 290.412L98.6817 262.717H63.3048L68.3515 318.057L139.989 338.696L211.659 318.057L221.528 209.431H93.7775L95.4171 173.24H184.052L185.378 193.976H221.054L213.298 137.359Z'
                    fill='white'
                />
                <path
                    d='M140.018 137.359H71.6091L61.7402 245.507L61.9434 244.835H140.014V209.554H98.7601L100.4 173.363H140.018V137.359ZM98.7601 262.735H63.3013L68.348 318.046L139.986 338.663V301.857L101.013 290.434L98.7601 262.735Z'
                    fill='#EBEBEB'
                />
            </g>
        </svg>
    );
};

const CSS = ({ text, icon }) => {
    return (
        <svg viewBox='0 0 280 400' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <g ref={text}>
                <path
                    d='M116.757 0H159.181V15.625H134.498V18.75H159.181V54.6875H116.757V38.2812H141.44V35.1562H116.757V0Z'
                    fill='black'
                />
                <path
                    d='M167.666 0H210.09V15.625H185.407V18.75H210.09V54.6875H167.666V38.2812H192.349V35.1562H167.666V0Z'
                    fill='black'
                />
                <path
                    d='M65.8479 0H108.272V17.9688H83.5889V35.9375H108.272V53.9062H65.8479V0Z'
                    fill='black'
                />
            </g>
            <g ref={icon}>
                <path
                    d='M279.795 78.6094L254.305 367.827L139.726 400L25.463 367.873L0 78.6094H279.795Z'
                    fill='#264DE4'
                />
                <path
                    d='M232.483 349.411L254.266 102.261H139.897V375.409L232.483 349.411Z'
                    fill='#2965F1'
                />
                <path
                    d='M58.3735 209.545L61.5129 245.021H139.897V209.545H58.3735Z'
                    fill='#EBEBEB'
                />
                <path
                    d='M139.897 137.738H139.776H52.0654L55.2496 173.216H139.897V137.738Z'
                    fill='#EBEBEB'
                />
                <path
                    d='M139.897 338.593V301.682L139.744 301.723L100.734 291.055L98.2399 262.76H79.2839H63.0779L67.9852 318.464L139.736 338.638L139.897 338.593Z'
                    fill='#EBEBEB'
                />
                <path
                    d='M182.909 245.021L178.843 291.032L139.776 301.712V338.621L211.584 318.464L212.111 312.47L220.342 219.071L221.197 209.544L227.521 137.738H139.776V173.216H189.134L185.946 209.544H139.776V245.021H182.909Z'
                    fill='white'
                />
            </g>
        </svg>
    );
};

const SVG_MainView = () => {
    const html_icon = useRef(null);
    const html_text = useRef(null);
    const javascript_icon = useRef(null);
    const javascript_text = useRef(null);
    const css_icon = useRef(null);
    const css_text = useRef(null);

    const icons = [
        {
            name: 'html',
            html: <HTML icon={html_icon} text={html_text} />,
        },
        {
            name: 'js',
            html: <JavaScript icon={javascript_icon} text={javascript_text} />,
        },
        {
            name: 'css',
            html: <CSS icon={css_icon} text={css_text} />,
        },
    ];

    useEffect(() => {
        const iconTl = gsap.timeline({ duration: 0.2, ease: 'back.out(1.2)' });
        const textTl = gsap.timeline({ duration: 0.05, ease: 'back.out(1.2)', delay: 0.05 });

        [html_icon, javascript_icon, css_icon].map(item => {
            iconTl.fromTo(
                item.current,
                { opacity: 0, scale: 0.8, transformOrigin: '50% 50%' },
                { opacity: 1, scale: 1 },
                '-=0.15'
            );
        });
        [html_text, javascript_text, css_text].map(item => {
            textTl.fromTo(item.current, { opacity: 0, y: 80 }, { opacity: 1, y: 0 }, '-=0.15');
        });
    }, []);

    return (
        <div className='w-260 flex justify-evenly laptop:justify-between'>
            {icons.map(icon => (
                <figure key={icon.name} className='w-60 laptop:w-72'>
                    {icon.html}
                </figure>
            ))}
        </div>
    );
};

export default SVG_MainView;
