import React, { useState, useEffect, useContext, createContext } from 'react';
import { useTranslation } from 'react-i18next';
import '../i18n';

const LangContext = createContext();
const LangUpdateContext = createContext();
const LangTransContext = createContext();
const LangListContext = createContext();

export function useLang() {
    return useContext(LangContext);
}
export function useLangUpdate() {
    return useContext(LangUpdateContext);
}
export function useLangTrans() {
    return useContext(LangTransContext);
}
export function useLangList() {
    return useContext(LangListContext);
}

const getQuery = () => {
    if (typeof window !== 'undefined') {
        return new URLSearchParams(window.location.search);
    }
    return new URLSearchParams();
};

const getQueryStringVal = key => {
    return getQuery().get(key);
};

export function LangProvider({ children }) {
    const nowLang = getQueryStringVal('locale') ? getQueryStringVal('locale') : 'en';

    const [lang, setLang] = useState(nowLang);
    const { t, i18n } = useTranslation();

    useEffect(() => {
        i18n.changeLanguage(lang);
    }, [lang]);

    return (
        <LangContext.Provider value={lang}>
            <LangUpdateContext.Provider value={setLang}>
                <LangTransContext.Provider value={t}>
                    <LangListContext.Provider value={i18n.store.data}>
                        {children}
                    </LangListContext.Provider>
                </LangTransContext.Provider>
            </LangUpdateContext.Provider>
        </LangContext.Provider>
    );
}
