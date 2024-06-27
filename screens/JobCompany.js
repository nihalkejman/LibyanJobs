import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, FlatList } from 'react-native';
import { FontAwesome, Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
import CompanyLogo from '../assets/OIP.jpg';
import NavBar from '../components/NavBar';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import LatestJobs from '../components/LatestJobs';

const CompanyProfileScreen = ({ navigation, route }) => {
  const { company } = route.params;

  const [companyOverview, setCompanyOverview] = useState('');
  const [jobs, setJobs] = useState([]);
  const [following, setFollowing] = useState(false); // State to track follow state

  useEffect(() => {
    const fetchCompanyData = async () => {
      try {
        const q = query(collection(db, 'company'), where('company', '==', company));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
          querySnapshot.forEach((doc) => {
            const data = doc.data();
            console.log('Company data:', data);
            setCompanyOverview(data.companyOverview);
            console.log('Company overview set:', data.companyOverview);
          });
        } else {
          console.log('No company found with name:', company);
        }
      } catch (error) {
        console.error('Error fetching company overview:', error);
      }
    };

    fetchCompanyData();
  }, [company]);

  const handleViewMore = () => {
    navigation.navigate('MoreJobsScreen');
  };
  const toggleFollow = () => {
    setFollowing(prevState => !prevState); // Toggle follow state
  };
  const followButtonText = following ? 'Following' : 'Follow'; // Text based on follow state


  const JobItem = ({ job }) => (
    <View style={styles.jobItem}>
      {/* Job item content */}
    </View>
  );

  return (
    <View style={styles.container}>
      <ScrollView style={styles.screen}>
        <View style={styles.headerContainer}>
          <Image source={CompanyLogo} style={styles.companyLogo} />
          <Text style={styles.companyName}>{company}</Text>
          <Text style={styles.companyOverview}>{companyOverview}</Text>
          <Text style={styles.followerCount}>11,350 followers</Text>
          <View style={styles.actionButtons}>
            <TouchableOpacity style={styles.followButton} onPress={toggleFollow}>
              <Text style={styles.followButtonText}>{followButtonText}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.visitButton}>
              <Text style={styles.visitButtonText}>Visit website</Text>
            </TouchableOpacity>
          </View>
        </View>


        <View style={styles.content}>
          <Text style={styles.header}>Latest Jobs - أحدث الوظائف</Text>
          <LatestJobs/>
          <FlatList
            data={jobs}
            renderItem={({ item }) => <JobItem job={item} />}
            keyExtractor={item => item.id}
          />
        
        </View>
      </ScrollView>
      <NavBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  screen: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerContainer: {
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  companyLogo: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
  },
  companyName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  companyOverview: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
  },
  followerCount: {
    color: '#757575',
    marginBottom: 10,
  },
  actionButtons: {
    flexDirection: 'row',
    marginTop: 10,
  },
  followButton: {
    backgroundColor: '#F0F4F8',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginRight: 10,
  },
  followButtonText: {
    color: '#333',
  },
  visitButton: {
    backgroundColor: '#FFA500',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  visitButtonText: {
    color: '#fff',
  },

  content: {
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
    alignItems: 'flex-start',
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
    justifyContent: 'center',
  },
  jobTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  jobInfo: {
    fontSize: 14,
    color: '#999',
    marginVertical: 4,
  },
  actionRow: {
    flexDirection: 'row',
    marginTop: 16,
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
  rightActions: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  saveButton: {
    marginBottom: 8,
  },
  moreButton: {
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

export default CompanyProfileScreen;
