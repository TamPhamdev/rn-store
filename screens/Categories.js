import React, { useState } from "react";
import { StyleSheet, FlatList } from "react-native";
import CategoryListItem from "../components/CategoryListItem";
export default function Categories({ navigation }) {
  const [category, setCategory] = useState([
    { id: 1, name: "Clothes" },
    { id: 2, name: "Food" },
    { id: 3, name: "Other11" }
  ]);
  return (
    <FlatList
      data={category}
      renderItem={({ item }) => (
        <CategoryListItem
          category={item}
          onPress={() => navigation.navigate("Category", { name: item.name })}
        />
      )}
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
    backgroundColor: "#fff"
  }
});
