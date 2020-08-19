import React from "react";
import { SafeAreaView, StyleSheet, Platform, StatusBar } from "react-native";

function screen({ children }) {
  return <SafeAreaView style={styles.screen}>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

export default screen;
