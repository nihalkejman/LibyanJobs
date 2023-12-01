import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CompanyProfileScreen = () => {
  const companyData = {
    name: 'ABC Tech Solutions',
    location: 'New York, NY',
    description: 'We are a leading tech company specializing in software development and innovative solutions.',
  };

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{companyData.name}</Text>
      <Text style={styles.location}>{companyData.location}</Text>
      <Text style={styles.description}>{companyData.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  location: {
    fontSize: 18,
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
  },
});

export default CompanyProfileScreen;
