import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import RNPickerSelect from 'react-native-picker-select';
import { useNavigation } from '@react-navigation/native';

const HeaderJobs = ({ route }) => {
    const navigation = useNavigation();
    const updatedName = route.params?.updatedName || 'John Doe';

    const [jobLocation, setJobLocation] = useState('');
    const [jobCategory, setJobCategory] = useState('');

    const jobLocations = [
        'New York',
        'Los Angeles',
        'San Francisco',
        'Chicago',
        'Miami',
        'Seattle',
        'Boston',
        'Austin',
    ].sort();
    const jobCategories = [
        'Technology',
        'Healthcare',
        'Education',
        'Finance',
        'Hospitality',
        'Marketing',
        'Engineering',
    ].sort();

    const handleSavedJobsPress = () => {
        navigation.navigate('SavedJobsScreen');
    };

    const handleProfilePress = () => {
        navigation.navigate('AccountSetting', {
            onUpdateName: route.params?.onUpdateName,
        });
    };

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
            <View style={styles.header}>
                <TouchableOpacity style={styles.profileSection} onPress={handleProfilePress}>
                    <Icon name="user-circle-o" size={24} color="black" />
                    <Text style={styles.profileText}>{updatedName}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.savedJobsSection} onPress={handleSavedJobsPress}>
                    <Icon name="bookmark-o" size={24} color="red" />
                    <Text style={styles.savedJobsText}>My Saved Jobs</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.searchSection}>
                <Icon name="search" size={20} color="grey" style={styles.searchIcon} />
                <TextInput
                    placeholder="Search"
                    style={styles.searchInput}
                    clearButtonMode="while-editing"
                />
            </View>
            <View style={styles.filterContainer}>
                <View style={styles.filterSection}>
                    <RNPickerSelect
                        placeholder={{ label: 'Select job location', value: null }}
                        items={jobLocations.map(location => ({ label: location, value: location }))}
                        value={jobLocation}
                        onValueChange={(value) => setJobLocation(value)}
                        style={pickerSelectStyles}
                    />
                </View>
                <View style={styles.filterSection}>
                    <RNPickerSelect
                        placeholder={{ label: 'Select job category', value: null }}
                        items={jobCategories.map(category => ({ label: category, value: category }))}
                        value={jobCategory}
                        onValueChange={(value) => setJobCategory(value)}
                        style={pickerSelectStyles}
                    />
                </View>
            </View>
        </View>
    );
};
const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: '#DDDDDD',
        borderRadius: 5,
        color: 'black',
        paddingRight: 30,
    },
    inputAndroid: {
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 1,
        borderColor: '#DDDDDD',
        borderRadius: 5,
        color: 'black',
        paddingRight: 30,
    },
});
//
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        paddingTop: StatusBar.currentHeight + 50,
        paddingBottom: 20,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        alignItems: 'center',
        marginBottom: 15,
    },
    profileSection: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    profileText: {
        marginLeft: 10,
        fontWeight: 'bold',
    },
    savedJobsSection: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    savedJobsText: {
        marginLeft: 5,
        color: 'red',
        fontWeight: 'bold',
    },
    searchSection: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F8F8F8',
        borderRadius: 10,
        paddingHorizontal: 10,
        marginHorizontal: 15,
        marginBottom: 15,
    },
    searchIcon: {
        marginRight: 10,
    },
    searchInput: {
        flex: 1,
        paddingVertical: 8,
    },
    filterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
    },
    filterSection: {
        flex: 1,
        marginLeft: 10,
    },
});

export default HeaderJobs;
