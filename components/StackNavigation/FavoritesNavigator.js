import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import FavoritesScreen from "../Favorites/FavoritesScreen";

const FavoritesStack = createStackNavigator();

function FavoritesNavigator({ navigation }) {
  return (
    <FavoritesStack.Navigator>
      <FavoritesStack.Screen component={FavoritesScreen} name="Favorites" />
    </FavoritesStack.Navigator>
  );
}
export default FavoritesNavigator;