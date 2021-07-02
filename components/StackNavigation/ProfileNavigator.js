import React from "react";
import ProfileScreen from "../Profile/ProfileScreen";

import { createStackNavigator } from "@react-navigation/stack";

const ProfileStack = createStackNavigator();

function ProfileNavigator({ navigation }) {
  return (
    <ProfileStack.Navigator initialRouteName="home">
      <ProfileStack.Screen
        component={ProfileScreen}
        name="Profile"
        options={{
          title: "Profile Details",
        }}
      />
    </ProfileStack.Navigator>
  );
}
export default ProfileNavigator;
