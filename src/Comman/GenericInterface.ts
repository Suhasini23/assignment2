
import { BUTTON_VARIENT, BUTTON_COLOR, BUTTON_SIZE } from './Contants';

export interface IButton {
    onClick: (event: React.MouseEvent) => void;
    disabled?: boolean;
    displayDisableStyle?: boolean;
    varient?: BUTTON_VARIENT;
    color?: BUTTON_COLOR;
    customStyle?: React.CSSProperties;
    rounded?: boolean;
    action?: any;
    shadow?: boolean;
    stopPropagation?: boolean;
    preventDefault?: boolean;
    size?: BUTTON_SIZE;
}
