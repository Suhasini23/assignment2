import { gutterWidthSm, gutterWidthMd } from "./common";

export const __container = () => ({
  marginRight: "auto",
  marginLeft: "auto",
  paddingLeft: gutterWidthSm,
  paddingRight: gutterWidthSm,
  "@media (min-width:768px)": {
    width: "720px",
    paddingLeft: gutterWidthMd,
    paddingRight: gutterWidthMd
  },
  "@media (min-width:992px)": {
    width: "944px"
  },
  "@media (min-width:1300px)": {
    width: "1252px"
  },
  ...__afterBefore
});

const __afterBefore = () => ({
  "&:after": {
    display: "table",
    content: "' '",
    clear: "both"
  },
  "&:before": {
    display: "table",
    content: "' '"
  }
});