import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import CompanyLogo from '../assets/OIP.jpg'; 

export default function HomeScreen({navigation }) {
    return (
        <View style={styles.container}>
            <Image source={CompanyLogo} style={styles.logo} />
            <Text style={styles.tagline}>Find Your Dream Job Today</Text>
            <TouchableOpacity
                style={[styles.button, styles.signInButton]}
                onPress={() => navigation.navigate('SignIn')}
            >
                <Text style={styles.buttonText}>Sign in</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.button, styles.signUpButton]}
                onPress={() => navigation.navigate('SignUpScreen')}
            >
                <Text style={styles.buttonText}>Sign up</Text>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    logo: {
        width: 300,
        height: 120, 
        resizeMode: 'contain',
        marginBottom: 32, 
    },
    tagline: {
        fontSize: 20, 
        color: 'gray', 
        marginBottom: 48, 
    },
    button: {
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 5,
        width: '80%', 
        alignItems: 'center',
        marginBottom: 16, 
    },
    signInButton: {
        backgroundColor: '#FFA500', 
    },
    signUpButton: {
        backgroundColor: '#D3D3D3', 
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16, 
    },
});
