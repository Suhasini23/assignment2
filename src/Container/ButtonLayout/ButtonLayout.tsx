import React, { useState } from "react";
import styled from "@emotion/styled";
import { ApplicationContants, BUTTON_SIZE, BUTTON_COLOR } from "../../Comman/Contants";
import { Button } from '../../designFrameworks/comman';
import * as commanStyles from "../../Comman/__commanStyles"
import { BUTTON_VARIENT } from '../../designFrameworks/Button';
import * as style from './__style';
// @ts-ignore 
const ButtonWrapperDiv = styled.div(style.__buttonWrapper);
// @ts-ignore 
const WrapperDiv = styled.div(style.__wrapper);
const ContainerWrapper = styled.div(commanStyles.__container);
interface IComponentProps {
}
const ButtonLayout: React.FC<IComponentProps> = props => {
    const handleOnClick = () => {
        window.alert("you click on me!!!")
    }
    return (
        <ContainerWrapper>
            <h2> Button varients</h2>
            <WrapperDiv>
                <ButtonWrapperDiv>
                    <Button
                        size={BUTTON_SIZE.lg}
                        color={BUTTON_COLOR.primary}
                        rounded={true}
                        varient={BUTTON_VARIENT.contained}
                    >
                        <div> type 1  </div>
                    </Button>
                    <p>This button is with large size, and primaryColor and other props</p>
                </ButtonWrapperDiv>
                <ButtonWrapperDiv>
                    <Button
                        size={BUTTON_SIZE.md}
                        color={BUTTON_COLOR.default}
                        varient={BUTTON_VARIENT.text}
                    >
                        <div> type 2 </div>
                    </Button>
                    <p>This button is with medium size, and default color and other props</p>
                </ButtonWrapperDiv>
                <ButtonWrapperDiv>
                    <Button
                        size={BUTTON_SIZE.sm}
                        color={BUTTON_COLOR.primary}
                        rounded={true}
                        varient={BUTTON_VARIENT.text}
                    >
                        <div> type 3 </div>
                    </Button>
                    <p>This button is with small size, and primary color and other props</p>
                </ButtonWrapperDiv>

                <ButtonWrapperDiv>
                    <Button>
                        <div> type 4  </div>
                    </Button>
                    <p>This button is with no props just defautlt values</p>
                </ButtonWrapperDiv>
                <ButtonWrapperDiv>
                    <Button onClick={handleOnClick} customStyle={style.__customStyles}>
                        <div> type 5  </div>
                    </Button>
                    <p>This button is with only customStyles and onclick function</p>
                </ButtonWrapperDiv>
            </WrapperDiv>
        </ContainerWrapper>

    )
};
export default ButtonLayout;