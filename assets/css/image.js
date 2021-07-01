import { Platform } from "react-native"; //we can use this to determine the type of platform droid or ios example: Platform.OS === "android" ? 35 : 0
import colorStyle from "./colors";
import EStyleSheet from "react-native-extended-stylesheet";

const tester = EStyleSheet.build({ $rem: 16 });

/* currently in progress*/
const imageStyle = {
  smallImage:{
    width: 66,
    height: 58,
    padding: tester,
  }
};
export default imageStyle;
