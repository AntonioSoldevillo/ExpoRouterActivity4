
import { View, StyleSheet, KeyboardAvoidingView, Image } from 'react-native';
import React, { useState } from 'react';
import { Avatar, Text, TextInput, Button } from 'react-native-paper';
import { Link } from 'expo-router';  // Use Link for navigation

export default function LoginPart() {
    const [togglePassword, setTogglePassword] = useState(false);

    return (
        <KeyboardAvoidingView style={styles.container}>
            <View style={styles.avatarContainer}>
                <Avatar.Image source={require('../assets/avatar.png')} size={180} />
                <Text style={styles.title}>AntonioFlix</Text>
            </View>

            <View style={styles.inputpart}>
                <TextInput
                    textContentType="emailAddress"
                    label="Email"
                    mode="outlined"
                    placeholder="Email"
                    style={styles.input}
                    left={<TextInput.Icon icon="email" size={20} />}
                />
                <TextInput
                    label="Password"
                    mode="outlined"
                    placeholder="Password"
                    style={styles.input}
                    left={<TextInput.Icon icon="key" size={20} />}
                    right={<TextInput.Icon onPress={() => setTogglePassword(!togglePassword)} icon={togglePassword ? "eye-off" : "eye"} size={20} />}
                    secureTextEntry={!togglePassword}
                />
            </View>

            <View style={styles.buttonpart}>
                <Button onPress={() => console.log("login")} style={styles.button} mode="contained">
                    Login
                </Button>
                <Link href="/forgot-password" style={styles.forgotLink}>I forgot my password</Link>  
                <View style={styles.registerContainer}>
                    <Text>Don't have an account?</Text>
                    <Link href="/register" style={styles.registerLink}>Register</Link>  
                </View>
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 5,
    },
    avatarContainer: {
        alignItems: 'center',
        marginBottom: 30,
    },
    title: {
        color: "purple",
        fontWeight: "bold",
        marginTop: 10,
        fontSize: 24,
    },
    inputpart: {
        width: "90%",
        marginBottom: 20,
    },
    input: {
        marginBottom: 10,
    },
    buttonpart: {
        width: "90%",
        alignItems: "center",
    },
    button: {
        marginBottom: 10,
        width: 200,
    },
    forgot: {
        marginTop: 20,
    },
    registerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
    },
    register: {
        marginLeft: -10,
    },
    forgotLink: {
        color: 'purple',  
        fontSize: 16,
        textDecorationLine: 'underline',
        marginTop:20
    },
    registerLink: {
        color: 'purple',  
        fontSize: 16,
        textDecorationLine: 'underline',
        marginLeft:5
    },
});
