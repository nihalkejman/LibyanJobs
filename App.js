import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './SplashScreen'; //  SplashScreen 
import SignInScreen from './SignInScreen';
import SignUpScreen from './SignUpScreen';
import Job from './Job';
import JobProfile from './JobProfile';
import JobCompany from './JobCompany';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ title: 'SplashScreen' }} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="Job" component={Job} />
        <Stack.Screen name="JobProfile" component={JobProfile} />
        <Stack.Screen name="JobCompany" component={JobCompany} />


      </Stack.Navigator>
    </NavigationContainer>
  );
}
//cd "C:\Users\nihal\OneDrive - Northumbria University - Production Azure AD\Documents\Year 3\final year project\libyanJobs\LibyanJobsProject"

