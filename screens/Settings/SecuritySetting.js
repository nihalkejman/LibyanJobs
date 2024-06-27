import React, { useState } from 'react';
import { View, Text, TextInput, Switch, TouchableOpacity, StyleSheet } from 'react-native';

const SecurityScreen = () => {
    const [password, setPassword] = useState('');
    const [twoFactorAuth, setTwoFactorAuth] = useState(false);

    const handleSaveChanges = () => {
        console.log('Security changes saved:', { password, twoFactorAuth });
    };

    return (
        <View style={styles.container}>
            <View style={styles.section}>
                <Text style={styles.sectionHeader}>Password</Text>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>New Password:</Text>
                    <TextInput
                        style={styles.input}
                        secureTextEntry
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                    />
                </View>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionHeader}>Two-Factor Authentication</Text>
                <View style={styles.switchContainer}>
                    <Text style={styles.switchText}>Enable Two-Factor Authentication</Text>
                    <Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={twoFactorAuth ? "#f5dd4b" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={(value) => setTwoFactorAuth(value)}
                        value={twoFactorAuth}
                    />
                </View>
            </View>

            <TouchableOpacity style={styles.saveButton} onPress={handleSaveChanges}>
                <Text style={styles.saveButtonText}>Save Changes</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    section: {
        marginBottom: 20,
    },
    sectionHeader: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    label: {
        width: 120,
        fontWeight: 'bold',
    },
    input: {
        flex: 1,
        marginLeft: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 8,
    },
    switchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    switchText: {
        flex: 1,
        marginRight: 10,
    },
    saveButton: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFA500',
        paddingVertical: 12,
        borderRadius: 5,
    },
    saveButtonText: {
        color: 'white',
        fontSize: 16,
    },
});

export default SecurityScreen;
