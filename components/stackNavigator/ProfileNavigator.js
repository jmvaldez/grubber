import React from "react";
import ProfileScreen0 from "../Profile/ProfileScreen0";
import ProfileScreen1 from "../Profile/ProfileScreen1";
import { createStackNavigator } from "@react-navigation/stack";

const ProfileStack = createStackNavigator();

function ProfileNavigator({ navigation }) {
  return (
    <ProfileStack.Navigator initialRouteName="home">
      <ProfileStack.Screen
        component={ProfileScreen0}
        name="Profile"
        options={{
          title: "Profile Screen 0",
        }}
      />
      <ProfileStack.Screen
        component={ProfileScreen1}
        name="Account"
        options={{
          title: "Profile Screen 1",
        }}
      />
      <ProfileStack.Screen
        component={ProfileScreen1}
        name="Billing"
        options={{
          title: "Profile Screen 2",
        }}
      />
    </ProfileStack.Navigator>
  );
}
export default ProfileNavigator;
