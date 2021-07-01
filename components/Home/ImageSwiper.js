import React, { useState, useEffect } from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import Swiper from "react-native-deck-swiper";

import FoodData from "../../data.json";

export default function ImageSwiper() {
  return (
    <View style={styles.container}>
      <Swiper
        cards={FoodData}
        renderCard={(card) => {
          return (
            <View style={styles.card}>
              <Image source={{ uri: card.image }} style={styles.image} />
              <Text style={styles.text}>{card.foodName}</Text>
            </View>
          );
        }}
        infinite={true}
        onSwiped={(cardIndex) => {
          console.log(cardIndex);
        }}
        onSwipedAll={() => {
          console.log("onSwipedAll");
        }}
        cardIndex={0}
        backgroundColor={"#4FD0E9"}
        stackSize={3}
      ></Swiper>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF",
  },
  card: {
    flex: 1,
    borderRadius: 20,
    borderWidth: 10,
    bottom: 50,
    borderColor: "#E8E8E8",
    justifyContent: "center",
    backgroundColor: "white",
    maxHeight: "90%",
  },
  text: {
    position: "absolute",
    textAlign: "center",
    fontSize: 50,
    backgroundColor: "transparent",
    bottom: 20,
  },
  image: {
    height: "100%",
    width: "100%",
    borderRadius: 10,
  },
});
