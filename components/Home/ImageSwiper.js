import React, { useState, useEffect } from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import Swiper from "react-native-deck-swiper";
import firebase from "firebase/app";
import AsyncStorage from "@react-native-async-storage/async-storage";

import FoodData from "../../data.json";

export default function ImageSwiper() {
  const [foodData, setFoodData] = useState(FoodData);
  const [favorites, setFavorites] = useState([]);

  const save = async () => {
    try {
      await AsyncStorage.setItem("MyFood", JSON.stringify(foodData));
    } catch (error) {
      alert("Err on SAVE", error);
    }
  };

  const load = async () => {
    try {
      let data = await AsyncStorage.getItem("MyFood");

      if (data !== null) {
        setFoodData(JSON.parse(data));
        console.log(foodData);
      }
    } catch (error) {
      alert("Err on LOAD", error);
      //clearAll();
    }
  };

  useEffect(() => {
    load();
  }, []);

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

  var currentUser;

  // async function addToFavorites(item) {
  //   // get user
  //   currentUser = firebase.auth().currentUser;
  //   // get unique key
  //   var databaseRef = await firebase
  //     .database()
  //     .ref("/users/" + currentUser.uid)
  //     .child("favorites")
  //     .push();
  //   item.forEach((a) => {
  //     databaseRef.set({
  //       foodName: a.foodName,
  //       description: a.description,
  //       id: a.id,
  //       image: a.image,
  //     });
  //   });
  // }

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

  // Clears Async Storage when called
  // The only method we have as of right now to get back the cards
  // after they have been swiped right and added to favorites
  // Use in Load function when you have no more cards.
  // Will Require you to login again
  /*
   * TODO: When removing a food item from favorites list the item should be: removed
   * 1: Removed from the list
   * 2: Be pushed back to the original Food Data Array
   */
  const clearAll = async () => {
    try {
      await AsyncStorage.clear();
    } catch (e) {
      // clear error
    }
    console.log("Done.");
  };

  return (
    <View style={styles.container}>
      <Swiper
        cards={foodData}
        renderCard={(card) => {
          if (card !== undefined) {
            return (
              <View key={card.id} style={styles.card}>
                <Image source={{ uri: card.image }} style={styles.image} />
                <Text style={styles.text}>{card.foodName}</Text>
              </View>
            );
          }
        }}
        infinite={true}
        onSwipedRight={(cardIndex) => {
          addToFavorites(foodData[cardIndex]);

          let removeFoodItem = () => {
            foodData.splice(cardIndex, 1);
          };
          removeFoodItem();
          save();
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
