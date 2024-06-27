import React, { useState } from 'react';
import { View, Text, Pressable, TextInput, StyleSheet, Platform, ScrollView, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import * as DocumentPicker from 'expo-document-picker';

const AccountScreen = ({ route, navigation }) => {
  const onUpdateName = route.params?.onUpdateName;  // Retrieve onUpdateName from route.params
  const [name, setName] = useState('John Doe');
  const [location, setLocation] = useState('City');
  const [language, setLanguage] = useState('English');
  const [resume, setResume] = useState(null);
  const [newName, setNewName] = useState('');

  const handleSaveChanges = () => {
    Alert.alert(
      'Confirm Changes',
      'Are you sure you want to save the changes?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Save',
          onPress: () => {
            if (onUpdateName) {  // Check if onUpdateName is defined
              onUpdateName(newName);
            }
            navigation.navigate('JobScreen', { updatedName: newName });
          },
        },
      ],
    );
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
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.container}>
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>Profile Information</Text>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Name:</Text>
            <TextInput
              style={styles.input}
              value={newName}
              onChangeText={setNewName}
              placeholder="Enter your name"
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Location:</Text>
            <Picker
              style={styles.picker}
              selectedValue={location}
              onValueChange={(itemValue) => setLocation(itemValue)}
            >
              <Picker.Item label="City" value="City" />
            </Picker>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionHeader}>General</Text>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Language:</Text>
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
            <Text style={styles.label}>Resume Upload:</Text>
            <Pressable style={styles.button} onPress={handleChooseFile}>
              <Text style={styles.buttonText}>Choose File</Text>
            </Pressable>
            {resume && <Text style={styles.fileText}>File selected: {resume}</Text>}
          </View>
        </View>

        <Pressable style={styles.saveButton} onPress={handleSaveChanges}>
          <Text style={styles.buttonText}>Save Changes</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
  },
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
  label: {
    width: 100,
    fontWeight: 'bold',
    marginRight: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingVertical: Platform.OS === 'ios' ? 12 : 8,
    paddingHorizontal: 10,
  },
  picker: {
    flex: 1,
    ...Platform.select({
      ios: {},
      android: {
        height: 50,
      },
    }),
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFA500', // Change to orange color
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 5,
    elevation: 3,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  fileText: {
    marginTop: 5,
    color: '#555',
  },
  saveButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFA500', // Change to orange color
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 5,
    elevation: 3,
    marginTop: 20, // Adjusted margin for better visibility
  },
});

export default AccountScreen;



