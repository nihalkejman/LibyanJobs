import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    // Common styles for both screens
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: windowWidth * 0.8,
        height: windowWidth * 0.8 * (0.3 / 0.8),
        marginBottom: windowHeight * 0.02,
        marginTop: windowHeight * 0.05,
    },
    text: {
        fontSize: windowWidth * 0.06,
        textAlign: 'center',
    },

    // Common styles for buttons
    buttonContainer: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: windowHeight * 0.05,
    },
    buttonText: {
        color: 'black',
        fontSize: windowWidth * 0.04,
    },

    // Button style for HomeScreen
    signInButton: {
        backgroundColor: 'white',
        borderColor: '#FFA500',
        borderWidth: 2,
        padding: windowHeight * 0.02,
        width: windowWidth * 0.6,
        alignItems: 'center',
        borderRadius: windowWidth * 0.06,
        marginBottom: windowHeight * 0.01,
    },
    signUpButton: {
        backgroundColor: '#FFA500',
        padding: windowHeight * 0.02,
        width: windowWidth * 0.6,
        alignItems: 'center',
        borderRadius: windowWidth * 0.06,
    },

    //------------------------------------- SIGN IN SCREEN ----------------------------------------------------
    signInContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    greetingText: {
        fontSize: windowWidth * 0.06,
    },
    inputContainer: {
        width: windowWidth * 0.8,
    },
    inputField: {
        height: windowHeight * 0.05,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: windowHeight * 0.02,
        padding: windowHeight * 0.01,
    },
    forgotPasswordText: {
        color: 'blue',
        textDecorationLine: 'underline',
        textAlign: 'right',
        marginBottom: 40, // Add space below "Forgot Password" text
    },

    // Button style for SignInScreen
    signInButtonSignInScreen: {
        backgroundColor: 'yellow',
        borderColor: '#FFA500',
        borderWidth: 2,
        padding: windowHeight * 0.02,
        width: windowWidth * 0.6,
        alignItems: 'center',
        borderRadius: windowWidth * 0.06,
        marginBottom: windowHeight * 0.01,
    },
    signInButtonText: {
        color: 'black',
        fontSize: windowWidth * 0.04,
    },

    // Additional styles for SignInScreen
    signInButtonContainer: {
        alignItems: 'center',
        marginBottom: 30, // Move the button down and add space below
    },
    signInWithText: {
        fontSize: windowWidth * 0.04,
        color: 'black',
        marginBottom: 20, // Add space below the text
        marginTop:20,
    },
    linkedInLogoButton: {
        width: 40,
        height: 40,
        backgroundColor: 'white',
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: windowWidth * 0.06,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 30,
    },
    linkedInLogo: {
        width: 30,
        height: 30,
    }
});

export default styles;

