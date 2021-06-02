import React, { useState, useEffect, useContext, createContext } from 'react';

const IsMobileUIContext = createContext();

export function useIsMobileUI() {
    return useContext(IsMobileUIContext);
}

let viewWidth;
document.addEventListener('DOMContentLoaded', function (event) {
    viewWidth = window.innerWidth;
});

export function RwdProvider({ children }) {
    const [isMobileUI, setIsMobileUI] = useState(null);
    const [basicFontSize, setBasicFontSize] = useState(16);

    const calUnitFontSize = () => {
        const uiWidth_pc = 1280;
        const uiWidth_mb = 1024;
        const basicSize = 16;

        viewWidth = window.innerWidth;
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

    return <IsMobileUIContext.Provider value={isMobileUI}>{children}</IsMobileUIContext.Provider>;
}
