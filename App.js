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

export default function App() {
  const [isNew, setIsNew] = useState(false);
  return <Screen>
    <AppPicker icon="apps" placeholder="Category" />
    <AppTextInput icon="email" placeholder="Email" />
  </Screen>;
}
