import React, { useState } from "react";
import { StyleSheet, Text, ScrollView, View, FlatList } from "react-native";
import CategoryListItem from "./components/CategoryListItem";
export default function App() {
  const [category, setCategory] = useState([
    { id: 1, name: "Clothes" },
    { id: 2, name: "Food" },
    { id: 3, name: "Other" }
  ]);
  return (
    <FlatList
      data={category}
      renderItem={({ item }) => <CategoryListItem category={item} />}
      keyExtractor={item => item.id.toString()}
      contentContainerStyle={styles.container}
    />
  );
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
