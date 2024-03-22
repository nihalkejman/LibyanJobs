import React, { useState } from 'react';
import { StyleSheet, View, ScrollView, KeyboardAvoidingView, Platform, TouchableOpacity, Text } from 'react-native';
import { Input, Button, SocialIcon } from 'react-native-elements';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore"; // Add this import
import { auth } from '../firebaseConfig';

export default function SignUpScreen({ navigation }) {
    // State variables to hold user input and error message
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [displayName, setDisplayName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [error, setError] = useState(null);

    // Function to handle user sign-up
    const handleSignUp = async () => {
        try {
            // Create user with email and password
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            // Signed up successfully
            const user = userCredential.user;

            // Store user data in Firestore
            const db = getFirestore();
            await addDoc(collection(db, 'users'), {
                uid: user.uid,
                displayName: displayName,
                email: user.email,
                firstName: firstName,
                lastName: lastName,
                username: username,
                createdAt: new Date()
            });

            // Perform any necessary actions (e.g., navigate to a new screen)
            navigation.navigate('JobScreen');
        } catch (error) {
            // An error occurred during sign-up
            const errorCode = error.code;
            const errorMessage = error.message;
            // Handle error (e.g., display error message to user)
            setError(errorMessage);
        }
    };

    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <Text style={styles.header}>Sign up</Text>
                <SocialIcon
                    title='LinkedIn'
                    button
                    type='linkedin'
                    style={styles.socialButton}
                    iconSize={24}
                    onPress={() => { }}
                />
                <Input
                    placeholder='Display Name'
                    value={displayName}
                    onChangeText={setDisplayName}
                    inputContainerStyle={styles.inputContainer}
                    inputStyle={styles.input}
                    leftIcon={{ type: 'material-community', name: 'account-circle-outline', color: 'grey' }}
                />
                <Input
                    placeholder='First Name'
                    value={firstName}
                    onChangeText={setFirstName}
                    inputContainerStyle={styles.inputContainer}
                    inputStyle={styles.input}
                    leftIcon={{ type: 'material-community', name: 'account-outline', color: 'grey' }}
                />
                <Input
                    placeholder='Last Name'
                    value={lastName}
                    onChangeText={setLastName}
                    inputContainerStyle={styles.inputContainer}
                    inputStyle={styles.input}
                    leftIcon={{ type: 'material-community', name: 'account-outline', color: 'grey' }}
                />
                <Input
                    placeholder='Username'
                    value={username}
                    onChangeText={setUsername}
                    inputContainerStyle={styles.inputContainer}
                    inputStyle={styles.input}
                    leftIcon={{ type: 'material-community', name: 'account-outline', color: 'grey' }}
                />
                <Input
                    placeholder='Email'
                    value={email}
                    onChangeText={setEmail}
                    inputContainerStyle={styles.inputContainer}
                    inputStyle={styles.input}
                    leftIcon={{ type: 'material-community', name: 'email-outline', color: 'grey' }}
                />
                <Input
                    placeholder='Password'
                    value={password}
                    onChangeText={setPassword}
                    inputContainerStyle={styles.inputContainer}
                    inputStyle={styles.input}
                    secureTextEntry={true}
                    leftIcon={{ type: 'material-community', name: 'lock-outline', color: 'grey' }}
                />
                {error && <Text style={styles.errorText}>{error}</Text>}
                <Button
                    title="Sign Up"
                    buttonStyle={styles.signUpButton}
                    titleStyle={styles.buttonTitle}
                    onPress={handleSignUp}
                />
                <TouchableOpacity style={styles.loginTextContainer} onPress={() => navigation.navigate('SignIn')}>
                    <Text style={styles.loginText}>Already have an account?</Text>
                    <Text style={styles.loginLink}>Login Now</Text>
                </TouchableOpacity>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    scrollContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        padding: 20,
    },
    header: {
        fontSize: 26,
        fontWeight: 'bold',
        marginBottom: 20,
        color: 'black',
        alignSelf: 'center',
    },
    inputContainer: {
        borderWidth: 1,
        borderColor: '#D3D3D3',
        borderRadius: 5,
        paddingLeft: 5,
        paddingRight: 5,
        marginTop: 10,
    },
    input: {
        marginLeft: 10,
    },
    socialButton: {
        width: '100%',
        borderRadius: 5,
    },
    signUpButton: {
        backgroundColor: '#FFA500',
        borderRadius: 5,
        height: 50,
        marginTop: 20,
    },
    buttonTitle: {
        fontWeight: 'bold',
    },
    loginTextContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
    },
    loginText: {
        color: 'grey',
    },
    loginLink: {
        fontWeight: 'bold',
        color: '#FFA500',
    },
});

