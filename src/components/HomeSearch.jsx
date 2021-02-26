import React from "react";
import MAterialIcons from "react-native-vector-icons/MaterialIcons";
import Entypo from "react-native-vector-icons/Entypo";
import AntDesign from "react-native-vector-icons/AntDesign";
import { View, Text, StyleSheet } from "react-native";

const HomeSearch = () => {
  return (
    <>
      <View style={styles.inputBox}>
        <Text style={styles.inputText}>Where to?</Text>
        <View style={styles.timeContainer}>
          <AntDesign name={"clockcircle"} size={16} color={"#707070"} />
          <Text>Now</Text>
          <MAterialIcons name={"keyboard-arrow-down"} size={16} />
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.iconContainer}>
          <AntDesign name={"clockcircle"} size={16} color={"#ffff"} />
        </View>
        <Text style={styles.destinationText}>Spin Nightclub</Text>
      </View>
      <View style={styles.row}>
        <View style={[styles.iconContainer, { backgroundColor: "#218cff" }]}>
          <Entypo name={"home"} size={16} color={"#ffffff"} />
        </View>
        <Text style={styles.destinationText}>Home</Text>
      </View>
    </>
  );
};

export default HomeSearch;

const styles = StyleSheet.create({
  inputBox: {
    backgroundColor: "#e7e7e7",
    margin: 10,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  inputText: {
    fontSize: 20,
    fontWeight: "600",
    color: "#434343",
  },
  timeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 100,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 50,
  },
  row: {
    flexDirection: "row",
    padding: 20,
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#bdbdbd",
  },
  iconContainer: {
    backgroundColor: "#b3b3b3",
    padding: 10,
    borderRadius: 25,
  },
  destinationText: {
    marginLeft: 10,
    fontWeight: "500",
    fontSize: 16,
  },
});
