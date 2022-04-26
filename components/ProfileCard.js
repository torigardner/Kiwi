import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import colors from "../config/colors";

export default function ProfileCard({ userName, name, image }) {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={image}></Image>
      <Text>{name}</Text>
      <Text>{userName}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 15,
    overflow: "hidden",
    width: "100%",
    height: 100,
    padding: 10,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 45,
  },
});
