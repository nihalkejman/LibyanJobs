import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons, FontAwesome, Entypo } from '@expo/vector-icons';
import { db, auth } from '../firebaseConfig';


const JobProfile = ({ navigation, route }) => {
    // Extract job object from navigation parameters
    const { job, company } = route.params;

    const handleCompanyPress = () => {
        navigation.navigate('JobCompany', { company: job.company });
    };

    const handleApplyPress = () => {
        const currentUser = auth.currentUser; // Get the currently authenticated user
        if (currentUser) {
            const userId = currentUser.uid; // Get the user ID
            console.log('User ID:', userId);

            // Navigate to the application form screen and pass user ID and job ID as params
            navigation.navigate('ApplyJobScreen', { userId: userId, jobId: job.id });
        } else {
            console.log('No user signed in');
        }
    };


    return (
        <View style={styles.container}>
            <View style={styles.cardContainer}>
                <View style={styles.card}>
                    <View style={styles.header}>
                        <Image source={{ uri: job.logo }} style={styles.logo} />
                        <Text style={styles.headerDate}>Posted: {job.posted}</Text>
                    </View>
                    <Text style={styles.title}>{job.name}</Text>
                    <TouchableOpacity onPress={handleCompanyPress}>
                        <Text style={styles.companyName}>{job.company}</Text>
                    </TouchableOpacity>


                    <View style={styles.companySection}>
                        <Text style={styles.contractType}>{job.type}</Text>
                        <Text style={styles.department}>{job.department}</Text>
                    </View>
                    <TouchableOpacity style={styles.visitButton}>
                        <Text style={styles.visitButtonText}>Visit Website</Text>
                    </TouchableOpacity>
                    <Text style={styles.jobOverviewTitle}>Job Overview</Text>
                    <Text style={styles.jobOverviewText}>{job['job overview']}</Text>
                    <Text style={styles.location}>Location: {job.location}</Text>
                    <Text style={styles.salary}>Salary: ${job.salary}</Text>
                    <View style={styles.actionsContainer}>
                        <TouchableOpacity style={styles.actionButton}>
                            <MaterialCommunityIcons name="email-outline" size={20} color="#757575" />
                            <Text style={styles.actionText}>Send to Friends</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.actionButton}>
                            <FontAwesome name="heart-o" size={20} color="#757575" />
                            <Text style={styles.actionText}>Save</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.actionButton}>
                            <MaterialCommunityIcons name="share-outline" size={20} color="#757575" />
                            <Text style={styles.actionText}>Share</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.applyButtonContainer}>
                        <TouchableOpacity style={styles.applyButton} onPress={handleApplyPress}>
                            <Text style={styles.applyButtonText}>Apply Now</Text>
                        </TouchableOpacity>
                </View>
            </View>
         
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
    },
    cardContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        paddingBottom: 16, // Adjust paddingBottom to accommodate apply button
    },
    card: {
        backgroundColor: '#ffffff',
        borderRadius: 8,
        padding: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        paddingBottom: 70, // Adjust paddingBottom to accommodate apply button
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
    },
    logo: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    headerDate: {
        fontSize: 14,
        color: '#757575',
        marginLeft: 8,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    companyName: {
        fontSize: 16,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        marginBottom: 8,
    },
    companySection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 16,
    },
    contractType: {
        fontSize: 12,
        color: '#757575',
        backgroundColor: '#ececec',
        borderRadius: 2,
        paddingHorizontal: 8,
        paddingVertical: 4,
    },
    department: {
        fontSize: 12,
        color: '#757575',
        backgroundColor: '#ececec',
        borderRadius: 2,
        paddingHorizontal: 8,
        paddingVertical: 4,
    },
    visitButton: {
        backgroundColor: '#FFA500',
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 16,
    },
    visitButtonText: {
        color: '#ffffff',
        fontSize: 14,
    },
    jobOverviewTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    jobOverviewText: {
        fontSize: 14,
        marginBottom: 16,
    },
    location: {
        fontSize: 14,
        color: '#757575',
        marginBottom: 8,
    },
    salary: {
        fontSize: 14,
        color: '#757575',
        marginBottom: 16,
    },
    actionsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    actionButton: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 8,
    },
    actionText: {
        marginLeft: 4,
        fontSize: 12,
        color: '#757575',
    },
    applyButtonContainer: {
        position: 'absolute',
        bottom: 15,
        left: 0,
        right: 0,
        alignItems: 'center',
    },
    applyButton: {
        backgroundColor: '#FFA500',
        borderRadius: 20,
        paddingVertical: 16, // Adjust the padding as needed
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        width: '80%', // Adjust the width as needed
    },
    applyButtonText: {
        color: '#ffffff',
        fontSize: 18, // Adjust the font size as needed
        fontWeight: 'bold', // Add bold font weight for emphasis
    },
});

export default JobProfile;
