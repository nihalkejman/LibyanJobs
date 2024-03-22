import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HelpCentreSettings = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Help Centre</Text>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Frequently Asked Questions</Text>
                <Text>- How do I create an account?</Text>
                <Text>- How can I search for jobs?</Text>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Contact Support</Text>
                <Text>
                    If you have any further questions or issues, please contact our support team at support@example.com.
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    section: {
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
});

export default HelpCentreSettings;
