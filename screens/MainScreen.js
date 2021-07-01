import React, { Component } from "react";
import { StyleSheet } from "react-native";
import HomeNavigator from "../components/StackNavigation/HomeNavigator";
import ProfileNavigator from "../components/StackNavigation/ProfileNavigator"; //later for when i figure out the structure
import FavoritesNavigator from "../components/StackNavigation/FavoritesNavigator";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
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
          <AppTab.Navigator
            initialRouteName="Home"
            tabBarOptions={{
              activeTintColor: "#F87157",
            }}
          >
            <AppTab.Screen
              component={HomeNavigator}
              name="Home"
              options={{
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="ios-home" color={color} size={size} />
                ),
              }}
            />
            <AppTab.Screen
              component={FavoritesNavigator}
              name="Favorites"
              options={{
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="fast-food" size={size} color={color} />
                ),
              }}
            />
            <AppTab.Screen
              component={ProfileNavigator}
              name="Profile"
              options={{
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="ios-person" size={size} color={color} />
                ),
              }}
            />
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
