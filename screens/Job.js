import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const JobProfileScreen = ({ navigation }) => {
    const jobData = {
        title: 'Software Developer',
        company: 'ABC Tech Solutions',
        location: 'New York, NY',
        description: 'We are looking for a talented software developer to join our team and work on exciting projects. Apply now!',
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{jobData.title}</Text>
            <Text style={styles.company}>{jobData.company}</Text>
            <Text style={styles.location}>{jobData.location}</Text>
            <Text style={styles.description}>{jobData.description}</Text>
            <Button
                title="Profile Profile"
                onPress={() => navigation.navigate('JobProfile')}
            />
            <Button
                title="Company Profile"
                onPress={() => navigation.navigate('JobCompany')}
            />
            <Button
                title="Setting"
                onPress={() => navigation.navigate('Setting')}
            />
            <Button
                title="Job SCREEN"
                onPress={() => navigation.navigate('JobScreen')}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    company: {
        fontSize: 18,
        marginBottom: 10,
    },
    location: {
        fontSize: 16,
        marginBottom: 20,
    },
    description: {
        fontSize: 14,
    },
});

export default JobProfileScreen;

