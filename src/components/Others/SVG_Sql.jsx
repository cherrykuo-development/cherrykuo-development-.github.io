import React, { useEffect, useRef } from 'react';
import { gsap } from '../../constant/gsap';

const SVG_Sql = () => {
    const section = useRef(null);
    const bg = useRef(null);
    const itemEls = useRef(new Array());

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
        scrollTl.from(bg.current, {});
        itemEls.current.map(el => {
            scrollTl.from(
                el,
                {
                    x: 20,
                },
                '-=.2'
            );
        });
    }, []);

    return (
        <svg viewBox='0 0 280 281' fill='none' xmlns='http://www.w3.org/2000/svg' ref={section}>
            <path
                d='M227.5 96.8284V61.8284C227.514 59.5025 226.6 57.2669 224.962 55.6159L172.462 3.11589C170.811 1.478 168.576 0.565262 166.25 0.578387H26.25C11.7523 0.578387 0 12.3313 0 26.8284V254.328C0 268.826 11.7523 280.578 26.25 280.578H87.5V263.078H26.25C21.4173 263.078 17.5 259.161 17.5 254.328V26.8284C17.5 21.9957 21.4173 18.0784 26.25 18.0784H157.5V53.0784C157.5 62.7433 165.335 70.5784 175 70.5784H210V96.8284H227.5Z'
                fill='#282C34'
                ref={bg}
            />
            <path
                d='M78.75 158.078H96.25C101.083 158.078 105 161.996 105 166.828H122.5C122.5 152.331 110.748 140.578 96.25 140.578H78.75C64.2523 140.578 52.5 152.331 52.5 166.828C52.5 181.326 64.2523 193.078 78.75 193.078H96.25C101.083 193.078 105 196.996 105 201.828C105 206.661 101.083 210.578 96.25 210.578H78.75C73.9173 210.578 70 206.661 70 201.828H52.5C52.5 216.326 64.2523 228.078 78.75 228.078H96.25C110.748 228.078 122.5 216.326 122.5 201.828C122.5 187.331 110.748 175.578 96.25 175.578H78.75C73.9173 175.578 70 171.661 70 166.828C70 161.996 73.9178 158.078 78.75 158.078Z'
                fill='#282C34'
                ref={element => itemEls.current.push(element)}
            />
            <path
                d='M201.25 193.078V175.578C201.25 156.249 185.58 140.578 166.25 140.578C146.92 140.578 131.25 156.249 131.25 175.578V193.078C131.25 212.408 146.92 228.078 166.25 228.078H210V210.578H196.35C199.496 205.279 201.186 199.242 201.25 193.078ZM183.75 193.078C183.75 202.743 175.915 210.578 166.25 210.578C156.585 210.578 148.75 202.743 148.75 193.078V175.578C148.75 165.914 156.585 158.078 166.25 158.078C175.915 158.078 183.75 165.914 183.75 175.578V193.078Z'
                fill='#282C34'
                ref={element => itemEls.current.push(element)}
            />
            <path
                d='M236.25 210.578V140.578H218.75V219.328C218.75 224.161 222.667 228.078 227.5 228.078H280V210.578H236.25Z'
                fill='#282C34'
                ref={element => itemEls.current.push(element)}
            />
        </svg>
    );
};

export default SVG_Sql;
