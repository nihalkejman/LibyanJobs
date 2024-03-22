import React, { useState } from 'react';
import { View, Text, TextInput, Switch, Button, StyleSheet } from 'react-native';


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
                    <Text>New Password:</Text>
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
                    <Text>Enable Two-Factor Authentication</Text>
                    <Switch
                        value={twoFactorAuth}
                        onValueChange={(value) => setTwoFactorAuth(value)}
                    />
                </View>
            </View>

            <Button title="Save Changes" onPress={handleSaveChanges} />
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
    input: {
        flex: 1,
        marginLeft: 10,
        borderWidth: 1,
        padding: 8,
    },
    switchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
});

export default SecurityScreen;
