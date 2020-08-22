import React from "react";
import { SafeAreaView, StyleSheet, Platform, StatusBar, View } from "react-native";

function screen({ children, style }) {
  return <SafeAreaView style={[styles.screen, style]}>
    <View style={[styles.view, style]}>
      {children}
    </View>
  </SafeAreaView>;
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
  },
  view: {
    flex: 1
  }
});

export default screen;
