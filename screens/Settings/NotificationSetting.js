import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, Button, Alert} from 'react-native';

const NotificationSetting = ({navigation, route}) => {
  const [allowJobSuggestions, setAllowJobSuggestions] = useState(true);
  const [jobSuggestions, setJobSuggestions] = useState(true);
  const [savedJobs, setSavedJobs] = useState(true);
  const [recommendedJobs, setRecommendedJobs] = useState(true);
  const [careerGuidance, setCareerGuidance] = useState(true);

  const handleSaveChanges = () => {
    // Show confirmation dialog
    Alert.alert(
      'Save Changes',
      'Are you sure you want to save changes?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Yes',
          onPress: () => {
            // Log notification changes
            console.log('Notification changes saved:', {
              allowJobSuggestions,
              jobSuggestions,
              savedJobs,
              recommendedJobs,
              careerGuidance,
            });
            // Navigate to JobScreen
            navigation.navigate('JobScreen');
          },
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Notification Preferences</Text>
        <View style={styles.switchContainer}>
          <Text style={styles.switchText}>Receive Job Suggestions</Text>
          <Switch
            value={allowJobSuggestions}
            onValueChange={(value) => setAllowJobSuggestions(value)}
            trackColor={{ false: "#ccc", true: "#FFA500" }}
            thumbColor={allowJobSuggestions ? "#FFA500" : "#f4f3f4"}
          />
        </View>
        <View style={styles.switchContainer}>
          <Text style={styles.switchText}>Job Suggestion Notifications</Text>
          <Switch
            value={jobSuggestions}
            onValueChange={(value) => setJobSuggestions(value)}
            trackColor={{ false: "#ccc", true: "#FFA500" }}
            thumbColor={jobSuggestions ? "#FFA500" : "#f4f3f4"}
          />
        </View>
        <View style={styles.switchContainer}>
          <Text style={styles.switchText}>Saved Jobs Notifications</Text>
          <Switch
            value={savedJobs}
            onValueChange={(value) => setSavedJobs(value)}
            trackColor={{ false: "#ccc", true: "#FFA500" }}
            thumbColor={savedJobs ? "#FFA500" : "#f4f3f4"}
          />
        </View>
        <View style={styles.switchContainer}>
          <Text style={styles.switchText}>Recommended Jobs Notifications</Text>
          <Switch
            value={recommendedJobs}
            onValueChange={(value) => setRecommendedJobs(value)}
            trackColor={{ false: "#ccc", true: "#FFA500" }}
            thumbColor={recommendedJobs ? "#FFA500" : "#f4f3f4"}
          />
        </View>
        <View style={styles.switchContainer}>
          <Text style={styles.switchText}>Career Guidance Notifications</Text>
          <Switch
            value={careerGuidance}
            onValueChange={(value) => setCareerGuidance(value)}
            trackColor={{ false: "#ccc", true: "#FFA500" }}
            thumbColor={careerGuidance ? "#FFA500" : "#f4f3f4"}
          />
        </View>
      </View>

      <Button title="Save Changes" onPress={handleSaveChanges} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff', // White background
  },
  section: {
    marginBottom: 20,
    backgroundColor: '#f9f9f9', // Light gray background
    borderRadius: 10,
    padding: 15,
  },
  sectionHeader: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#FFA500', // Orange color for section header
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  switchText: {
    flex: 1,
    fontSize: 16,
    color: '#555', // Dark color for switch text
  },
});

export default NotificationSetting;



