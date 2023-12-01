import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SplashScreen from './screens/SplashScreen';
import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';
import Job from './screens/Job';
import JobProfile from './screens/JobProfileScreen.js';
import JobCompany from './screens/JobCompany';
import Setting from './screens/Setting';
import AccountSetting from './AccountSetting';
import SecuritySetting from './screens/SecuritySetting';
import NotificationSetting from './screens/NotificationSetting';
import JobScreen from './screens/JobScreen';
import SavedJobsScreen from './screens/SavedJobsScreen';
import HeaderJobs from './components/HeaderJobs.js';
import ApplyJobScreen from './screens/ApplyJobScreen';
import Icon from 'react-native-ico-material-design';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function AppTabs() {
  return (
    <Tab.Navigator
      initialRouteName='Job'
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        tabBarActiveTintColor: 'black',
      })}
    >
      <Tab.Screen name="Job" component={Job} />
      <Tab.Screen name="Setting" component={SettingStack} />
    </Tab.Navigator>
  );
}

function SettingStack() {
  return (
    <Stack.Navigator initialRouteName="Setting" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Setting" component={Setting} />
      <Stack.Screen name="AccountSetting" component={AccountSetting} />
      <Stack.Screen name="SecuritySetting" component={SecuritySetting} />
      <Stack.Screen name="NotificationSetting" component={NotificationSetting} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="AppTabs" component={AppTabs} />
        <Stack.Screen name="JobProfile" component={JobProfile} />
        <Stack.Screen name="JobCompany" component={JobCompany} />
        <Stack.Screen name="JobScreen" component={JobScreen} options={{ title: 'JobScreen' }} />
        <Stack.Screen name="SavedJobsScreen" component={SavedJobsScreen} options={{ title: 'SavedJobsScreen' }} />
        <Stack.Screen name="ApplyJobScreen" component={ApplyJobScreen} options={{ title: 'ApplyJobScreen' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

//cd "C:\Users\nihal\OneDrive - Northumbria University - Production Azure AD\Documents\Year 3\final year project\libyanJobs\LibyanJobsProject"

