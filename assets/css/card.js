import { Platform } from "react-native"; //we can use this to determine the type of platform droid or ios example: Platform.OS === "android" ? 35 : 0
import colorStyle from "./colors";

/* currently in progress*/
const card = {
  dietCard: {
    backgroundColor: colorStyle.color3,
    padding: 20,
    borderRadius: 3,
  },
  dietTitle: {
    padding: 10,
    borderRadius: 7,
    marginBottom: 3,
    fontSize: 20,
  },
  dietText: {
    fontStyle: "italic",
    color: "white",
    textAlign: "center",
  },
};
export default card;
