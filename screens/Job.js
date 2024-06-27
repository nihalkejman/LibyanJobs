import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import AccountSetting from './Settings/AccountSetting'; 
//
const JobProfileScreen = ({ navigation }) => {
    const jobData = {
        title: 'Software Developer',
        company: 'ABC Tech Solutions',
        location: 'New York, NY',
        description: 'We are looking for a talented software developer to join our team and work on exciting projects. Apply now!',
    };

    const [userName, setUserName] = useState('John Doe');

    const handleUpdateName = (newName) => {
        setUserName(newName);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{jobData.title}</Text>
            <Text style={styles.company}>{jobData.company}</Text>
            <Text style={styles.location}>{jobData.location}</Text>
            <Text style={styles.description}>{jobData.description}</Text>

    
            <Text>Hello, {userName}</Text>

          
            <AccountSetting onUpdateName={handleUpdateName} />

      
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

