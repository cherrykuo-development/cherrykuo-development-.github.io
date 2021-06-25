import React, { useState, useEffect, useContext, createContext } from 'react';

const IsMobileUIContext = createContext();
const IsHorizontalContext = createContext();

export function useIsMobileUI() {
    return useContext(IsMobileUIContext);
}
export function useIsHorizontal() {
    return useContext(IsHorizontalContext);
}

let viewWidth, viewHeight;
document.addEventListener('DOMContentLoaded', function (event) {
    viewWidth = window.innerWidth;
    viewHeight = window.innerHeight;
});

export function RwdProvider({ children }) {
    const [basicFontSize, setBasicFontSize] = useState(16);
    const [isMobileUI, setIsMobileUI] = useState(null);
    const [isHorizontal, setIsHorizontal] = useState(null);

    const calUnitFontSize = () => {
        const uiWidth_pc = 1280;
        const uiWidth_mb = 1024;
        const basicSize = 16;

        viewWidth = window.innerWidth;
        viewHeight = window.innerHeight;
        setIsHorizontal(viewWidth > viewHeight);
        if (viewWidth <= 1280 && viewWidth >= 1024) {
            setIsMobileUI(false);
            // setBasicFontSize(16);
            setBasicFontSize((viewWidth / uiWidth_pc) * basicSize);
        } else if (viewWidth < 1024) {
            setIsMobileUI(true);
            // setBasicFontSize(16);
            setBasicFontSize((viewWidth / uiWidth_mb) * basicSize);
        }
    };

    useEffect(() => {
        calUnitFontSize();
        window.addEventListener('resize', calUnitFontSize);
        return () => {
            window.removeEventListener('resize', calUnitFontSize);
        };
    }, []);

    useEffect(() => {
        document.querySelector('html').style.fontSize = basicFontSize + 'px';
    }, [basicFontSize]);

    return (
        <IsMobileUIContext.Provider value={isMobileUI}>
            <IsHorizontalContext.Provider value={isHorizontal}>
                {children}
            </IsHorizontalContext.Provider>
        </IsMobileUIContext.Provider>
    );
}
