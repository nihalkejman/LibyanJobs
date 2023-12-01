import React from 'react';
import { View, Text, ScrollView } from 'react-native'; // Import ScrollView
import LatestJobs from '../components/LatestJobs';
import FeaturedJobs from '../components/FeaturedJobs';
import MoreJobs from '../components/MoreJobs';
import HeaderJobs from '../components/HeaderJobs';

const JobScreen = () => {
    return (
        <ScrollView>
            <HeaderJobs />

            <LatestJobs />
            {/* You can customize the styling and layout here */}

            <FeaturedJobs />
            {/* You can customize the styling and layout here */}

            <MoreJobs />
            {/* You can customize the styling and layout here */}
        </ScrollView>
    );
};

export default JobScreen;
