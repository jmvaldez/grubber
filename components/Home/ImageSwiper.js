import React, { useState, useEffect } from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import Swiper from "react-native-deck-swiper";
import firebase from "firebase/app";

import FoodData from "../../data.json";

export default function ImageSwiper() {
  const [foodData] = useState(FoodData);

  var currentUser;

  async function addToFavorites(item) {
    // get user
    currentUser = firebase.auth().currentUser;
    // get unique key
    var databaseRef = await firebase
      .database()
      .ref("/users/" + currentUser.uid)
      .child("favorites")
      .push();
    databaseRef.set({
      foodName: item.foodName,
      description: item.description,
      image: item.image,
    });
  }

  return (
    <View style={styles.container}>
      <Swiper
        cards={foodData}
        renderCard={(card) => {
          return (
            <View key={card.id} style={styles.card}>
              <Image source={{ uri: card.image }} style={styles.image} />
              <Text style={styles.text}>{card.foodName}</Text>
            </View>
          );
        }}
        infinite={true}
        onSwipedRight={(cardIndex) => {
          addToFavorites(foodData[cardIndex]);

          let removeFoodItem = () => {
            foodData.splice(cardIndex, 1);
          };
          removeFoodItem();
          //setTimeout(removeFoodItem, 500);
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
    backgroundColor: "black",
    maxHeight: "90%",
  },
  text: {
    position: "absolute",
    textAlign: "center",
    fontSize: 50,
    backgroundColor: "transparent",
    bottom: 20,
    color: "white",
  },
  image: {
    resizeMode: "contain",
    overlayColor: "E8E8E8",
    height: "90%",
    width: "100%",
    borderRadius: 10,
  },
});
