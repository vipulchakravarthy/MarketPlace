import React, { useState } from "react";
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
  TextInput,
  Switch,
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
import AccountScreen from "./app/screens/AccountScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker"

const categories = [
  {
    label: "Furniture",
    value: "1",
  },
  {
    label: "Clothing",
    value: "2",
  },
  {
    label: "Cameras",
    value: "3",
  }
]

export default function App() {
  const [category, setCategory] = useState(categories[0]);

  return <Screen>
    <AppPicker
      selectedItem={category}
      onSeletedItem={item => setCategory(item)}
      icon="apps" items={categories} placeholder="Category" />
    <AppTextInput icon="email" placeholder="Email" />
  </Screen>;
}
