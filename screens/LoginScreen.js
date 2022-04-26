import React from "react";
import { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import KiwiButton from "../components/KiwiButton";
import colors from "../config/colors";

export default function LoginScreen(props) {
  const userNameTarget = "test";
  const passwordTarget = "test";

  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit() {
    if (username === userNameTarget && password === passwordTarget) {
      {
        props.viewChangeHandler();
      }
    } else {
      setMessage("Incorrect username or password...");
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
        secureTextEntry
      />
      <View style={styles.buttonsContainer}>
        <KiwiButton title="login" onPress={handleSubmit} />
        <KiwiButton title="register" color="secondary" />
      </View>
      <Text style={{ color: "red" }}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonsContainer: {
    padding: 10,
    width: "100%",
  },
  input: {
    margin: 10,
    borderWidth: 1,
    padding: 10,
    width: "75%",
  },
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: colors.white,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 80,
    textAlign: "center",
    fontWeight: "bold",
    color: colors.primary,
  },
});
