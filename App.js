import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableNativeFeedback,
  Image,
  Button,
  SafeAreaView,
  Platform,
  Dimensions,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import AppText from "./app/components/AppText";
import AppButton from "./app/components/AppButton";
import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import Screen from "./app/components/screen";
import Icon from "./app/components/Icon"
import ListItem from "./app/components/ListItem";

export default function App() {
  return <Screen>
    <ListItem title="title" subTitle="sub title"
      ImageComponent={<Icon name="email" size={50} />} />
  </Screen>;
}
