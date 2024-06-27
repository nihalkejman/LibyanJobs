import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const AboutTheApp = () => {
    return (
        <View style={styles.container}>
            {/* <Image
                source={require('./assets/libyanJobs_logo.png')} // Replace with your logo image path
                style={styles.logo}
            /> */}
            <Text style={styles.title}>Welcome to LibyanJobs</Text>
            <Text style={styles.description}>
                LibyanJobs is a job search app developed by Nihal Kejman. It is designed to help you
                find job opportunities with ease. Our app utilizes React Native, Expo JS, and Firebase
                Firestore to provide a seamless and efficient job search experience.
            </Text>
            <Text style={styles.footer}>Version 1.0.0</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#f0f0f0', // Light gray background color
    },
    logo: {
        width: 150,
        height: 150,
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
        color: '#333', // Dark gray text color
    },
    description: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 20,
        color: '#555', // Gray text color
    },
    footer: {
        fontSize: 14,
        color: '#888', // Light gray text color
    },
});

export default AboutTheApp;
