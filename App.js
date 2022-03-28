import React from "react";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Login from "./screens/LoginScreen";
import Navigator from "./navigation/KiwiNavigator";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function viewChangeHandler() {
    setIsLoggedIn(true);
  }

  if (isLoggedIn) {
    return (
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>
    );
  } else {
    return (
      <View style={styles.container}>
        <Login viewChangeHandler={viewChangeHandler}></Login>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
