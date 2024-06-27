import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const PrivacyPolicySetting = () => {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Privacy Policy</Text>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Information We Collect</Text>
                <Text style={styles.sectionText}>
                    We collect information that you provide directly to us, such as your name, email address, and resume details when you create an account or apply for a job.
                </Text>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>How We Use Your Information</Text>
                <Text style={styles.sectionText}>
                    We use the information you provide to match you with relevant job opportunities and improve our services. Your information is kept confidential and is not shared with third parties without your consent.
                </Text>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Security</Text>
                <Text style={styles.sectionText}>
                    We prioritize the security of your information and have implemented measures to protect against unauthorized access and disclosure.
                </Text>
            </View>
        </ScrollView>
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
        textAlign: 'center', // Center the title
    },
    section: {
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    sectionText: {
        fontSize: 16,
        lineHeight: 24, // Add line height for better readability
    },
});

export default PrivacyPolicySetting;

