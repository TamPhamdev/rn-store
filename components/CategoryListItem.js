import React, { Component } from "react";
import { Image, View, Text, StyleSheet } from "react-native";
import SkiiImage from "../assets/skii.png";
export default function CategoryListItem(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      <Image source={SkiiImage} style={styles.categoryImage} />
    </View>
  );
}

const styles = StyleSheet.create({
  categoryImage: {
    width: 64,
    height: 64
  },
  title: {
    textTransform: "uppercase",
    marginBottom: 8,
    fontWeight: "700"
  },
  container: {
    marginBottom: 10,
    marginTop: 10,
    alignItems: "center",
    padding: 16,
    width: "80%",
    shadowColor: "red",
    backgroundColor: "#fff",
    borderRadius: 4,
    elevation: 3,
    shadowOpacity: 0.1,
    shadowRadius: 20,
    shadowOffset: { width: 0, height: 0 }
  }
});
