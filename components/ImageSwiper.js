import React, { useState } from "react";
import { View, Image, StyleSheet } from "react-native";

export default function ImageSwiper({ data }) {
  const [foodData, setFoodData] = useState([]);
  console.log(data);
  return (
    <View>
      {data.map((value, key) => {
        return <Image source={{ uri: value.image }} style={styles.image} />;
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    height: "100%",
    resizeMode: "cover",
    borderRadius: 20,
  },
});
