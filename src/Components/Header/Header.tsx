import React from "react";
import styled from "@emotion/styled";
import active from "../../assets/active.svg";
import disabledImg from "../../assets/disabledImg.svg";
import * as commanStyles from "../../Comman/__commanStyles"
import * as style from "./__style"
import { data } from '../../Comman/Contants';

const ContainerWrapper = styled.div(commanStyles.__container);
// @ts-ignore 
const ButtonStyle = styled.button(style.__buttonStyle);
const ParaDiv = styled.p(style.__para);
const HeaderDiv = styled.div(style.__header);


interface IComponentProps {
    themeToggler: () => void;
    isDark: boolean
}
const Header: React.FC<IComponentProps> = props => {
    const { themeToggler, isDark } = props;
    const imgUrl = isDark ? active : disabledImg;
    return (
        // @ts-ignore
        <ContainerWrapper>
            <HeaderDiv>
                <p>React Button component with a toggle button for light and dark theme.</p>
                <ButtonStyle onClick={themeToggler}>
                    <img src={imgUrl} />
                </ButtonStyle>
            </HeaderDiv>

            <ParaDiv>
                {data.data1}
            </ParaDiv>
        </ContainerWrapper>

    )
};
export default Header;