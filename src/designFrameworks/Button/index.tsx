import styled from "@emotion/styled";
import * as React from "react";
import { BUTTON_COLOR, BUTTON_VARIENT } from "./constants";
import { __button } from "./styles";
import { IButton } from "../../Comman/GenericInterface";
import { BUTTON_SIZE } from '../../Comman/Contants';

const Button = styled.button<IButton>(__button);

const ButtonWrapper: React.FC<IButton> = props => {
    const {
        children,
        onClick,
        disabled,
        displayDisableStyle = false,
        varient = BUTTON_VARIENT.default,
        color = BUTTON_COLOR.default,
        customStyle = {},
        rounded = false,
        shadow = true,
        stopPropagation = false,
        preventDefault = true,
        size = BUTTON_SIZE.sm
    } = props,
        onButtonClick = (e: React.MouseEvent) => {
            preventDefault && e.preventDefault();
            stopPropagation && e.stopPropagation();
            onClick && !disabled && onClick(e);
        };

    return (
        <Button
            varient={varient}
            color={color}
            customStyle={customStyle}
            disabled={disabled}
            onClick={onButtonClick}
            rounded={rounded}
            shadow={shadow}
            displayDisableStyle={displayDisableStyle}
            size={size}
        >
            {children}
        </Button>
    );
};

export default ButtonWrapper;
export { BUTTON_COLOR, BUTTON_VARIENT } from "./constants";
