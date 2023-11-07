import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import CompanyLogo from './assets/OIP.jpg';
import styles from './styles';
//import { Dropdown } from 'react-native-material-dropdown';

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Image source={CompanyLogo} style={styles.logo} resizeMode="contain" />
            <Text style={styles.text}>Find your dream job today</Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.signInButton}
                    onPress={() => navigation.navigate('SignIn')}
                >
                    <Text style={styles.buttonText}>Sign In</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.signUpButton} onPress={() => navigation.navigate('SignUpScreen')}
>
                    <Text style={styles.buttonText}>Sign Up</Text>

                </TouchableOpacity>
            </View>
        </View>
    );
}