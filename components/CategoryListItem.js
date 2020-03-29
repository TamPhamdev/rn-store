import React, { Component } from "react";
import {
  Image,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert
} from "react-native";
import SkiiImage from "../assets/skii.png";
export default function CategoryListItem({ category, onPress }) {
  return (
    <TouchableOpacity activeOpacity={0.4} onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.title}>{category.name}</Text>
        <Image source={SkiiImage} style={styles.categoryImage} />
      </View>
    </TouchableOpacity>
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
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 4,
    elevation: 4,
    shadowOpacity: 0.1,
    shadowRadius: 20,
    shadowOffset: { width: 0, height: 0 }
  }
});
