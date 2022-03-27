import React from "react";
import { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function LogIn(props) {
  const userNameTarget = "test";
  const passwordTarget = "test";

  const [password, setPassword] = useState(null);
  const [username, setUsername] = useState(null);

  function handleSubmit() {
    console.log("Submitted...");
    console.log(username);
    console.log(password);
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
      <Button
        style={styles.button}
        title="Submit"
        onPress={handleSubmit}
      ></Button>
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
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 60,
    textAlign: "center",
    fontWeight: "bold",
    color: "#34ebd8",
    marginVertical: 8,
  },
  button: {},
});
