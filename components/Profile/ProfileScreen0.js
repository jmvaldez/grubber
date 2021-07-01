import React from "react";
import { Button, Image, StatusBar, Text, View } from "react-native";
import imageStyler from "../../assets/css/image.js";
import formatStyler from "../../assets/css/format.js";
import { useEffect } from "react";

function ProfileScreen0({ navigation }) {
  //This hook for testing onl
  useEffect(() => {
    currentUser = firebase.auth().currentUser;
    console.log(currentUser);

    // fetch("https://jsonplaceholder.typicode.com/photos")
    //   .then((response) => response.json())
    //   .then((json) => {
    //     console.log(json);
    //   });
  }, []);

  /* Mock Data for my sentitive tummy*/

  return (
    <View style={formatStyler.center}>
      <Image
        style={imageStyler.smallImage}
        source={{
          uri: "https://i.kym-cdn.com/photos/images/newsfeed/000/167/256/6rur.jpg?1314468464",
        }}
      />
      <Text>Placeholder Joe</Text>
      <Text>placedholder@amazon.com</Text>
      <Text>Dietary Restrictions</Text>
      {/* <FlatList /> */}
    </View>
  );
}
export default ProfileScreen0;
