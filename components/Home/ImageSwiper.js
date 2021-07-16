import React, { useState, useEffect } from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import Swiper from "react-native-deck-swiper";
import firebase from "firebase/app";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { PLACES_API_KEY } from "@env";

export default function ImageSwiper(userLocation) {
  const [foodData, setFoodData] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const coordinates = Object.entries(userLocation);
  let latitude;
  let longitude;

  for (let coord in coordinates) {
    latitude = coordinates[coord][1].latitude;
    longitude = coordinates[coord][1].longitude;
  }

  const restaurantsUrl = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=1500&type=restaurant&key=${PLACES_API_KEY}`;

  useEffect(() => {
    const fetchRestaurantData = async () => {
      const response = await fetch(restaurantsUrl);
      const restaurantData = await response.json();
      const newData = [];

      for (let restaurants in restaurantData) {
        for (let restaurant in restaurantData[restaurants]) {
          const name = restaurantData[restaurants][restaurant].name;
          const images = restaurantData[restaurants][restaurant].photos;

          if (name !== undefined) {
            for (const image of images) {
              const imageUrl = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${image.photo_reference}&key=${PLACES_API_KEY}`;

              let restaurant = {
                restaurantName: name,
                imageRequestUrl: imageUrl,
              };
              newData.push(restaurant);
              setFoodData(newData);
            }
          }
        }
      }
    };
    fetchRestaurantData();
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

  // !Currently adds to firebase table
  // TODO: Update Firebase table to accept data from Google Places API or move to favorites table to dynamoDB
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

  /*
   * TODO: When removing a food item from favorites list the item should be: removed
   * 1: Removed from the list
   * 2: Be pushed back to the original Food Data Array
   */

  return (
    <View style={styles.container}>
      <Swiper
        cards={foodData}
        renderCard={(card) => {
          if (card !== undefined) {
            return (
              <View key={card.id} style={styles.card}>
                <Image
                  source={{
                    uri: card.imageRequestUrl,
                  }}
                  style={styles.image}
                />
                <Text style={styles.text}>{card.restaurantName}</Text>
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
          //save();
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
