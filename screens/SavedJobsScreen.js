import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, RefreshControl } from 'react-native';

const SavedJobsScreen = ({ navigation }) => {
    const [savedJobsData, setSavedJobsData] = useState([
        { id: '1', title: 'Software Engineer', company: 'Tech Co', location: 'San Francisco' },
        { id: '2', title: 'UX/UI Designer', company: 'Design Studio', location: 'New York' },
        { id: '3', title: 'Data Scientist', company: 'Data Corp', location: 'Chicago' },
    ]);

    const [isRefreshing, setIsRefreshing] = useState(false);

    const renderJobItem = ({ item }) => (
        <View style={styles.jobItemContainer}>
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('JobDetailsScreen', { jobId: item.id });
                }}
            >
                <Text style={styles.jobTitle}>{item.title}</Text>
                <Text style={styles.jobCompany}>{item.company}</Text>
                <Text style={styles.jobLocation}>{item.location}</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.removeButton}
                onPress={() => handleRemoveJob(item.id)}
            >
                <Text style={styles.removeButtonText}>Remove</Text>
            </TouchableOpacity>
        </View>
    );

    const handleRemoveJob = (jobId) => {
        const updatedJobs = savedJobsData.filter(job => job.id !== jobId);
        setSavedJobsData(updatedJobs);
    };

    const handleRefresh = () => {
        
        setIsRefreshing(true);
        setTimeout(() => {
            setIsRefreshing(false);
        }, 2000);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>My Saved Jobs</Text>
            {savedJobsData.length === 0 ? (
                <Text style={styles.emptyStateText}>No saved jobs yet.</Text>
            ) : (
                <FlatList
                    data={savedJobsData}
                    keyExtractor={(item) => item.id}
                    renderItem={renderJobItem}
                    contentContainerStyle={styles.jobListContainer}
                    refreshControl={
                        <RefreshControl
                            refreshing={isRefreshing}
                            onRefresh={handleRefresh}
                        />
                    }
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    emptyStateText: {
        fontSize: 18,
        color: '#888',
        textAlign: 'center',
    },
    jobListContainer: {
        flexGrow: 1,
    },
    jobItemContainer: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        padding: 16,
        marginBottom: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    jobTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    jobCompany: {
        fontSize: 16,
        color: '#555',
        marginBottom: 4,
    },
    jobLocation: {
        fontSize: 14,
        color: '#888',
    },
    removeButton: {
        backgroundColor: '#FF6347',
        padding: 8,
        borderRadius: 6,
    },
    removeButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});

export default SavedJobsScreen;
