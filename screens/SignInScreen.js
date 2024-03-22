import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { Input, Button, SocialIcon } from 'react-native-elements';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebaseConfig';

export default function SignInScreen({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSignIn = async () => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            // Signed in successfully, navigate to the next screen
            navigation.navigate('JobScreen');
        } catch (error) {
            // Handle sign-in errors
            setError(error.message);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Hello.</Text>
            <Text style={styles.subHeader}>Welcome back</Text>
            <Input
                placeholder='Email'
                value={email}
                onChangeText={setEmail}
                inputContainerStyle={styles.inputContainer}
                inputStyle={styles.input}
                leftIcon={{ type: 'font-awesome', name: 'envelope', color: 'grey' }}
            />
            <Input
                placeholder='Password'
                value={password}
                onChangeText={setPassword}
                inputContainerStyle={styles.inputContainer}
                inputStyle={styles.input}
                secureTextEntry={true}
                leftIcon={{ type: 'font-awesome', name: 'lock', color: 'grey' }}
            />
            {error ? <Text style={styles.errorText}>{error}</Text> : null}
            <TouchableOpacity>
                <Text style={styles.forgotPassword}>Forgot password?</Text>
            </TouchableOpacity>
            <Button
                title="Sign In"
                buttonStyle={styles.signInButton}
                titleStyle={styles.buttonTitle}
                onPress={handleSignIn}
            />

            <Text style={styles.orText}>OR CONTINUE WITH</Text>
            <SocialIcon
                title='LinkedIn'
                button
                type='linkedin'
                style={styles.socialButton}
                iconSize={18}
                onPress={() => { }}
            />
            <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')}>
                <Text style={[styles.signUpText, styles.signUpButton]}>Don't have an account? <Text style={{ color: '#FFA500', fontWeight: 'bold' }}>Sign up</Text></Text>
            </TouchableOpacity>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: 'white',
    },
    header: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 10,
        color: 'black',
        textAlign: 'left',
    },
    subHeader: {
        fontSize: 24,
        fontWeight: 'normal',
        marginBottom: 30,
        color: 'black',
        textAlign: 'left',
    },
    inputContainer: {
        borderBottomWidth: 1,
        borderBottomColor: '#D3D3D3',
    },
    input: {
        marginLeft: 10,
    },
    forgotPassword: {
        alignSelf: 'flex-end',
        marginVertical: 15,
        color: 'grey',
    },
    signInButton: {
        backgroundColor: '#FFA500',
        borderRadius: 10,
        height: 50,
        marginBottom: 20,
    },
    buttonTitle: {
        fontWeight: 'bold',
    },
    orText: {
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 20,
        color: 'grey',
    },
    socialButton: {
        height: 50,
        borderRadius: 10,
    },
    signUpText: {
        color: 'grey',
        textAlign: 'center',
        marginTop: 20,
    },
    signUpButton: {
        backgroundColor: 'transparent',
    },
});
