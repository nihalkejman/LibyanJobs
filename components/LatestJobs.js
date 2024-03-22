import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import { FontAwesome, Entypo, MaterialCommunityIcons } from '@expo/vector-icons';

const LatestJobs = ({ navigation }) => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        const fetchDataFromFirestore = async () => {
            try {
                const jobsCollection = collection(db, 'jobs');
                const querySnapshot = await getDocs(jobsCollection);
                const fetchedJobs = [];

                querySnapshot.forEach((doc) => {
                    const jobData = doc.data();
                    const job = {
                        id: doc.id,
                        title: jobData.name,
                        ...jobData, // Include all job data
                    };
                    fetchedJobs.push(job);
                });

                setJobs(fetchedJobs);
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        };

        fetchDataFromFirestore();
    }, []);
    
    const handleViewMore = (job) => {
        navigation.navigate('JobProfile', { job });
    };

    const JobItem = ({ job, onViewMore }) => (
        <View style={styles.jobItem}>
            <Image source={{ uri: job.logo }} style={styles.logo} />
            <View style={styles.jobDetails}>
                <Text style={styles.jobTitle}>{job.title}</Text>
                <Text style={styles.jobInfo}>{job.location} - {job.type}</Text>
                <Text style={styles.jobInfo}>{job.company}</Text>
                <View style={styles.actionRow}>
                    <TouchableOpacity style={styles.actionButton}>
                        <MaterialCommunityIcons name="email-outline" size={16} color="#757575" />
                        <Text style={styles.actionText}>Send to friends</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.actionButton}>
                        <FontAwesome name="bookmark-o" size={16} color="#757575" />
                        <Text style={styles.actionText}>Save</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.actionButton}>
                        <MaterialCommunityIcons name="share-outline" size={16} color="#757575" />
                        <Text style={styles.actionText}>Share</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <TouchableOpacity style={styles.moreButton} onPress={() => onViewMore(job)}>
                <Entypo name="chevron-right" size={24} color="#757575" />
            </TouchableOpacity>
        </View>
    );


    return (
        <View style={styles.container}>
            <Text style={styles.header}>Latest Jobs</Text>
            <FlatList
                data={jobs}
                renderItem={({ item }) => <JobItem job={item} onViewMore={handleViewMore} />}
                keyExtractor={item => item.id}
                ListFooterComponent={() => (
                    <TouchableOpacity style={styles.seeMoreButton} onPress={handleViewMore}>
                        <Text style={styles.seeMoreText}>See More</Text>
                    </TouchableOpacity>
                )}
            />

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        paddingVertical: 16,
    },
    header: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        paddingHorizontal: 16,
        marginBottom: 16,
    },
    jobItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        marginHorizontal: 16,
        marginBottom: 16,
        backgroundColor: '#F9F9F9',
        borderRadius: 10,
        elevation: 1,
    },
    logo: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    jobDetails: {
        flex: 1,
        marginLeft: 16,
    },
    jobTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    jobInfo: {
        fontSize: 14,
        color: '#999',
        marginTop: 4,
    },
    actionRow: {
        flexDirection: 'row',
        marginTop: 8,
    },
    actionButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 16,
    },
    actionText: {
        marginLeft: 4,
        fontSize: 14,
        color: '#757575',
    },
    moreButton: {
        marginLeft: 'auto',
    },
    seeMoreButton: {
        alignItems: 'center',
        backgroundColor: '#ECEFF1',
        paddingVertical: 10,
        marginHorizontal: 16,
        borderRadius: 5,
    },
    seeMoreText: {
        fontSize: 16,
        color: '#333',
    },
});

export default LatestJobs;