import React, { useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import LatestJobs from '../components/LatestJobs';
import FeaturedJobs from '../components/FeaturedJobs';
import MoreJobs from '../components/MoreJobs';
import NavBar from '../components/NavBar';
import HeaderJobs from '../components/HeaderJobs';

const JobScreen = ({ navigation, route }) => {
    const [userName, setUserName] = useState('John Doe');

    const handleUpdateName = (newName) => {
        setUserName(newName);
        navigation.setParams({ updatedName: newName });

    };

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <View>
                    <HeaderJobs onUpdateName={handleUpdateName} route={route} />
                    <LatestJobs navigation={navigation} />
                    <FeaturedJobs navigation={navigation} />
                    <MoreJobs navigation={navigation} />
                </View>
            </ScrollView>
            <NavBar />
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollContent: {
        paddingBottom: 64, 
    },
});

export default JobScreen;
