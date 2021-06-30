import React from "react";
import HomeScreen from "../Home/HomeScreen";
import { createStackNavigator } from "@react-navigation/stack";

const HomeStack = createStackNavigator();

function HomeNavigator({ navigation }) {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen component={HomeScreen} name="Home" />
    </HomeStack.Navigator>
  );
}
export default HomeNavigator;