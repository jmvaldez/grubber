import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

import firebase from "firebase";
import FoodData from "../Data.json";

import ImageSwiper from "../components/ImageSwiper";

import HomeNavigator from "../components/StackNavigation/HomeNavigator";
import ProfileNavigator from "../components/StackNavigation/ProfileNavigator"; //later for when i figure out the structure

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

/**
 * Main app screen.
 */
class MainScreen extends Component {
  // Only renders button now for debugging logout.
  //TODO: Implement main screen UI and place logout button in top right or
  // place in profile screen
  render() {
    const AppTab = createBottomTabNavigator();

    return (
      <>
        {/* <View style={styles.container}>
          <Button title="logout" onPress={() => firebase.auth().signOut()} />
        </View> */}
        <NavigationContainer>
          <AppTab.Navigator initialRouteName="Home">
            <AppTab.Screen component={HomeNavigator} name="Home" />
            <AppTab.Screen component={ProfileNavigator} name="Profile" />
          </AppTab.Navigator>
        </NavigationContainer>
      </>
    );
  }
}
export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
