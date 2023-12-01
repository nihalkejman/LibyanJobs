import React, { useState } from 'react';
import { View,Text,TouchableOpacity, TouchableWithoutFeedback, Button, Keyboard, ActivityIndicator,TextInput,} from 'react-native';
import { Icon } from 'react-native-elements';
import DropDownPicker from 'react-native-dropdown-picker';
import _ from 'lodash';
import { useNavigation } from '@react-navigation/native';

const HeaderSection = ({navigation}) => {
    const [searchVisible, setSearchVisible] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [selectedLocation, setSelectedLocation] = useState(null);
    const [selectedJobCategory, setSelectedJobCategory] = useState(null);

    const locations = [
        { label: 'New York', value: 'new_york' },
        { label: 'San Francisco', value: 'san_francisco' },
        { label: 'Los Angeles', value: 'los_angeles' },
        { label: 'Chicago', value: 'chicago' },
    ];

    const jobCategories = [
        { label: 'Software Developer', value: 'software_developer' },
        { label: 'UX/UI Designer', value: 'ux_ui_designer' },
        { label: 'Data Scientist', value: 'data_scientist' },
        // Add more job categories as needed
    ];

    const handleSearch = _.debounce(async (query) => {
        setIsLoading(true);

        try {
            console.log('Search query:', query);
            console.log('Selected Location:', selectedLocation);
            console.log('Selected Job Category:', selectedJobCategory);

            // Your search logic here...

        } catch (error) {
            console.error('Search failed:', error);
            // Handle error feedback to the user
        } finally {
            setIsLoading(false);
        }
    }, 300);

    const toggleSearch = () => {
        setSearchVisible(!searchVisible);
        setSearchQuery('');
    };

    const handleOutsideClick = () => {
        setSearchVisible(false);
        Keyboard.dismiss();
    };

    return (
        <TouchableWithoutFeedback onPress={handleOutsideClick}>
            <View style={styles.headerContainer}>
                <View style={styles.topContainer}>
                    <View style={styles.userContainer}>
                        <Icon name="person" type="font-awesome-5" size={20} color="#517fa4" />
                        <Text style={styles.userName}>Nihal Kejman</Text>
                    </View>
                    <TouchableOpacity
                        style={styles.savedJobsContainer}
                        onPress={() => {
                            navigation.navigate('SavedJobsScreen'); 
                        }}
                    >
                        <Icon name="bookmark" type="font-awesome-5" size={20} color="#517fa4" />
                        <Text style={styles.savedJobsText}>My Saved Jobs</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.bottomContainer}>
                    <View style={styles.searchDropdownContainer}>
                        <TouchableOpacity onPress={toggleSearch}>
                            <View style={styles.searchContainer}>
                                {searchVisible ? (
                                    <View style={styles.searchInputContainer}>
                                        <TextInput
                                            placeholder="Search..."
                                            style={styles.searchInput}
                                            onChangeText={(text) => setSearchQuery(text)}
                                            value={searchQuery}
                                            autoFocus
                                        />
                                        {isLoading ? (
                                            <ActivityIndicator style={styles.loadingIndicator} size="small" color="#517fa4" />
                                        ) : (
                                            <TouchableOpacity onPress={() => handleSearch(searchQuery)}>
                                                <Text style={styles.searchButtonText}>Search</Text>
                                            </TouchableOpacity>
                                        )}
                                    </View>
                                ) : (
                                    <Icon name="search" type="font-awesome-5" size={20} color="#517fa4" />
                                )}
                            </View>
                        </TouchableOpacity>
                        <View style={styles.dropdownContainer}>
                            <DropDownPicker
                                items={locations}
                                placeholder="Select a location"
                                defaultValue={selectedLocation}
                                containerStyle={styles.dropdown}
                                style={styles.dropdownStyle}
                                itemStyle={styles.dropdownItemStyle}
                                dropDownStyle={styles.dropdownDropStyle}
                                onChangeItem={(item) => setSelectedLocation(item.value)}
                            />
                            <DropDownPicker
                                items={jobCategories}
                                placeholder="Select a job category"
                                defaultValue={selectedJobCategory}
                                containerStyle={styles.dropdown}
                                style={styles.dropdownStyle}
                                itemStyle={styles.dropdownItemStyle}
                                dropDownStyle={styles.dropdownDropStyle}
                                onChangeItem={(item) => setSelectedJobCategory(item.value)}
                            />
                        </View>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = {
    headerContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingVertical: 10,
        backgroundColor: '#fff', // Adjust the background color as needed
    },
    topContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 10,
    },
    userContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    userName: {
        marginLeft: 5,
        fontSize: 16,
    },
    savedJobsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    savedJobsText: {
        marginLeft: 5,
        fontSize: 16,
    },
    bottomContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
    },
    searchDropdownContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    searchContainer: {
        marginLeft: 10,
        marginRight: 10,
    },
    searchInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    searchInput: {
        flex: 1,
        fontSize: 16,
        marginRight: 10,
    },
    searchButtonText: {
        color: '#517fa4',
        fontSize: 16,
    },
    loadingIndicator: {
        marginRight: 10,
    },
    dropdownContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
    },
    dropdown: {
        height: 40,
        width: 150,
    },
    dropdownStyle: {
        backgroundColor: '#fafafa',
    },
    dropdownItemStyle: {
        justifyContent: 'flex-start',
    },
    dropdownDropStyle: {
        backgroundColor: '#fafafa',
    },
};

export default HeaderSection;

