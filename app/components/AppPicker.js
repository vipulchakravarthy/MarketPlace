import React, { useState } from 'react';
import { View, TextInput, Platform, StyleSheet, TouchableWithoutFeedback, Modal, Button, FlatList } from 'react-native';

import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors"
import defaultStyles from "../config/styles"
import Screen from "../components/screen"
import AppText from "./AppText"
import PickerItem from './PickerItem';

function AppPicker({ icon, placeholder, onSelectedItem, numberOfColumns, selectedItem, items, width = "100%", PickerItemComponent = PickerItem }) {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <React.Fragment>
            <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
                <View style={[styles.container, { width }]}>
                    {icon && <MaterialCommunityIcons name={icon} size={22} color={colors.medium} style={styles.icon} />}
                    {selectedItem ? <AppText style={styles.text}>{selectedItem.label}</AppText> :
                        <AppText style={styles.placeholder}>{placeholder}</AppText>}
                    <MaterialCommunityIcons name="chevron-down" size={22} color={colors.medium} />
                </View>
            </TouchableWithoutFeedback>
            <Modal visible={modalVisible} animationType="slide">
                <Button title="Close" onPress={() => setModalVisible(false)} />
                <FlatList
                    data={items}
                    numColumns={numberOfColumns}
                    keyExtractor={item => item.value.toString()}
                    renderItem={({ item }) => <PickerItemComponent
                        item={item}
                        label={item.label}
                        onPress={() => {
                            setModalVisible(false);
                            onSelectedItem(item);
                        }} />}
                />
            </Modal>
        </React.Fragment>
    );

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.light,
        borderRadius: 25,
        flexDirection: "row",
        padding: 15,
        marginVertical: 10,
    },
    icon: {
        marginRight: 10,
    },
    text: {
        flex: 1,
    },
    placeholder: {
        color: colors.medium,
        flex: 1
    }
})


export default AppPicker;