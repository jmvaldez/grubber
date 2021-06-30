import React from "react";
import { Button, StatusBar, Text, View } from "react-native";

function ProfileScreen0({ navigation }) {
  return (
    <View>
      <Text>Profile Screen</Text>
      <Button
        title="My Account"
        onPress={() => navigation.navigate("Account")}
      />
      <Button
        title="My Billing"
        onPress={() => navigation.navigate("Billing")}
      />
      <StatusBar style="auto" />
    </View>
  );
}
export default ProfileScreen0;