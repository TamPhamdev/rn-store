import React, { useState } from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
export default function Category({ route }) {
  const name = route.params.name;
  return (
    <View>
      <Text>{name}</Text>
    </View>
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
