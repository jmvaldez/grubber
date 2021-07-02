import { Platform } from "react-native"; //we can use this to determine the type of platform droid or ios example: Platform.OS === "android" ? 35 : 0
import colorStyle from "./colors";

/* currently in progress*/
const card = {
  dietCard: {
    backgroundColor: colorStyle.color3,
    padding: 20,
    borderRadius: 7,
  },
  dietTitle:{
    padding: 10,
    backgroundColor: colorStyle.color3,
    borderRadius: 7,
    marginBottom: 3
  }
};
export default card;
