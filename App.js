import React from "react";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import LogIn from "./components/LogInScreen";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function viewChangeHandler() {
    setIsLoggedIn(true);
    console.log("view changed");
  }

  if (isLoggedIn) {
    return (
      <View style={styles.container}>
        <Text>Log In Successful</Text>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <LogIn viewChangeHandler={viewChangeHandler}></LogIn>
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
