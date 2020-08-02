import fonts from "../../Comman/commanUtils/fonts";
import colors from "../../Comman/commanUtils/color";


export const __buttonStyle = (props: any) => ({
    border: "unset",
    background: "unset",
    outline: "unset",
    img: {
        width: "70px"
    }
});


export const __header = (props: any) => ({
    display: "flex",
    justifyContent: "space-between",
    fontSize: "33px",
    p: {
        fontFamily: fonts.boldFont
    }
});

export const __para = (props: any) => ({
    lineHeight: "28px"
});


