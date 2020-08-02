import styled from "@emotion/styled";
import * as React from "react";
import { BUTTON_COLOR, BUTTON_VARIENT } from "./constants";

import { __button } from "./__style";

import { IButton } from "./interface";

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
      preventDefault = true
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
    >
      {children}
    </Button>
  );
};

export default ButtonWrapper;
export { BUTTON_COLOR, BUTTON_VARIENT } from "./constants";
