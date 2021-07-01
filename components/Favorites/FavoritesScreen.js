import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";

export default class FavoritesScreen extends React.Component {
  state = {
    data: [
      {
        id: 1,
        foodName: "Pizza",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus accumsan quam eget massa efficitur ornare. Suspendisse at lobortis dui. Praesent auctor a felis eget condimentum. Suspendisse eu massa faucibus, auctor dui sit amet, tempus est. Donec faucibus mollis orci aliquam mollis. Etiam lobortis elementum tellus, nec luctus tortor auctor et. Etiam fermentum dictum volutpat. Sed non velit aliquam, fringilla velit sed, fringilla velit. Duis vulputate urna a ultrices facilisis. Morbi augue purus, bibendum sit amet ullamcorper ut, porta ut est. Aenean eu eleifend massa. .",
        image:
          "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=414&q=80",
      },
      {
        id: 2,
        foodName: "Pizza 2",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus accumsan quam eget massa efficitur ornare. Suspendisse at lobortis dui. Praesent auctor a felis eget condimentum. Suspendisse eu massa faucibus, auctor dui sit amet, tempus est. Donec faucibus mollis orci aliquam mollis. Etiam lobortis elementum tellus, nec luctus tortor auctor et. Etiam fermentum dictum volutpat. Sed non velit aliquam, fringilla velit sed, fringilla velit. Duis vulputate urna a ultrices facilisis. Morbi augue purus, bibendum sit amet ullamcorper ut, porta ut est. Aenean eu eleifend massa. .",
        image:
          "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=414&q=80",
      },
      {
        id: 3,
        foodName: "Pizza 3",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus accumsan quam eget massa efficitur ornare. Suspendisse at lobortis dui. Praesent auctor a felis eget condimentum. Suspendisse eu massa faucibus, auctor dui sit amet, tempus est. Donec faucibus mollis orci aliquam mollis. Etiam lobortis elementum tellus, nec luctus tortor auctor et. Etiam fermentum dictum volutpat. Sed non velit aliquam, fringilla velit sed, fringilla velit. Duis vulputate urna a ultrices facilisis. Morbi augue purus, bibendum sit amet ullamcorper ut, porta ut est. Aenean eu eleifend massa. .",
        image:
          "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=414&q=80",
      },
    ],
  };
  /*
   * TODO: 
   * Implement pulling data for favorites from firebase or passing from previous screen and storing in localStorage
   * Implement remove function
   * Look into swipe to delete
   */

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
          keyExtractor={(item) => item}
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
