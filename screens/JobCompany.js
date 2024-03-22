import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, FlatList } from 'react-native';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../firebaseConfig';

const CompanyProfileScreen = ({ navigation, route }) => {
  // Extract job and company data from route params
  const { job, company } = route.params;

  // Define state variables to hold company name and overview
  const [companyName, setCompanyName] = useState('');
  const [companyOverview, setCompanyOverview] = useState('');

  useEffect(() => {
    const fetchCompanyOverview = async () => {
      try {
        const q = query(collection(db, 'companies'), where('name', '==', company.name));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          setCompanyName(doc.data().name);
          setCompanyOverview(doc.data().companyOverview);
        });
      } catch (error) {
        console.error('Error fetching company overview:', error);
      }
    };

    fetchCompanyOverview();
  }, [company.name]); // Ensure useEffect runs whenever company name changes

  return (
    <ScrollView style={styles.screen}>
      <View style={styles.headerContainer}>
        {/* Company Logo */}
        <Image source={require('../assets/OIP.jpg')} style={styles.companyLogo} />

        {/* Company Name */}
        <Text style={styles.companyName}>{companyName}</Text>

        {/* Company Overview */}
        <Text style={styles.companyOverview}>{companyOverview}</Text>

        {/* Follower Count (if available) */}
        {/* You can add this part if you have follower count in your firestore */}
        {/* <Text style={styles.followerCount}>11,350 followers</Text> */}

        {/* Action Buttons (if needed) */}
        {/* You can add this part if you have action buttons */}
        {/* <View style={styles.actionButtons}>
                    <TouchableOpacity style={styles.followButton}>
                        <Text style={styles.followButtonText}>Following</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.visitButton}>
                        <Text style={styles.visitButtonText}>Visit website</Text>
                    </TouchableOpacity>
                </View> */}
      </View>
      <View style={styles.container}>
        <Text style={styles.header}>Latest Jobs - أحدث الوظائف</Text>
        {/* Render the list of jobs here */}
      </View>
    </ScrollView>
  );
};


const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerContainer: {
    alignItems: 'center',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  companyLogo: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  companyName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
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
    backgroundColor: '#4C9AFF',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  visitButtonText: {
    color: '#fff',
  },
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
