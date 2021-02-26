import React from "react";
import { View, Text, StyleSheet } from "react-native";

const CovidMessage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Travel only if neccesary</Text>
      <Text style={styles.text}>
        Help flatten the curve. If you must travel, please exercise caution for
        your safety and the safety of our community
      </Text>
      <Text style={styles.learnMore}>Learn more</Text>
    </View>
  );
};

export default CovidMessage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2b80ff",
    padding: 10,
    borderRadius: 20,
  },
  title: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  text: {
    color: "white",
  },
  learnMore: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "bold",
  },
});
