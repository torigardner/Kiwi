import React from "react";
import { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import KiwiButton from "../components/KiwiButton";
import colors from "../config/colors";

export default function Login(props) {
  const userNameTarget = "test";
  const passwordTarget = "test";

  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  function handleSubmit() {
    if (username === userNameTarget && password === passwordTarget) {
      {
        props.viewChangeHandler();
      }
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>kiwi</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={setPassword}
      />
      <KiwiButton title="login" onPress={handleSubmit} />
      <KiwiButton title="register" color="secondary" />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 60,
    textAlign: "center",
    fontWeight: "bold",
    color: colors.primary,
    marginVertical: 8,
  },
});
