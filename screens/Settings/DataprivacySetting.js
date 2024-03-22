import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const DataprivacySetting = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Data Privacy Policy</Text>

            <Text style={styles.subtitle}>1. Overview</Text>
            <Text style={styles.paragraph}>
                Welcome to [libyanjobs! This Data Privacy Policy describes how we
                collect, use, and share your personal information.
            </Text>

            <Text style={styles.subtitle}>2. Information We Collect</Text>
            <Text style={styles.paragraph}>
                We collect information you provide directly to us, such as your name,
                email address, and resume details when you create an account.
            </Text>

            <Text style={styles.subtitle}>3. How We Use Your Information</Text>
            <Text style={styles.paragraph}>
                We use the information we collect to match you with relevant job
                opportunities, improve our services, and communicate with you about your
                account and new job listings.
            </Text>

            <Text style={styles.subtitle}>4. Data Security</Text>
            <Text style={styles.paragraph}>
                We prioritize the security of your information and take reasonable
                measures to protect it from unauthorized access or disclosure.
            </Text>

            <Text style={styles.subtitle}>5. Your Choices</Text>
            <Text style={styles.paragraph}>
                You can update or delete your account information at any time. If you
                have questions or concerns about your data, contact us at
                support@[libyanjobs].com.
            </Text>

            <Text style={styles.subtitle}>6. Changes to This Policy</Text>
            <Text style={styles.paragraph}>
                We may update this Data Privacy Policy to reflect changes in our
                practices. We encourage you to review this page periodically for the
                latest information.
            </Text>

            <Text style={styles.subtitle}>7. Contact Us</Text>
            <Text style={styles.paragraph}>
                If you have any questions about this Data Privacy Policy, please
                contact us at support@[libyanjobs].com.
            </Text>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    subtitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    paragraph: {
        fontSize: 16,
        marginBottom: 15,
    },
});

export default DataprivacySetting;
