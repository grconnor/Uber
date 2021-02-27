import React from "react";
import HomeMap from "../../components/HomeScreen/HomeMap";
import CovidMessage from "../../components/HomeScreen/CovidMessage";
import HomeSearch from "../../components/HomeScreen/HomeSearch";

import { View, Text, StyleSheet } from "react-native";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <HomeMap />
      <CovidMessage />
      <HomeSearch />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {},
});
