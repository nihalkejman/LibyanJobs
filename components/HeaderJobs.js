import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import RNPickerSelect from 'react-native-picker-select';

const HeaderJobs = () => {
    const [jobLocation, setJobLocation] = useState('');
    const [jobCategory, setJobCategory] = useState('');
    

    const jobLocations = ['New York', 'Los Angeles', 'San Francisco', 'Chicago', 'Miami'].sort();
    const jobCategories = ['Technology', 'Healthcare', 'Education', 'Finance', 'Hospitality'].sort();

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.profileSection}>
                    <Icon name="user-circle-o" size={24} color="black" />
                    <Text style={styles.profileText}>Nihal Kejman</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.savedJobsSection}>
                    <Icon name="bookmark-o" size={24} color="red" />
                    <Text style={styles.savedJobsText}>My saved jobs</Text>
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

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F8F8F8',
        paddingTop: 10,
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
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        padding: 5,
        paddingHorizontal: 10,
        marginHorizontal: 15,
    },
    searchIcon: {
        marginRight: 10,
    },
    searchInput: {
        flex: 1,
    },
    filterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15,
        paddingHorizontal: 15,
    },
    filterSection: {
        flex: 1,
    },
});

export default HeaderJobs;
