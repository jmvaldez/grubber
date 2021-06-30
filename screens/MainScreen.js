import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

import firebase from "firebase";
import FoodData from "../Data.json";

import ImageSwiper from "../components/ImageSwiper";

/**
 * Main app screen.
 */
class MainScreen extends Component {
  // Only renders button now for debugging logout.
  //TODO: Implement main screen UI and place logout button in top right or
  // place in profile screen
  render() {
    return (
      <View style={styles.container}>
        <Button title="logout" onPress={() => firebase.auth().signOut()} />
        <ImageSwiper data={FoodData} />
      </View>
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
