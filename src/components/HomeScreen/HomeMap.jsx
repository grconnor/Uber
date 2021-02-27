import React from "react";
import { View, Text, StyleSheet } from "react-native";

const HomeMap = () => {
  return (
    <View style={styles.container}>
      <Text>I am a home map</Text>
    </View>
  );
};

export default HomeMap;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#a0abff",
    justifyContent: "center",
    height: 300,
    alignItems: "center",
  },
});
