import React from "react";
import HomeScreen from "../Home/HomeScreen";
import { View, Text, Button, Image } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import firebase from "firebase";

const HomeStack = createStackNavigator();
function HomeNavigator({ navigation }) {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        component={HomeScreen}
        name="Home"
        options={{
          headerRight: () => (
            <Button
              onPress={() => firebase.auth().signOut()}
              title="Sign out"
              color="#f87157"
            />
          ),
        }}
      />
    </HomeStack.Navigator>
  );
}
export default HomeNavigator;
