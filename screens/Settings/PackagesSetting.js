import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const PackagesSetting = () => {
    const subscriptionPackages = [
        {
            name: 'Basic CV Package',
            price: '$9.99/month',
            features: ['Resume Building', 'Job Matching', 'Basic Support'],
        },
        {
            name: 'Power CV Package',
            price: '$19.99/month',
            features: ['Advanced Resume Building', 'Priority Job Matching', 'Premium Support'],
        },
    ];

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Subscription Packages</Text>

            {subscriptionPackages.map((pkg, index) => (
                <View key={index} style={styles.packageContainer}>
                    <Text style={styles.packageName}>{pkg.name}</Text>
                    <Text style={styles.packagePrice}>{pkg.price}</Text>
                    <View style={styles.featuresContainer}>
                        {pkg.features.map((feature, featureIndex) => (
                            <Text key={featureIndex} style={styles.feature}>
                                {feature}
                            </Text>
                        ))}
                    </View>
                </View>
            ))}
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
    packageContainer: {
        backgroundColor: '#f0f0f0',
        borderRadius: 10,
        padding: 15,
        marginBottom: 15,
    },
    packageName: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    packagePrice: {
        fontSize: 18,
        color: '#007bff',
        marginBottom: 10,
    },
    featuresContainer: {
        marginLeft: 10,
    },
    feature: {
        fontSize: 16,
        marginBottom: 5,
    },
});

export default PackagesSetting;
