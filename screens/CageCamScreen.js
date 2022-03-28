import React from "react";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../config/colors";

export default function CageCamScreen() {
  return (
    <View style={styles.container}>
      <Text>CageCam</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: "center",
    justifyContent: "center",
  },
});
