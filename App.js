import { StatusBar } from "expo-status-bar";
import React from "react";
import HomeScreen from './src/screens/Home/HomeScreen'

export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <HomeScreen/>
    </>
  );
}

