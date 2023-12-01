import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    ScrollView,
    TouchableOpacity,
    Alert,
    StyleSheet,
} from 'react-native';
import * as DocumentPicker from 'expo-document-picker';

const ApplyJobScreen = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [currentResidence, setCurrentResidence] = useState('');
    const [currentJob, setCurrentJob] = useState('');
    const [selectedCV, setSelectedCV] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const openDocumentPicker = async () => {
        try {
            const result = await DocumentPicker.getDocumentAsync();
            if (result.type === 'success') {
                setSelectedCV(result);
            }
        } catch (err) {
            console.log('Error choosing file:', err);
        }
    };

    const handleSubmit = () => {
        const formData = {
            firstName,
            lastName,
            email,
            message,
            phoneNumber,
            currentResidence,
            currentJob,
            selectedCV,
        };

        // For demonstration purposes, show an alert with the submitted data
        Alert.alert('Form Submitted!', JSON.stringify(formData), [
            { text: 'OK', onPress: () => console.log('OK Pressed') },
        ]);
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.formGroup}>
                <Text style={styles.label}>First Name</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter your first name"
                    value={firstName}
                    onChangeText={(text) => setFirstName(text)}
                />
            </View>

            <View style={styles.formGroup}>
                <Text style={styles.label}>Last Name</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter your last name"
                    value={lastName}
                    onChangeText={(text) => setLastName(text)}
                />
            </View>

            <View style={styles.formGroup}>
                <Text style={styles.label}>Email Address</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter your email address"
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                    keyboardType="email-address"
                />
            </View>

            <View style={styles.formGroup}>
                <Text style={styles.label}>Message</Text>
                <TextInput
                    style={[styles.input, styles.multilineInput]}
                    placeholder="Enter your message"
                    value={message}
                    onChangeText={(text) => setMessage(text)}
                    multiline
                />
            </View>

            <View style={styles.formGroup}>
                <Text style={styles.label}>Phone Number</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter your phone number"
                    value={phoneNumber}
                    onChangeText={(text) => setPhoneNumber(text)}
                    keyboardType="phone-pad"
                />
            </View>

            <View style={styles.formGroup}>
                <Text style={styles.label}>Current Residence</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter your current residence"
                    value={currentResidence}
                    onChangeText={(text) => setCurrentResidence(text)}
                />
            </View>

            <View style={styles.formGroup}>
                <Text style={styles.label}>Current Job</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter your current job"
                    value={currentJob}
                    onChangeText={(text) => setCurrentJob(text)}
                />
            </View>

            <TouchableOpacity style={styles.uploadButton} onPress={openDocumentPicker}>
                <Text style={styles.uploadButtonText}>Upload CV</Text>
            </TouchableOpacity>

            {selectedCV && (
                <Text style={styles.selectedCVText}>Selected CV: {selectedCV.name}</Text>
            )}

            <TouchableOpacity
                style={styles.submitButton}
                onPress={() => {
                    setIsSubmitting(true);
                    handleSubmit();
                    setIsSubmitting(false);
                }}
                disabled={isSubmitting}
            >
                <Text style={styles.submitButtonText}>
                    {isSubmitting ? 'Submitting...' : 'Submit Application'}
                </Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    formGroup: {
        marginBottom: 20,
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
        color: '#3498db', // Add a hint of color to labels
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        fontSize: 16,
    },
    multilineInput: {
        height: 100,
    },
    uploadButton: {
        backgroundColor: '#3498db',
        borderRadius: 5,
        padding: 15,
        alignItems: 'center',
        marginTop: 10,
    },
    uploadButtonText: {
        color: 'white',
        fontSize: 16,
    },
    selectedCVText: {
        marginTop: 10,
        fontSize: 16,
        color: '#2ecc71', // Add a hint of color to indicate success
    },
    submitButton: {
        backgroundColor: '#2ecc71',
        borderRadius: 5,
        padding: 15,
        alignItems: 'center',
        marginTop: 20,
    },
    submitButtonText: {
        color: 'white',
        fontSize: 16,
    },
});

export default ApplyJobScreen;
