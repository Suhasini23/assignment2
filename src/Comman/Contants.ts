import colors from './commanUtils/color';

export const ApplicationContants = {
    LIGHT: "LIGHT",
    DARK: "DARK"
}
export const data = {
    data1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae volutpat erat. Maecenas a eleifend massa, at varius turpis. Duis metus turpis, porttitor id mi nec, pharetra iaculis tortor. Donec nunc nisl, dignissim efficitur ornare eu, mollis et quam. Quisque nunc metus, pretium nec efficitur ut, venenatis vitae odio. Donec gravida turpis id rutrum aliquam. Mauris vitae scelerisque orci, eget sagittis sem. Proin et mauris luctus risus pretium suscipit nec vitae sapien. Donec finibus eu mauris at dapibus. Duis vulputate, eros quis sagittis euismod, ante massa ullamcorper ante, et dapibus felis velit id nibh. Cras at mi eu urna scelerisque porta. Fusce dolor ante, feugiat ac mi et, dapibus finibus turpis."
}

export enum BUTTON_VARIENT {
    text = "text",
    contained = "contained",
    outlined = "outlined",
    default = "default"
}

export enum BUTTON_SIZE {
    sm = "small",
    md = "medium",
    lg = "large"
}

export enum BUTTON_COLOR {
    primary = "primary",
    default = "default",
    dark = "dark"
}
// @ts-ignore
const VARIENT_COLOR_MAP = (mapKey: any, { disabled, shadow }) => {
    switch (mapKey) {
        case `${BUTTON_VARIENT.text}${BUTTON_COLOR.primary}`:
            return {
                color: disabled ? colors.fadedGrey : colors.primaryColor,
                backgroundColor: colors.white,
                boxShadow: `0 3px 16px 0 ${colors.lineSeparatorColor}`
            };
        /* Styles applied to the element if `varient="text"` and `color="default"`. */
        case `${BUTTON_VARIENT.text}${BUTTON_COLOR.default}`:
            return {
                color: colors.grey
            };
        /* Styles applied to the element if `varient="text"` and `color="dark"`. */
        case `${BUTTON_VARIENT.text}${BUTTON_COLOR.dark}`:
            return {
                color: colors.black
            };
        /* Styles applied to the element if `varient="contained"` and `color="primary"`. */
        case `${BUTTON_VARIENT.contained}${BUTTON_COLOR.primary}`:
            return {
                color: colors.white,
                backgroundImage: `linear-gradient(99deg, ${colors.extremeBlack}, ${colors.primaryColor})`,
                opacity: disabled ? 0.75 : 1
            };
        /* Styles applied to the element if `varient="contained"` and `color="default"`. */
        case `${BUTTON_VARIENT.contained}${BUTTON_COLOR.default}`:
            return {
                backgroundColor: colors.white,
                boxShadow: `0 3px 16px 0 ${colors.fadedBlack}`
            };
        /* Styles applied to the element if `varient="contained"` and `color="dark"`. */
        case `${BUTTON_VARIENT.contained}${BUTTON_COLOR.dark}`:
            return {
                color: colors.white,
                backgroundImage: "none",
                backgroundColor: colors.black,
                boxShadow: "0 3px 16px 0 rgba(0, 0, 0, 0.2)"
            };
        /* Styles applied to the element if `varient="outlined"` and `color="primary"`. */
        case `${BUTTON_VARIENT.outlined}${BUTTON_COLOR.primary}`:
            return {
                color: colors.extremeBlack,
                border: `1px solid ${colors.primaryColor}`
            };
        /* Styles applied to the element if `varient="outlined"` and `color="default"`. */
        case `${BUTTON_VARIENT.outlined}${BUTTON_COLOR.default}`:
            return {
                color: colors.blackThree,
                border: `1px solid ${colors.lightGrey40}`,
                ...(shadow
                    ? { boxShadow: `0 3px 16px 0 ${colors.lightGrey40}` }
                    : {})
            };
        /* Styles applied to the element if `varient="outlined"` and `color="dark"`. */
        case `${BUTTON_VARIENT.outlined}${BUTTON_COLOR.dark}`:
            return {
                color: colors.black,
                border: `1px solid ${colors.black}`
            };
        default:
            return {};
    }
};

export const getVarientColorStyle = ({
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
    shadow
}) => {
    const mapKey = `${varient}${color}`;

    if (!mapKey || !mapKey.length) {
        return {};
    }

    return VARIENT_COLOR_MAP(mapKey, {
        disabled: disabled || displayDisableStyle,
        shadow
    });
};
