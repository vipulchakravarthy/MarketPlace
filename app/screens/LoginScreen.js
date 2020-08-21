import React, { useState } from 'react';
import { StyleSheet, Image } from 'react-native';
import * as Yup from 'yup'

import Screen from "../components/screen"
import { AppForm, AppFormField, SubmitButton } from '../components/forms'

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password")
})

function LoginScreen(props) {

    return (
        <Screen style={styles.container}>
            <Image
                style={styles.logo}
                source={require("../assets/logo-red.png")}
            />
            <AppForm
                initialValues={{ email: '', password: '' }}
                onSubmit={values => console.log(values)}
                validationSchema={validationSchema}
            >
                <AppFormField
                    icon="email"
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType="email-address"
                    placeholder="Email"
                    textContentType="emailAddress"
                    name="email"
                />
                <AppFormField
                    icon="lock"
                    autoCapitalize="none"
                    autoCorrect={false}
                    secureTextEntry
                    placeholder="Password"
                    textContentType="password"
                    name="password"
                />
                <SubmitButton title="login" />
            </AppForm>
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