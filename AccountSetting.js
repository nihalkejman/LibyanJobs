import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button, Picker } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';

const AccountScreen = () => {
  const [name, setName] = useState('John Doe');
  const [location, setLocation] = useState('City'); // Change this to a list of locations if needed
  const [language, setLanguage] = useState('English');
  const [resume, setResume] = useState(null);

  const handleSaveChanges = () => {
    // Implement logic to save changes to the backend or local storage
    console.log('Changes saved:', { name, location, language, resume });
  };

  const handleChooseFile = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync();
      if (result.type === 'success') {
        setResume(result.uri);
      }
    } catch (err) {
      console.log('Error choosing file:', err);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Profile Information</Text>
        <View style={styles.inputContainer}>
          <Text>Name:</Text>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={(text) => setName(text)}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text>Location:</Text>
          <Picker
            style={styles.picker}
            selectedValue={location}
            onValueChange={(itemValue) => setLocation(itemValue)}
          >
            <Picker.Item label="City" value="City" />
            {/* Add other location options */}
          </Picker>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeader}>General</Text>
        <View style={styles.inputContainer}>
          <Text>Language:</Text>
          <Picker
            style={styles.picker}
            selectedValue={language}
            onValueChange={(itemValue) => setLanguage(itemValue)}
          >
            <Picker.Item label="English" value="English" />
            <Picker.Item label="Arabic" value="Arabic" />
          </Picker>
        </View>
        <View style={styles.inputContainer}>
          <Text>Resume Upload:</Text>
          <Button title="Choose File" onPress={handleChooseFile} />
          {resume && <Text>File selected: {resume}</Text>}
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
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    borderWidth: 1,
    padding: 8,
  },
  picker: {
    flex: 1,
  },
});

export default AccountScreen;

