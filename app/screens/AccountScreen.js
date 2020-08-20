import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import Icon from "../components/Icon"
import Screen from "../components/screen"
import ListItem from "../components/ListItem"
import colors from "../config/colors"
import ListItemSeparator from '../components/ListItemSeparator';

const menuItems = [
    {
        title: "My Listings",
        icon: {
            name: "format-list-bulleted",
            backgroundColor: colors.primary
        }
    },
    {
        title: "My messages",
        icon: {
            name: "email",
            backgroundColor: colors.secondary
        }
    }
]

function AccountScreen(props) {
    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
                <ListItem
                    title="Vipul Chakravarthy"
                    subTitle="Made with love"
                    image={require("../assets/mosh.jpg")}>
                </ListItem>
            </View>
            <View style={styles.container}>
                <FlatList
                    data={menuItems}
                    ItemSeparatorComponent={ListItemSeparator}
                    keyExtractor={menuItem => menuItem.title}
                    renderItem={
                        ({ item }) =>
                            <ListItem
                                title={item.title}
                                IconComponent={
                                    <Icon
                                        name={item.icon.name}
                                        backgroundColor={item.icon.backgroundColor}
                                    />
                                }
                            />
                    }
                />
            </View>
            <ListItem
                title="Log out"
                IconComponent={
                    <Icon
                        name="logout"
                        backgroundColor="#ffe66d"
                    />
                }
            />
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 20
    },
    screen: {
        backgroundColor: colors.light
    }
})
export default AccountScreen;