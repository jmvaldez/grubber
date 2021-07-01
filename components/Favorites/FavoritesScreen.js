import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import firebase from "firebase/app";
export default class FavoritesScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  /*
   * TODO:
   * Implement pulling data for favorites from firebase or passing from previous screen and storing in localStorage
   * Implement remove function
   * Look into swipe to delete
   */

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    var currentUser = firebase.auth().currentUser;
    if (
      firebase
        .database()
        .ref("/users/" + currentUser.uid)
        .once("value")
        .then((snapshot) => {
          snapshot.child("favorites").exists();
        })
    ) {
      firebase
        .database()
        .ref("/users/" + currentUser.uid)
        .child("favorites")
        .once("value", (snapshot) => {
          let responseList = Object.values(snapshot.val());
          this.setState({ data: responseList });
        });
    } else {
      console.log("no data");
    }
  };
  render() {
    function Item({ item }) {
      return (
        <View style={styles.listItem}>
          <Image
            source={{ uri: item.image }}
            style={{ width: 60, height: 60, borderRadius: 30 }}
          />
          <View
            style={{ alignItems: "center", justifyContent: "center", flex: 1 }}
          >
            <Text style={{ fontWeight: "bold" }}>{item.foodName}</Text>
          </View>
          <TouchableOpacity
            style={{
              width: 80,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "red" }}>Remove</Text>
          </TouchableOpacity>
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.data}
          renderItem={({ item }) => <Item item={item} />}
          keyExtractor={(item) => String(item.id)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 60,
  },
  listItem: {
    margin: 10,
    padding: 10,
    backgroundColor: "#FFF",
    width: "80%",
    flex: 1,
    alignSelf: "center",
    flexDirection: "row",
    borderRadius: 12,
  },
});
