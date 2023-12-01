import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Button } from 'react-native-elements';

const JobProfileScreen = () => {
    const jobData = {
        title: 'Software Developer',
        company: 'ABC Tech Solutions',
        location: 'New York, NY',
        description:
            'We are looking for a talented software developer to join our team and work on exciting projects. Apply now! ' +
            'This is a great opportunity to contribute to cutting-edge technology and collaborate with a dynamic team.',
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.headerContainer}>
                <Ionicons name="briefcase" size={40} color="#3498db" />
                <Text style={styles.title}>{jobData.title}</Text>
                <Text style={styles.company}>{jobData.company}</Text>
                <Text style={styles.location}>{jobData.location}</Text>
                <Text style={styles.description}>{jobData.description}</Text>
            </View>

            {/* Apply Button */}
            <Button
                title="Apply Now"
                type="solid"
                buttonStyle={styles.applyButton}
                onPress={() => {
                    // Add your logic for handling the "Apply Now" button press
                }}
            />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 20,
    },
    headerContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 10,
        color: '#333',
    },
    company: {
        fontSize: 18,
        marginBottom: 10,
        color: '#555',
    },
    location: {
        fontSize: 16,
        marginBottom: 20,
        color: '#777',
    },
    description: {
        fontSize: 14,
        marginBottom: 20,
        color: '#333',
        textAlign: 'center',
    },
    applyButton: {
        backgroundColor: '#517fa4',
        marginTop: 20,
    },
});

export default JobProfileScreen;

