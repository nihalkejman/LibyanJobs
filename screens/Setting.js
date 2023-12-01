// screens/SettingsScreen.js

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SettingsScreen = () => {
    const navigation = useNavigation();

    const settingsOptions = [
        'Account',
        'Security',
        'Data Privacy',
        'Packages',
        'Notifications',
        'Help Centre',
        'Privacy Policy',
        'Dark Mode',
        'About the App',
        'Logout',
    ];

    const handleOptionPress = (option) => {
        switch (option) {
            case 'Account':
                navigation.navigate('AccountSetting');
                break;
            case 'Security':
                navigation.navigate('SecuritySetting');
                break;
            // Add other cases for different options
            default:
                console.log(`Pressed ${option}`);
        }
    };



    return (
        <View style={styles.container}>
            {settingsOptions.map((option, index) => (
                <TouchableOpacity
                    key={index}
                    style={styles.option}
                    onPress={() => handleOptionPress(option)}
                >
                    <Text>{option}</Text>
                </TouchableOpacity>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    option: {
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
});

export default SettingsScreen;
