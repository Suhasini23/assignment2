import { BUTTON_VARIENT, getVarientColorStyle, BUTTON_SIZE } from '../../Comman/Contants';
import colors from '../../Comman/commanUtils/color';

export const __button = (props = {}) => ({
    // @ts-ignore
    ...commonButtonStyle(props),
    // @ts-ignore
    ...getVarientColorStyle(props),
    // @ts-ignore
    ...(props.shadow ? {} : { boxShadow: "none" }),
    // @ts-ignore
    ...props.customStyle
});

const commonButtonStyle = ({
    // @ts-ignore
    varient,
    // @ts-ignore      
    size,
    // @ts-ignore     
    color,
    // @ts-ignore              
    disabled,
    // @ts-ignore               
    displayDisableStyle,
    // @ts-ignore           
    shadow,
    // @ts-ignore   
    rounded
}) => {
    const isDisabled = disabled || displayDisableStyle;

    let buttonBaseStyle = {},
        varientStyle = {},
        roundedStyle = {},
        sizeStyle = {}

    switch (varient) {
        case BUTTON_VARIENT.text:
            varientStyle = {
                backgroundColor: colors.white
            };
            break;
        case BUTTON_VARIENT.contained:
            varientStyle = {
                color: colors.white,
                backgroundImage: `linear-gradient(99deg, ${colors.primaryColor}, ${colors.white})`,
                boxShadow: "0 3px 16px 0 rgba(247, 123, 155, 0.71)"
            };
            break;
        case BUTTON_VARIENT.outlined:
            varientStyle = {
                border: `1px solid ${colors.fadedGrey}`,
                backgroundColor: colors.white
            };
            break;
        default:
            varientStyle = {
                backgroundColor: colors.white,
                borderColor: "#ccc"
            };
            break;
    }


    switch (size) {
        case BUTTON_SIZE.sm:
            sizeStyle = {
                padding: "10px",
                width: "fit-content"
            };
            break;
        case BUTTON_SIZE.md:
            sizeStyle = {
                padding: "10px 7px",
                width: "fit-content"
            };
            break;
        case BUTTON_SIZE.lg:
            sizeStyle = {
                width: "fit-content",
                padding: "15px 30px"
            };
            break;
        default:
            sizeStyle = {
                padding: "2px"
            };
            break;
    }

    roundedStyle = {
        padding: "6px 24px",
        borderRadius: "30px"
    };

    buttonBaseStyle = {
        display: "inline-block",
        marginBottom: "0",
        fontWeight: "bold",
        textAlign: "center",
        whiteSpace: "nowrap",
        verticalAlign: "middle",
        touchAction: "manipulation",
        cursor: isDisabled ? "default" : "pointer",
        backgroundImage: "none",
        border: "1px solid transparent",
        padding: "6px 12px",
        fontSize: "16px",
        outline: "none",
        lineHeight: "1.42857143",
        userSelect: "none",
        ...(rounded ? roundedStyle : {}),
        ...varientStyle,
        ...sizeStyle
    };

    return buttonBaseStyle;
};
