import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import styles from '../styles';
import LinkedInLogo from '../assets/LinkedInLogo.jpg'; // Adjust the path based on your project structure
import { useNavigation } from '@react-navigation/native';

export default function SignInScreen() {
    const navigation = useNavigation(); // Get the navigation object

    const handleSignIn = () => {
        navigation.navigate('JobScreen'); // Navigate to the "JobScreen" screen
    };

    return (
        <View style={styles.signInContainer}>
            {/* Greeting text */}
            <Text style={styles.greetingText}>Hello, welcome back</Text>

            <View style={styles.inputContainer}>
                {/* Email input */}
                <TextInput
                    style={styles.inputField}
                    placeholder="Email"
                    autoCapitalize="none"
                    keyboardType="email-address"
                />

                {/* Password input */}
                <TextInput
                    style={styles.inputField}
                    placeholder="Password"
                    secureTextEntry
                />

                {/* Forgot Password text and action */}
                <TouchableOpacity
                    onPress={() => {
                        // Implement your 'Forgot Password' logic here
                    }}
                >
                    <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
                </TouchableOpacity>

                {/* Sign In Button */}
                <TouchableOpacity
                    style={styles.signInButtonSignInScreen}
                    onPress={() => navigation.navigate('JobScreen')} // Navigate to the "Job" screen
                >
                    <Text style={styles.signInButtonText}>Sign In</Text>
                </TouchableOpacity>

                {/* Sign in with LinkedIn button and text */}
                <View style={styles.centeredLinkedInButtonContainer}>
                    <Text style={styles.signInWithText}>Sign in with</Text>
                    <TouchableOpacity
                        style={styles.linkedInLogoButton}
                        onPress={() => {
                            // Handle LinkedIn sign-in logic here
                        }}
                    >
                        <Image source={LinkedInLogo} style={styles.linkedInLogo} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}
