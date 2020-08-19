import React from "react";
import { FlatList, View } from "react-native";

const messages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 2,
    title: "T1",
    description: "D1",
    image: require("../assets/mosh.jpg"),
  },
];

function MessagesScreen(props) {
  return (
    <View></View>
    // <FlatList
    // data={messages}
    // keyExtractor={message => message.id.toString()}
    // renderItem={({item}) => <ListItem title={item.title}
    // subTitle={item.description} image={item.image}/>}
    // >

    // </FlatList>
  );
}

export default MessagesScreen;
