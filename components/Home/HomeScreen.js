import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";
import * as Location from "expo-location";

import ImageSwiper from "./ImageSwiper";

function HomeScreen({ navigation }) {
  //const [location, setLocation] = useState(null);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }
      // !getLastKnownPositionAsync Faster but potentially less accurate
      let location = await Location.getLastKnownPositionAsync({
        accuracy: Location.Accuracy.Highest,
      });

      // !getCurrentPositionAsync Slower but most accurate
      // let location = await Location.getCurrentPositionAsync({
      //   accuracy: Location.Accuracy.Highest,
      // });
      const { latitude, longitude } = location.coords;
      setLatitude(latitude);
      setLongitude(longitude);
    })();
  }, []);

  if (latitude !== null && longitude !== null) {
    return (
      <View>
        <ImageSwiper userLocation={{ latitude, longitude }} />
      </View>
    );
  } else {
    return <Text>PRETEND THIS IS A PRETTY PROGRESS BAR!</Text>;
  }
}
export default HomeScreen;
