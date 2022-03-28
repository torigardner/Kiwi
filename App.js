import React from "react";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Login from "./screens/LoginScreen";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function viewChangeHandler() {
    setIsLoggedIn(true);
  }

  if (isLoggedIn) {
    return (
      <View style={styles.container}>
        <Text>LOGGEDIN</Text>
      </View>
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
