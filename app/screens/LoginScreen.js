import React, { useState } from 'react';
import { StyleSheet, Image } from 'react-native';
import { Formik } from 'formik'
import * as Yup from 'yup'

import Screen from "../components/screen"
import AppTextInput from "../components/AppTextInput"
import AppButton from '../components/AppButton';
import AppText from "../components/AppText"
import ErrorMessage from '../components/ErrorMessage';


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
            <Formik
                initialValues={{ email: '', password: '' }}
                onSubmit={values => console.log(values)}
                validationSchema={validationSchema}
            >
                {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
                    <>
                        <AppTextInput
                            icon="email"
                            autoCapitalize="none"
                            autoCorrect={false}
                            keyboardType="email-address"
                            placeholder="Email"
                            onChangeText={handleChange("email")}
                            textContentType="emailAddress"
                            onBlur={() => setFieldTouched("email")}
                        />
                        <ErrorMessage error={errors.email} visible={touched.email} />
                        <AppTextInput
                            icon="lock"
                            autoCapitalize="none"
                            autoCorrect={false}
                            secureTextEntry
                            placeholder="Password"
                            onChangeText={handleChange("password")}
                            textContentType="password"
                            onBlur={() => setFieldTouched("password")}
                        />
                        <ErrorMessage error={errors.password} visible={touched.password} />
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