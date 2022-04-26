import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import colors from "../config/colors";
import WeatherIcon from "./WeatherIcon";
import MenuIcon from "./MenuIcon";
import CartIcon from "./CartIcon";
import CleanIcon from "./CleanIcon";

export default function NotificationCard({ title, time, image }) {
  return (
    <View style={styles.card}>
      {image}
      <Text>{title}</Text>
      <Text>{time}</Text>
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
    height: 80,
    padding: 10,
  },
});
