import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, Alert,
    KeyboardAvoidingView, SafeAreaView, StyleSheet, Dimensions} from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import { db, auth } from '../firebaseConfig';


const ApplyJobScreen = ({ navigation, route }) => {
    const { userId, jobId } = route.params; 

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

    const handleSubmit = async () => {
        try {
            // Upload CV file to storage (if selected)
            let selectedCVUrl = '';
            if (selectedCV) {
                const fileRef = storage.ref().child(`cv/${userId}/${selectedCV.name}`);
                await fileRef.put(selectedCV);
                selectedCVUrl = await fileRef.getDownloadURL();
            }

            // Construct job application data
            const formData = {
                userId,
                jobId,
                firstName,
                lastName,
                email,
                message,
                phoneNumber,
                currentResidence,
                currentJob,
                selectedCV: selectedCVUrl, // Store CV URL
            };

            // Add job application data to Firestore
            await db.collection('jobApplications').doc().set(formData);

            // Show success message
            Alert.alert('Application Submitted!', 'Your application has been submitted successfully.');

            // Reset form fields
            setFirstName('');
            setLastName('');
            setEmail('');
            setMessage('');
            setPhoneNumber('');
            setCurrentResidence('');
            setCurrentJob('');
            setSelectedCV(null);
        } catch (error) {
            console.error('Error submitting application:', error);
            Alert.alert('Error', 'Failed to submit application. Please try again later.');
        }
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
            >
        <ScrollView contentContainerStyle={styles.container}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.titleText}>Apply for a Job</Text>
                    </View>
            <View style={styles.formGroup}>
                <Text style={styles.label}>First Name *</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Input first name"
                    value={firstName}
                    onChangeText={setFirstName}
                />
            </View>

            <View style={styles.formGroup}>
                <Text style={styles.label}>Last Name *</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Input Last Name"
                    value={lastName}
                    onChangeText={setLastName}
                />
            </View>

            <View style={styles.formGroup}>
                <Text style={styles.label}>Email *</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Email address"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                />
            </View>

            <View style={styles.formGroup}>
                <Text style={styles.label}>Message *</Text>
                <TextInput
                    style={[styles.input, styles.multilineInput]}
                    placeholder="Input text"
                    value={message}
                    onChangeText={setMessage}
                    multiline
                />
            </View>

            <View style={styles.formGroup}>
                <Text style={styles.label}>Phone Number</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Input Last Name"
                    value={phoneNumber}
                    onChangeText={setPhoneNumber}
                    keyboardType="phone-pad"
                />
            </View>

            <View style={styles.formGroup}>
                <Text style={styles.label}>Current residence *</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Input text"
                    value={currentResidence}
                    onChangeText={setCurrentResidence}
                />
            </View>

            <View style={styles.formGroup}>
                <Text style={styles.label}>Current job</Text>
                <TextInput
                    style={styles.input}
                    placeholder="input text"
                    value={currentJob}
                    onChangeText={setCurrentJob}
                />
            </View>

            <TouchableOpacity style={styles.uploadButton} onPress={openDocumentPicker}>
                <Text style={styles.uploadButtonText}>Upload CV *</Text>
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
                    {isSubmitting ? 'Submitting...' : 'Send application'}
                </Text>
            </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()} 
                        style={styles.cancelButton}
                    >
                <Text style={styles.cancelButtonText}>Cancel</Text>
            </TouchableOpacity>
        </ScrollView>
        </KeyboardAvoidingView>
        </SafeAreaView>

    );
};

const styles = StyleSheet.create({
    titleContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        marginBottom: 20,
    },
    titleText: {
        fontSize: 24,
        fontWeight: 'bold',
    },

    container: {
        padding: 20,
        backgroundColor: 'white',
    },
    formGroup: {
        marginBottom: 16,
    },
    label: {
        fontSize: 16,
        fontWeight: '600',
        color: '#212121',
        marginBottom: 4,
    },
    input: {
        borderWidth: 1,
        borderColor: '#e0e0e0',
        borderRadius: 6,
        paddingVertical: 12,
        paddingHorizontal: 16,
        fontSize: 16,
        backgroundColor: '#f7f7f7',
        marginBottom: 8,
    },
    multilineInput: {
        minHeight: 100,
        textAlignVertical: 'top',
    }, 
    uploadButton: {
        borderWidth: 1,
        borderColor: '#e0e0e0',
        borderRadius: 6,
        padding: 12,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 16,
        backgroundColor: '#f7f7f7',
    },
    uploadButtonText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#212121',
    },
    selectedCVText: {
        fontSize: 16,
        color: '#757575',
        marginTop: 8,
    },
    submitButton: {
        backgroundColor: '#FFA500',
        borderRadius: 6,
        padding: 12,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 16,
    },
    submitButtonText: {
        fontSize: 16,
        fontWeight: '600',
        color: 'white',
    },
    cancelButton: {
        marginTop: 12, 
    },
    cancelButtonText: {
        fontSize: 16,
        color: '#9e9e9e', 
        textAlign: 'center',
    },
});


export default ApplyJobScreen;