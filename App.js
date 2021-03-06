import React, { useState } from "react";
import { StyleSheet } from "react-native";
import AppNavigator from "./AppNavigator";

export default function App() {
  return <AppNavigator />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingRight: 15,
    paddingLeft: 15,
    backgroundColor: "#fff",
    justifyContent: "center"
  }
});
