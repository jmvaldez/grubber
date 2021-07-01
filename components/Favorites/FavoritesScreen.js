import React from "react";
import { Text, View, StyleSheet } from "react-native";


function FavoritesScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text tyle={styles.text}>Favorites Screen </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ebebeb'
  },
  text: {
    color: '#101010',
    fontSize: 24,
    fontWeight: 'bold'
  }
})
export default FavoritesScreen;