import React, { useState } from 'react';
import { StyleSheet, Image } from 'react-native';

import Screen from "../components/screen"
import AppTextInput from "../components/AppTextInput"
import AppButton from '../components/AppButton';

function LoginScreen(props) {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    return (
        <Screen style={styles.container}>
            <Image
                style={styles.logo}
                source={require("../assets/logo-red.png")}
            />
            <AppTextInput
                icon="email"
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="email-address"
                placeholder="Email"
                onChangeText={text => setEmail(text)}
                textContentType="emailAddress"
            />

            <AppTextInput
                icon="lock"
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry
                placeholder="Password"
                onChangeText={text => setPassword(text)}
                textContentType="password"
            />
            <AppButton title="login" onPress={() => console.log(email, password)} />
        </Screen>
    );
}

const styles = StyleSheet.create({
    logo: {
        width: 80,
        height: 80,
        alignSelf: "center",
        marginTop: 50,
        marginBottom: 20,
    },
    container: {
        padding: 10
    }
})

export default LoginScreen;