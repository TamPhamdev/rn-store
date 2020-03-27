import React from "react";
import { StyleSheet, Text, View } from "react-native";
import CategoryListItem from "./components/CategoryListItem";
export default function App() {
  return (
    <View style={styles.container}>
      <CategoryListItem title={"product1"} />
      <CategoryListItem title={"product2"} />
      <CategoryListItem title={"product3"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
