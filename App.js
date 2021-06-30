import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import LoadingScreen from "./screens/LoadingScreen";
import LoginScreen from "./screens/LoginScreen";
import MainScreen from "./screens/MainScreen";

import firebase from "firebase/app";
import { firebaseConfig } from "./config";

firebase.initializeApp(firebaseConfig);

export default function App() {
  return <AppNavigator />;
}

const AppSwitchNavigator = createSwitchNavigator({
  LoadingScreen: LoadingScreen,
  LoginScreen: LoginScreen,
  MainScreen: MainScreen,
});

const AppNavigator = createAppContainer(AppSwitchNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
