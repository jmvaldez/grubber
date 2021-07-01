import React from "react";
import { Button, Image, StatusBar, Text, View } from "react-native";
import imageStyler from "../../assets/css/image.js";
import formatStyler from "../../assets/css/format.js";

function ProfileScreen0({ navigation }) {
  return (
    <View style={formatStyler.center}>
      <Image
        style={imageStyler.smallImage}
        source={{
          uri: "https://i.kym-cdn.com/photos/images/newsfeed/000/167/256/6rur.jpg?1314468464",
        }}
      />
      <Text>Tester</Text>
    </View>
  );
}
export default ProfileScreen0;
