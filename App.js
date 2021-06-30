import React from "react";
import { Button, StatusBar, StyleSheet, Text, View } from "react-native";

import HomeNavigator from "./components/stackNavigator/HomeNavigator";
import ProfileNavigator from "./components/stackNavigator/ProfileNavigator"; //later for when i figure out the structure

/* Vendor */
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

/* Custom CSS */

const AppTab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <AppTab.Navigator initialRouteName="Home">
        <AppTab.Screen component={HomeNavigator} name="Home" />
        <AppTab.Screen component={ProfileNavigator} name="Profile" />
      </AppTab.Navigator>
    </NavigationContainer>
  );
}
