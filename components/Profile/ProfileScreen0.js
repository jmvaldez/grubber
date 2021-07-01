import React from "react";
import { Button, Image, StatusBar, Text, View } from "react-native";
import appStyler from "../../assets/css/app.js";
import containerStyler from "../../assets/css/format.js"

function ProfileScreen0({ navigation }) {
  return (
      <View style={containerStyler.center}>
        <Image
          style={appStyler}
          source={{uri: "https://i.kym-cdn.com/photos/images/newsfeed/000/167/256/6rur.jpg?1314468464"}}
        />
        <Text>Tester</Text>
      </View>
  );
}
export default ProfileScreen0;
