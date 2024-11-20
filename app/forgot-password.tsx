
import React, { useState } from 'react';
import { View, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { Avatar, Text, TextInput, Button } from 'react-native-paper';
import { Link } from 'expo-router';

export default function ForgotPassword() {
    const [email, setEmail] = useState('');

    const handlePasswordReset = () => {
        console.log(`Password reset link sent to: ${email}`);
        
    };

    return (
        <KeyboardAvoidingView style={styles.container}>
            <View style={styles.avatarContainer}>
                <Avatar.Image source={require('../assets/avatar.png')} size={120} />
                <Text style={styles.title}>Forgot Password</Text>
            </View>

            <View style={styles.inputpart}>
                
                <TextInput
                    label="Email"
                    mode="outlined"
                    placeholder="Enter your registered email"
                    value={email}
                    onChangeText={setEmail}
                    style={styles.input}
                    left={<TextInput.Icon icon="email" size={20} />}
                />
                
            </View>

            <View style={styles.buttonpart}>
                <Button onPress={handlePasswordReset} style={styles.button} mode="contained">
                    Send Email Confirmation
                </Button>
                <Link href="/login" style={styles.backLink}>
                    Back to Login
                </Link>
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
        color: 'purple',
        fontWeight: 'bold',
        marginTop: 10,
        fontSize: 24,
    },
    inputpart: {
        width: '90%',
        marginBottom: 20,
    },
    input: {
        marginBottom: 10,
    },
    buttonpart: {
        width: '90%',
        alignItems: 'center',
    },
    button: {
        marginBottom: 10,
        minWidth: 250, 
        paddingHorizontal: 20,  
    },
    backLink: {
        marginTop: 20,
        textDecorationLine: 'underline',
        color: 'purple',
        fontSize: 16,
    },
});
