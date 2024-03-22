import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, Button} from 'react-native';

const NotificationSetting = () => {
  const [allowJobSuggestions, setAllowJobSuggestions] = useState(true);
  const [jobSuggestions, setJobSuggestions] = useState(true);
  const [savedJobs, setSavedJobs] = useState(true);
  const [recommendedJobs, setRecommendedJobs] = useState(true);//
  const [careerGuidance, setCareerGuidance] = useState(true);

  const handleSaveChanges = () => {
    console.log('Notification changes saved:', {
      allowJobSuggestions,
      jobSuggestions,
      savedJobs,
      recommendedJobs,
      careerGuidance,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Allow Job Suggestions Notifications</Text>
        <Switch
          value={allowJobSuggestions}
          onValueChange={(value) => setAllowJobSuggestions(value)}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Notification Preferences</Text>
        <View style={styles.switchContainer}>
          <Text>Job Suggestions</Text>
          <Switch
            value={jobSuggestions}
            onValueChange={(value) => setJobSuggestions(value)}
          />
        </View>
        <View style={styles.switchContainer}>
          <Text>Saved Jobs</Text>
          <Switch value={savedJobs} onValueChange={(value) => setSavedJobs(value)} />
        </View>
        <View style={styles.switchContainer}>
          <Text>Recommended Job Opportunities</Text>
          <Switch
            value={recommendedJobs}
            onValueChange={(value) => setRecommendedJobs(value)}
          />
        </View>
        <View style={styles.switchContainer}>
          <Text>Guidance for Your Career</Text>
          <Switch
            value={careerGuidance}
            onValueChange={(value) => setCareerGuidance(value)}
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
  },
  section: {
    marginBottom: 20,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default NotificationSetting;
