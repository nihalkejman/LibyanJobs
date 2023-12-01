// components/FeaturedJobs.js
import React from 'react';
import { Card, Text, Button, Icon } from 'react-native-elements';
import { StyleSheet, View } from 'react-native';

const FeaturedJobs = () => {
    // Dummy data for featured jobs
    const featuredJobs = [
        {
            title: 'Frontend Developer',
            location: 'Seattle',
            type: 'Contract',
        },
        {
            title: 'Data Scientist',
            location: 'Chicago',
            type: 'Full Time',
        },
        // Add more featured job entries as needed
    ];

    return (
        <View>
            <Text style={styles.heading}>Featured Jobs</Text>
            <Button
                title="See More"
                type="clear"
                titleStyle={styles.seeMoreText}
                onPress={() => {
                    
                }}
            />
            {featuredJobs.map((job, index) => (
                <Card key={index} containerStyle={styles.cardContainer}>
                    <View style={styles.jobDetailsContainer}>
                        <Text style={styles.jobDetailText}>Title: {job.title}</Text>
                        <Text style={styles.jobDetailText}>Location: {job.location}</Text>
                        <Text style={styles.jobDetailText}>Type: {job.type}</Text>
                    </View>
                    <View style={styles.actionsContainer}>
                        <Button
                            icon={<Icon name="envelope" type="font-awesome-5" size={15} color="white" />}
                            title="Send"
                            buttonStyle={styles.actionButton}
                            titleStyle={styles.buttonTitle}
                        />
                        <Button
                            icon={<Icon name="bookmark" type="font-awesome-5" size={15} color="white" />}
                            title="Save"
                            buttonStyle={styles.actionButton}
                            titleStyle={styles.buttonTitle}
                        />
                        <Button
                            icon={<Icon name="share" type="font-awesome-5" size={15} color="white" />}
                            title="Share"
                            buttonStyle={styles.actionButton}
                            titleStyle={styles.buttonTitle}
                        />
                    </View>
                    <View style={styles.saveIconContainer}>
                        <Icon name="bookmark" type="font-awesome-5" size={30} color="#517fa4" />
                    </View>
                    <Button
                        title="View More"
                        type="clear"
                        titleStyle={styles.viewMoreText}
                        containerStyle={styles.viewMoreContainer}
                    />
                </Card>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    cardContainer: {
        borderRadius: 10,
        elevation: 3, // for Android
        padding: 15,
        marginBottom: 15,
    },
    jobDetailsContainer: {
        marginTop: 10,
    },
    jobDetailText: {
        fontSize: 16,
        marginBottom: 5,
    },
    actionsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    actionButton: {
        backgroundColor: '#517fa4',
        flex: 1, // Distribute available space equally among buttons
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        paddingVertical: 8,
        marginHorizontal: 5,
    },
    buttonTitle: {
        fontSize: 12,
    },
    saveIconContainer: {
        position: 'absolute',
        top: 10, // Adjusted position
        right: 15,
    },
    viewMoreContainer: {
        position: 'absolute',
        bottom: 40, // Adjusted position
        right: 5,
    },
    viewMoreText: {
        color: '#517fa4',
        fontSize: 16,
    },
});

export default FeaturedJobs;

