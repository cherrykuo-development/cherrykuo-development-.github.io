import React, { useEffect, useRef } from 'react';
import { gsap } from '../../constant/gsap';

const GoogleAppsScript = () => {
    const section = useRef(null);
    const red = useRef(null);
    const yellow = useRef(null);
    const green = useRef(null);
    const blue = useRef(null);
    const point = useRef(null);

    useEffect(() => {
        const defaults = {
            opacity: 0,
            duration: 0.3,
            ease: 'circ.out',
        };
        const scrollTrigger = {
            trigger: section.current,
            start: 'top 60%',
            end: 'bottom top',
            toggleActions: 'restart none none reverse',
        };
        const scrollTl = gsap.timeline({ defaults, scrollTrigger });
        scrollTl
            .from(yellow.current, {
                rotate: '-37deg',
                transformOrigin: '68% 83%',
            })
            .from(
                green.current,
                {
                    rotate: '-73deg',
                    transformOrigin: '68% 83%',
                },
                '-=.25'
            )
            .from(
                blue.current,
                {
                    rotate: '-110deg',
                    transformOrigin: '68% 83%',
                },
                '-=.25'
            )
            .from(
                point.current,
                {
                    scale: 0,
                    transformOrigin: '50% 50%',
                },
                '-=.15'
            );
    }, []);

    return (
        <svg viewBox='0 0 520 411' fill='none' xmlns='http://www.w3.org/2000/svg' ref={section}>
            <g ref={red}>
                <path
                    d='M421.548 341.899C421.548 303.775 390.642 272.87 352.518 272.87H69.0295C30.9053 272.871 0 303.776 0 341.899C0 380.023 30.9053 410.928 69.0295 410.928H352.518C390.642 410.928 421.548 380.023 421.548 341.899Z'
                    fill='url(#paint000_linear)'
                />
                <path
                    d='M388.572 341.899C388.572 322.018 372.398 305.845 352.518 305.845H69.0295C49.1481 305.845 32.9751 322.019 32.9751 341.899C32.9751 361.779 49.1491 377.953 69.0295 377.953H352.518C372.399 377.954 388.572 361.78 388.572 341.899Z'
                    fill='url(#paint1_linear)'
                />
                <path
                    d='M22.8384 341.899C22.8384 314.998 43.5466 294.288 70.4479 294.288C84.8285 294.288 97.749 299.424 106.665 309.334L208.259 410.927H70.6957L37.8837 378.115C27.9741 369.201 22.8384 356.28 22.8384 341.899Z'
                    fill='url(#paint2_linear)'
                />
                <path
                    d='M70.449 390.609C97.3506 390.609 119.159 368.801 119.159 341.899C119.159 314.997 97.3506 293.189 70.449 293.189C43.5473 293.189 21.7393 314.997 21.7393 341.899C21.7393 368.801 43.5473 390.609 70.449 390.609Z'
                    fill='url(#paint3_linear)'
                />
                <path
                    d='M70.4492 369.923C85.9264 369.923 98.4731 357.376 98.4731 341.899C98.4731 326.422 85.9264 313.875 70.4492 313.875C54.972 313.875 42.4253 326.422 42.4253 341.899C42.4253 357.376 54.972 369.923 70.4492 369.923Z'
                    fill='url(#paint4_linear)'
                />
            </g>
            <g ref={yellow}>
                <path
                    d='M407.812 383.223C430.635 352.684 424.379 309.428 393.842 286.606L166.762 116.898C136.224 94.0752 92.967 100.33 70.1451 130.868C47.3222 161.406 53.5775 204.663 84.1148 227.485L311.195 397.193C341.733 420.015 384.99 413.761 407.812 383.223Z'
                    fill='url(#paint5_linear)'
                />
                <path
                    d='M381.399 363.483C393.3 347.558 390.027 324.921 374.102 313.019L147.022 143.311C131.097 131.409 108.46 134.683 96.5579 150.607C84.656 166.532 87.93 189.17 103.854 201.072L330.934 370.78C346.859 382.681 369.498 379.408 381.399 363.483Z'
                    fill='url(#paint6_linear)'
                />
                <path
                    d='M406.738 384.587L155.735 134.023C134.187 117.919 107.195 125.092 91.0913 146.641C75.5973 167.374 75.5718 193.648 95.0504 210.162L195.963 311.074L311.196 397.193C341.267 419.668 383.659 413.927 406.738 384.587Z'
                    fill='url(#paint7_linear)'
                />
                <path
                    d='M126.575 221.751C153.477 221.751 175.285 199.943 175.285 173.042C175.285 146.14 153.477 124.332 126.575 124.332C99.6738 124.332 77.8657 146.14 77.8657 173.042C77.8657 199.943 99.6738 221.751 126.575 221.751Z'
                    fill='url(#paint8_linear)'
                />
                <path
                    d='M126.576 201.066C142.053 201.066 154.6 188.519 154.6 173.042C154.6 157.565 142.053 145.018 126.576 145.018C111.098 145.018 98.5518 157.565 98.5518 173.042C98.5518 188.519 111.098 201.066 126.576 201.066Z'
                    fill='url(#paint9_linear)'
                />
            </g>
            <g ref={green}>
                <path
                    d='M372.071 408.101C408.634 397.302 429.519 358.908 418.721 322.346L338.419 50.4676C327.621 13.9054 289.226 -6.98021 252.664 3.81846C216.102 14.6171 195.216 53.0115 206.015 89.5736L286.316 361.452C297.115 398.015 335.509 418.901 372.071 408.101Z'
                    fill='url(#paint10_linear)'
                />
                <path
                    d='M362.732 376.478C381.798 370.847 392.729 350.753 387.096 331.687L306.795 59.8082C301.164 40.7415 281.07 29.8113 262.004 35.4436C242.937 41.076 232.007 61.1684 237.639 80.235L317.94 352.113C323.572 371.179 343.665 382.109 362.732 376.478Z'
                    fill='url(#paint11_linear)'
                />
                <path
                    d='M239.044 46.8092C223.55 67.5419 223.524 93.8161 243.003 110.33L403.505 270.831L346.122 76.5511L303.688 34.1925C282.14 18.0878 255.149 25.2608 239.044 46.8092Z'
                    fill='url(#paint12_linear)'
                />
                <path
                    d='M272.619 120.092C299.521 120.092 321.329 98.2844 321.329 71.3828C321.329 44.4811 299.521 22.673 272.619 22.673C245.717 22.673 223.909 44.4811 223.909 71.3828C223.909 98.2844 245.717 120.092 272.619 120.092Z'
                    fill='url(#paint13_linear)'
                />
                <path
                    d='M272.619 99.4067C288.096 99.4067 300.643 86.8599 300.643 71.3827C300.643 55.9056 288.096 43.3588 272.619 43.3588C257.141 43.3588 244.595 55.9056 244.595 71.3827C244.595 86.8599 257.141 99.4067 272.619 99.4067Z'
                    fill='url(#paint14_linear)'
                />
            </g>
            <g ref={blue}>
                <path
                    d='M328.549 406.634C364.3 419.871 404.014 401.619 417.252 365.868L515.686 100.016C528.923 64.2649 510.671 24.5511 474.92 11.3136C439.168 -1.924 399.454 16.328 386.217 52.0795L287.783 317.931C274.546 353.683 292.797 393.396 328.549 406.634Z'
                    fill='url(#paint15_linear)'
                />
                <path
                    d='M339.999 375.711C358.643 382.614 379.426 373.062 386.329 354.419L484.763 88.5672C491.666 69.9237 482.114 49.14 463.47 42.2372C444.827 35.3345 424.043 44.8862 417.14 63.5297L318.707 329.381C311.803 348.025 321.354 368.807 339.999 375.711Z'
                    fill='url(#paint16_linear)'
                />
                <path
                    d='M519.939 78.4129L480.329 38.8715C458.78 22.7668 431.788 29.9397 415.684 51.4892C400.19 72.2219 400.164 98.4961 419.643 115.01L485.683 181.05L515.686 100.016C518.324 92.8924 519.692 85.6114 519.939 78.4129Z'
                    fill='url(#paint17_linear)'
                />
                <path
                    d='M450.459 126.089C477.36 126.089 499.168 104.281 499.168 77.3791C499.168 50.4774 477.36 28.6693 450.459 28.6693C423.557 28.6693 401.749 50.4774 401.749 77.3791C401.749 104.281 423.557 126.089 450.459 126.089Z'
                    fill='url(#paint18_linear)'
                />
                <path
                    d='M450.458 105.403C465.936 105.403 478.482 92.8562 478.482 77.379C478.482 61.9018 465.936 49.3551 450.458 49.3551C434.981 49.3551 422.435 61.9018 422.435 77.379C422.435 92.8562 434.981 105.403 450.458 105.403Z'
                    fill='url(#paint19_linear)'
                />
            </g>
            <g ref={point}>
                <path
                    d='M388.911 304.42C384.57 300.087 379.413 296.587 373.639 294.516C354.702 287.726 334.006 295.719 320.721 313.497C305.227 334.229 305.201 360.504 324.68 377.017L358.348 410.686C384.165 408.48 407.662 391.775 417.254 365.868L426.215 341.666L388.911 304.42Z'
                    fill='url(#paint20_linear)'
                />
                <path
                    d='M353.936 386.778C380.838 386.778 402.646 364.97 402.646 338.068C402.646 311.167 380.838 289.359 353.936 289.359C327.035 289.359 305.227 311.167 305.227 338.068C305.227 364.97 327.035 386.778 353.936 386.778Z'
                    fill='url(#paint21_linear)'
                />
                <path
                    d='M353.936 366.092C369.413 366.092 381.96 353.545 381.96 338.068C381.96 322.591 369.413 310.044 353.936 310.044C338.459 310.044 325.912 322.591 325.912 338.068C325.912 353.545 338.459 366.092 353.936 366.092Z'
                    fill='url(#paint22_linear)'
                />
            </g>
            <defs>
                <linearGradient
                    id='paint000_linear'
                    x1='210.773'
                    y1='272.871'
                    x2='210.773'
                    y2='410.93'
                    gradientUnits='userSpaceOnUse'
                >
                    <stop stopColor='#FF637B' />
                    <stop offset='1' stopColor='#F90217' />
                </linearGradient>
                <linearGradient
                    id='paint1_linear'
                    x1='210.773'
                    y1='415.76'
                    x2='210.773'
                    y2='226.706'
                    gradientUnits='userSpaceOnUse'
                >
                    <stop stopColor='#FF637B' />
                    <stop offset='1' stopColor='#F90217' />
                </linearGradient>
                <linearGradient
                    id='paint2_linear'
                    x1='148.515'
                    y1='419.966'
                    x2='60.6985'
                    y2='332.15'
                    gradientUnits='userSpaceOnUse'
                >
                    <stop stopColor='#F90217' stopOpacity='0' />
                    <stop offset='0.2669' stopColor='#E7010F' stopOpacity='0.267' />
                    <stop offset='0.7232' stopColor='#CE0004' stopOpacity='0.723' />
                    <stop offset='1' stopColor='#C50000' />
                </linearGradient>
                <linearGradient
                    id='paint3_linear'
                    x1='49.4491'
                    y1='320.9'
                    x2='91.9362'
                    y2='363.387'
                    gradientUnits='userSpaceOnUse'
                >
                    <stop stopColor='#E3E5E4' />
                    <stop offset='1' stopColor='#CBD0E4' />
                </linearGradient>
                <linearGradient
                    id='paint4_linear'
                    x1='82.5305'
                    y1='353.981'
                    x2='58.0875'
                    y2='329.537'
                    gradientUnits='userSpaceOnUse'
                >
                    <stop stopColor='#E3E5E4' />
                    <stop offset='1' stopColor='#CBD0E4' />
                </linearGradient>
                <linearGradient
                    id='paint5_linear'
                    x1='280.116'
                    y1='201.919'
                    x2='197.419'
                    y2='312.504'
                    gradientUnits='userSpaceOnUse'
                >
                    <stop stopColor='#FFD833' />
                    <stop offset='1' stopColor='#F2B631' />
                </linearGradient>
                <linearGradient
                    id='paint6_linear'
                    x1='194.525'
                    y1='316.374'
                    x2='307.768'
                    y2='164.941'
                    gradientUnits='userSpaceOnUse'
                >
                    <stop stopColor='#FFD833' />
                    <stop offset='1' stopColor='#F2B631' />
                </linearGradient>
                <linearGradient
                    id='paint7_linear'
                    x1='213.151'
                    y1='259.744'
                    x2='57.8306'
                    y2='104.425'
                    gradientUnits='userSpaceOnUse'
                >
                    <stop stopColor='#F9A126' stopOpacity='0' />
                    <stop offset='1' stopColor='#EC4437' />
                </linearGradient>
                <linearGradient
                    id='paint8_linear'
                    x1='122.125'
                    y1='143.757'
                    x2='130.708'
                    y2='203.239'
                    gradientUnits='userSpaceOnUse'
                >
                    <stop stopColor='#E3E5E4' />
                    <stop offset='1' stopColor='#CBD0E4' />
                </linearGradient>
                <linearGradient
                    id='paint9_linear'
                    x1='129.314'
                    y1='190.362'
                    x2='124.377'
                    y2='156.141'
                    gradientUnits='userSpaceOnUse'
                >
                    <stop stopColor='#E3E5E4' />
                    <stop offset='1' stopColor='#CBD0E4' />
                </linearGradient>
                <linearGradient
                    id='paint10_linear'
                    x1='378.468'
                    y1='186.258'
                    x2='246.071'
                    y2='225.328'
                    gradientUnits='userSpaceOnUse'
                >
                    <stop stopColor='#28A265' />
                    <stop offset='1' stopColor='#28895E' />
                </linearGradient>
                <linearGradient
                    id='paint11_linear'
                    x1='241.437'
                    y1='226.695'
                    x2='422.74'
                    y2='173.193'
                    gradientUnits='userSpaceOnUse'
                >
                    <stop stopColor='#28A265' />
                    <stop offset='1' stopColor='#28895E' />
                </linearGradient>
                <linearGradient
                    id='paint12_linear'
                    x1='350.149'
                    y1='149.14'
                    x2='244.615'
                    y2='43.6066'
                    gradientUnits='userSpaceOnUse'
                >
                    <stop stopColor='#108372' stopOpacity='0' />
                    <stop offset='1' stopColor='#006837' />
                </linearGradient>
                <linearGradient
                    id='paint13_linear'
                    x1='286.753'
                    y1='45.1388'
                    x2='258.031'
                    y2='97.9078'
                    gradientUnits='userSpaceOnUse'
                >
                    <stop stopColor='#E3E5E4' />
                    <stop offset='1' stopColor='#CBD0E4' />
                </linearGradient>
                <linearGradient
                    id='paint14_linear'
                    x1='264.136'
                    y1='86.5726'
                    x2='280.659'
                    y2='56.2133'
                    gradientUnits='userSpaceOnUse'
                >
                    <stop stopColor='#E3E5E4' />
                    <stop offset='1' stopColor='#CBD0E4' />
                </linearGradient>
                <linearGradient
                    id='paint15_linear'
                    x1='466.458'
                    y1='233.155'
                    x2='336.959'
                    y2='185.248'
                    gradientUnits='userSpaceOnUse'
                >
                    <stop stopColor='#7FAEF4' />
                    <stop offset='1' stopColor='#4C8DF1' />
                </linearGradient>
                <linearGradient
                    id='paint16_linear'
                    x1='332.427'
                    y1='183.572'
                    x2='509.761'
                    y2='249.174'
                    gradientUnits='userSpaceOnUse'
                >
                    <stop stopColor='#7FAEF4' />
                    <stop offset='1' stopColor='#4C8DF1' />
                </linearGradient>
                <linearGradient
                    id='paint17_linear'
                    x1='499.759'
                    y1='125.916'
                    x2='420.292'
                    y2='50.234'
                    gradientUnits='userSpaceOnUse'
                >
                    <stop stopColor='#4256AC' stopOpacity='0' />
                    <stop offset='1' stopColor='#1B1464' />
                </linearGradient>
                <linearGradient
                    id='paint18_linear'
                    x1='477.386'
                    y1='65.1664'
                    x2='422.79'
                    y2='90.2762'
                    gradientUnits='userSpaceOnUse'
                >
                    <stop stopColor='#E3E5E4' />
                    <stop offset='1' stopColor='#CBD0E4' />
                </linearGradient>
                <linearGradient
                    id='paint19_linear'
                    x1='435.354'
                    y1='84.5556'
                    x2='466.765'
                    y2='70.1101'
                    gradientUnits='userSpaceOnUse'
                >
                    <stop stopColor='#E3E5E4' />
                    <stop offset='1' stopColor='#CBD0E4' />
                </linearGradient>
                <linearGradient
                    id='paint20_linear'
                    x1='408.196'
                    y1='392.205'
                    x2='331.384'
                    y2='315.393'
                    gradientUnits='userSpaceOnUse'
                >
                    <stop stopColor='#4256AC' stopOpacity='0' />
                    <stop offset='1' stopColor='#1B1464' />
                </linearGradient>
                <linearGradient
                    id='paint21_linear'
                    x1='380.925'
                    y1='325.916'
                    x2='326.329'
                    y2='351.026'
                    gradientUnits='userSpaceOnUse'
                >
                    <stop stopColor='#E3E5E4' />
                    <stop offset='1' stopColor='#CBD0E4' />
                </linearGradient>
                <linearGradient
                    id='paint22_linear'
                    x1='338.893'
                    y1='345.305'
                    x2='370.304'
                    y2='330.86'
                    gradientUnits='userSpaceOnUse'
                >
                    <stop stopColor='#E3E5E4' />
                    <stop offset='1' stopColor='#CBD0E4' />
                </linearGradient>
            </defs>
        </svg>
    );
};

export default GoogleAppsScript;
