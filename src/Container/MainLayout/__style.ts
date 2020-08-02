import fonts from "../../Comman/commanUtils/fonts";
import colors from "../../Comman/commanUtils/color";


export const __themeSetter = (props: any) => ({
    height: "100vh",
    ...(props.isDark
        ? {
            backgroundColor: colors.blackThree,
            color: colors.white,
            transition: "all 0.50s linear",
        }
        : {
            backgroundColor: colors.white,
            color: colors.black,
            transition: "all 0.50s linear"
        })
});

