import { Platform } from "react-native"; //we can use this to determine the type of platform droid or ios example: Platform.OS === "android" ? 35 : 0
import colorStyle from "./colors";

const formStyle = {
  form: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between"
  },
  input: {
    backgroundColor: colorStyle.white,            //adjust according to our needs
    borderColor: "rgba(170, 170, 170, 0.2)",
    borderWidth: 0.5,
    borderRadius: 2,
    color: "#fff",
    fontSize: 16,
    paddingVertical: 6,
    paddingHorizontal: 10
  },
  label: {
    color: "#fff",
    fontSize: 12,
    marginBottom: 4
  },
  authLabel: {
    color: "#fff",
    fontSize: 16,
    marginBottom: 8,
    paddingLeft: 10
  },
  authInput: {
    backgroundColor: "#fff",
    borderRadius: 25,
    fontSize: 18,
    paddingVertical: 10,
    paddingHorizontal: 20
  },
  group: {
    alignItems: "stretch",
    display: "flex",
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    marginVertical: 4,
    paddingHorizontal: 10
  },
  multiSelect: {
    alignItems: "flex-start",
    backgroundColor: colorStyle.white,            //adjust according to our needs
    // borderColor: "rgba(170, 170, 170, 0.2)",
    borderWidth: 0.5,
    borderRadius: 2,
    minHeight: 40,
    paddingVertical: 5,
    paddingHorizontal: 5
  },
  multiSelectDetails: {
    flex: 1
  },
  multiSelectOption: {
    alignItems: "center",
    backgroundColor: colorStyle.white,            //adjust according to our needs
    // borderColor: "rgba(40, 40, 40, 0.2)",
    borderWidth: 0.5,
    borderRadius: 2,
    flexDirection: "row",
    height: 30,
    justifyContent: "space-between",
    minWidth: 100,
    paddingVertical: 4,
    paddingHorizontal: 6
  },
  multiSelectRemove: {
    minWidth: 25,
    padding: 5
  },
  multiSelectText: {
    color: "#fff",
    flex: 1,
    fontSize: 16
  },
  select: {
    inputIOS: {
      backgroundColor: colorStyle.white,            //adjust according to our needs
      // borderColor: "rgba(170, 170, 170, 0.2)",
      borderWidth: 0.5,
      borderRadius: 2,
      color: "#fff",
      paddingVertical: 4,
      paddingHorizontal: 5
    },
    inputAndroid: {
      backgroundColor: colorStyle.white,            //adjust according to our needs
      // borderColor: "rgba(170, 170, 170, 0.2)",
      borderRadius: 2,
      borderWidth: 0.5,
      color: "#fff",
      paddingVertical: 4,
      paddingHorizontal: 5
    }
  }
};

export default formStyle;
