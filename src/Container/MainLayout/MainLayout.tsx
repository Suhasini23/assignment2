import React, { useState } from "react";
import styled from "@emotion/styled";
import Header from "../../Components/Header/Header";
import *  as style from "./__style";
import { ApplicationContants } from "../../Comman/Contants";
import ButtonLayout from '../ButtonLayout/ButtonLayout';
const ThemeWrapper = styled.div(style.__themeSetter);

interface IComponentProps {
}
const MainLayout: React.FC<IComponentProps> = props => {
    const [appTheme, setAppTheme] = useState(ApplicationContants.LIGHT);
    const [isDark, setIsDark] = useState(false);
    const handleToggle = () => {
        const theme = appTheme === ApplicationContants.LIGHT ? ApplicationContants.DARK : ApplicationContants.LIGHT
        setAppTheme(theme);
        setIsDark(!isDark)
    }
    return (
        // @ts-ignore
        <>
            <ThemeWrapper isDark={isDark}>
                <Header themeToggler={handleToggle} isDark={isDark} />
                <ButtonLayout />
            </ThemeWrapper>
        </>

    )
};
export default MainLayout;