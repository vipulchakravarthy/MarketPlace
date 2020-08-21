import React, { useState } from 'react';
import { StyleSheet, Image } from 'react-native';
import { Formik } from 'formik'

import Screen from "../components/screen"
import AppTextInput from "../components/AppTextInput"
import AppButton from '../components/AppButton';

function LoginScreen(props) {

    return (
        <Screen style={styles.container}>
            <Image
                style={styles.logo}
                source={require("../assets/logo-red.png")}
            />
            <Formik
                initialValues={{ email: '', password: '' }}
                onSubmit={values => console.log(values)}
            >
                {({ handleChange, handleSubmit }) => (
                    <>
                        <AppTextInput
                            icon="email"
                            autoCapitalize="none"
                            autoCorrect={false}
                            keyboardType="email-address"
                            placeholder="Email"
                            onChangeText={handleChange("email")}
                            textContentType="emailAddress"
                        />

                        <AppTextInput
                            icon="lock"
                            autoCapitalize="none"
                            autoCorrect={false}
                            secureTextEntry
                            placeholder="Password"
                            onChangeText={handleChange("password")}
                            textContentType="password"
                        />
                        <AppButton title="login" onPress={handleSubmit} />
                    </>
                )}
            </Formik>
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