import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Image, TouchableWithoutFeedback, Alert } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from 'expo-image-picker';

import colors from "../config/colors"

function ImageInput({ imageUri, onChangeImage }) {

    const requestPermission = async () => {
        const { granted } = await ImagePicker.requestCameraRollPermissionsAsync()
        if (!granted) {
            alert("You need to enable the permission to access the library")
        }
    }

    useEffect(() => {
        requestPermission();
    }, [])


    const handlePress = () => {
        if (!imageUri) {
            selectImage()
        }
        else {
            Alert.alert('Delete', "Are you sure want to delete", [
                { text: "Yes", onPress: () => onChangeImage(null) },
                { text: "No" }
            ])
        }
    }
    const selectImage = async () => {
        try {
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                quality: 0.5
            })
            if (!result.cancelled) {
                onChangeImage(result.uri)
            }
        } catch (error) {
            console.log("error reading an image", error)
        }
    }
    return (
        <TouchableWithoutFeedback onPress={handlePress}>
            <View style={styles.container}>
                {!imageUri && (<MaterialCommunityIcons color={colors.medium} name="camera" size={30} />)}
                {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.light,
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center",
        width: 100,
        height: 100,
        overflow: "hidden"
    },
    image: {
        width: "100%",
        height: "100%"
    }
});

export default ImageInput;