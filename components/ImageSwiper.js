import { findDOMNode } from "react-dom";
import { ViewBase, Image, StyleSheet } from "react-native";

export default function ImageSwiper({ data }) {
  return (
    <View>
      <Image source={{ uri: data.image }} style={styles.image} />
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
