import React, { useState } from 'react';
import { View, Text, Pressable, TextInput, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import * as DocumentPicker from 'expo-document-picker';

const AccountScreen = ({ onUpdateName, navigation }) => {
  const [name, setName] = useState('John Doe');
  const [location, setLocation] = useState('City');
  const [language, setLanguage] = useState('English');
  const [resume, setResume] = useState(null);
  const [newName, setNewName] = useState('');

  const handleSaveChanges = () => {
    onUpdateName(newName);
    navigation.navigate('JobScreen', { updatedName: newName });
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
          {resume && <Text>File selected: {resume}</Text>}
        </View>
      </View>

      <Pressable style={styles.saveButton} onPress={handleSaveChanges}>
        <Text style={styles.buttonText}>Save Changes</Text>
      </Pressable>
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
  label: {
    width: 100,
    fontWeight: 'bold',
  },
  input: {
    flex: 1,
    marginLeft: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 8,
  },
  picker: {
    flex: 1,
    marginLeft: 10,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 5,
    elevation: 3,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  saveButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#28a745',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 5,
    elevation: 3,
  },
});

export default AccountScreen;

