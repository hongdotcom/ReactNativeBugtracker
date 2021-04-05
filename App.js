import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function App() {
  return (
    <ImageBackground
      source={require("./assets/mobilebg.jpg")}
      style={styles.bg}
    >
      {/* <StatusBar style="auto" /> */}
      <Image
        source={require("./assets/logo_transparent.png")}
        style={styles.logo}
      />
      <TextInput style={styles.input} />
      <TextInput style={styles.input} />
      <TextInput />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    // backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: "25%",
    height: "25%",
    position: "absolute",
    top: 120,
  },
  input: {
    height: 60,
    backgroundColor: "#fff",
    width: "80%",
    margin: "1%",
    borderWidth: 1,
    display: "flex",
  },
});
