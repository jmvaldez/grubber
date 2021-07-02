import React, { useState, useEffect } from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import Swiper from "react-native-deck-swiper";
import firebase from "firebase/app";

import FoodData from "../../data.json";

export default function ImageSwiper() {
  const [favorites, setFavorites] = useState([]);
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

  async function getFavorites() {
    currentUser = firebase.auth().currentUser;

    var databaseRef = await firebase
      .database()
      .ref("/users/" + currentUser.uid)
      .child("favorites")
      .get();
    setFavorites(databaseRef);
  }

  useEffect(() => {
    getFavorites();
  }, []);

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
        onSwipedLeft={(cardIndex) => {
          console.log("Swiped Left", cardIndex);
          console.log("FOOD RESULT", FoodData[cardIndex]);
        }}
        onSwipedRight={(cardIndex) => {
          console.log("favorites", favorites);
          addToFavorites(FoodData[cardIndex]);
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
