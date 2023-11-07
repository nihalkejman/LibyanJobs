import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';

export default function Job() {
    const [jobListings, setJobListings] = useState([]);
    const [loading, setLoading] = useState(true);

    // Sample job listings data
    const sampleJobListings = [
        { id: '1', title: 'Software Engineer', company: 'TechCo', location: 'New York, NY' },
        { id: '2', title: 'Web Designer', company: 'DesignMasters', location: 'San Francisco, CA' },
        // Add more job listings here
    ];

    useEffect(() => {
        // Simulate fetching job listings from an API
        setTimeout(() => {
            setJobListings(sampleJobListings);
            setLoading(false);
        }, 2000);
    }, []);

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            {loading ? (
                <ActivityIndicator size="large" />
            ) : (
                <FlatList
                    data={jobListings}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View>
                            <Text>{item.title}</Text>
                            <Text>{item.company}</Text>
                            <Text>{item.location}</Text>
                            <View style={{ borderBottomColor: 'black', borderBottomWidth: 1 }} />
                        </View>
                    )}
                />
            )}
        </View>
    );
}
