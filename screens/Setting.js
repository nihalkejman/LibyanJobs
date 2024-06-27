import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Switch,
    ScrollView
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import NavBar from '../components/NavBar';

const SettingsScreen = () => {
    const navigation = useNavigation();
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => setIsDarkMode(previousState => !previousState);

    const settingsOptions = [
        { label: 'Account', icon: 'account-circle' },
        { label: 'Security', icon: 'security' },
        { label: 'Data Privacy', icon: 'privacy-tip' },
        { label: 'Accessibility', icon: 'accessible' },
        { label: 'Notifications', icon: 'notifications' },
        { label: 'Help Center', icon: 'help' },
        { label: 'Privacy Policy', icon: 'policy' },
        { label: 'About the App', icon: 'info' },
        { label: 'Logout', icon: 'logout' },
    ];

    const handleOptionPress = (option) => {
        switch (option.label) {
            case 'Account':
                navigation.navigate('AccountSetting');
                break;
            case 'Security':
                navigation.navigate('SecuritySetting');
                break;
            case 'Data Privacy':
                navigation.navigate('DataprivacySetting');
                break;
            case 'Packages':
                navigation.navigate('PackagesSetting');
                break;
            case 'Notifications':
                navigation.navigate('NotificationSetting');
                break;
            case 'Help Centre':
                navigation.navigate('HelpCentreSettings');
                break;
            case 'Privacy Policy':
                navigation.navigate('PrivacyPolicySetting');
                break;
            case 'About the App':
                navigation.navigate('AboutTheApp');
                break;
            case 'Logout':
                navigation.navigate('SplashScreen');
                break;
            default:
                console.log(`Pressed ${option.label}`);
        }
    };

    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollView}>
                {settingsOptions.map((option, index) => (
                    <TouchableOpacity
                        key={index}
                        style={styles.option}
                        onPress={() => handleOptionPress(option)}
                    >
                        <View style={styles.optionContent}>
                            <Icon name={option.icon} size={24} color="#555" />
                            <Text style={styles.optionText}>{option.label}</Text>
                        </View>
                        <Icon name="chevron-right" size={24} color="#555" />
                    </TouchableOpacity>
                ))}

                {/* <TouchableOpacity
                    style={styles.option}
                    onPress={toggleDarkMode}
                >
                    <View style={styles.optionContent}>
                        <Icon name="dark-mode" size={24} color="#555" />
                        <Text style={styles.optionText}>Dark Mode</Text>
                    </View>
                    <Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={isDarkMode ? "#f5dd4b" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleDarkMode}
                        value={isDarkMode}
                    />
                </TouchableOpacity> */}
            </ScrollView>
            <NavBar />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    scrollView: {
        flex: 1,
    },
    option: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 20,
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
    },
    optionContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    optionText: {
        marginLeft: 10,
        fontSize: 16,
        color: '#555555',
    },
});

export default SettingsScreen;
