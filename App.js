import React from 'react';
// import 'react-native-gesture-handler';
import { Platform } from 'react-native';
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
import AccountSetting from './screens/Settings/AccountSetting.js'; 
import SecuritySetting from './screens/Settings/SecuritySetting.js';
import NotificationSetting from './screens/Settings/NotificationSetting.js';
import JobScreen from './screens/JobScreen';
import SavedJobsScreen from './screens/SavedJobsScreen';
import ApplyJobScreen from './screens/ApplyJobScreen';
import Icon from 'react-native-vector-icons/MaterialIcons';
import NotificationScreen from './screens/NotificationScreen'; //
import DataprivacySetting from './screens/Settings/DataprivacySetting.js';
import PackagesSetting from './screens/Settings/PackagesSetting.js';
import HelpCentreSettings from './screens/Settings/HelpCentreSettings.js';
import PrivacyPolicySetting from './screens/Settings/PrivacyPolicySetting.js';
import JobProfileScreen from './screens/Job';
import MoreLatestJobs from './screens/MoreLatestJobs.js';
import MoreFeaturedJobs from './screens/MoreFeaturedJobs.js';
import HeaderJobs from './components/HeaderJobs.js';
import AboutTheApp from './screens/Settings/AboutTheApp.js';
//
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// updateUserName function
const updateUserName = (newName) => {
  //  update the user's name
  console.log('Updating user name to:', newName);
};

export default function App() {
  // useEffect(() => {
  //   const fetchJobs = async () => {
  //     const querySnapshot = await jobCollection.get(); 
  //     querySnapshot.forEach((doc) => {
  //       console.log(doc.id, ' => ', doc.data());
  //     });
  //   };

  //   fetchJobs();
  // }, []);
  // function AppTabs() {
  //   return (
  //     <Tab.Navigator
  //       initialRouteName='Job'
  //       screenOptions={({ route }) => ({   
  //         tabBarShowLabel: false,
  //         tabBarActiveTintColor: 'black',
  //       })}
  //     >
  //       <Tab.Screen name="Job" component={Job} />
  //       <Tab.Screen name="Setting" component={SettingStack} />
  //     </Tab.Navigator>
  //   );
  // }

  function SettingStack() {
    return (
      <Stack.Navigator initialRouteName="Setting" screenOptions={{ headerShown: true }}>
        <Stack.Screen name="Setting" component={Setting} headerShown={false} />
        <Stack.Screen name="AccountSetting" options={{ title: 'AccountSetting' }}>
          {props => <AccountSetting {...props} onUpdateName={updateUserName} />}
        </Stack.Screen>
        <Stack.Screen name="SecuritySetting" component={SecuritySetting} options={{ title: 'SecuritySetting' }} />
        <Stack.Screen name="NotificationSetting" component={NotificationSetting} options={{ title: 'NotificationSetting' }} />
        <Stack.Screen name="DataprivacySetting" component={DataprivacySetting} options={{ title: 'DataprivacySetting' }}  />
        <Stack.Screen name="PackagesSetting" component={PackagesSetting} options={{ title: 'PackagesSetting' }} />
        <Stack.Screen name="HelpCentreSettings" component={HelpCentreSettings} options={{ title: 'HelpCentreSettings' }} />
        <Stack.Screen name="PrivacyPolicySetting" component={PrivacyPolicySetting} options={{ title: 'PrivacyPolicySetting' }} />
        <Stack.Screen name="AboutTheApp" component={AboutTheApp} options={{ title: 'AboutTheApp' }} />
      </Stack.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen" screenOptions={{ headerShown: true }}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="JobProfile" component={JobProfile} />
        <Stack.Screen name="JobCompany" component={JobCompany} />
        <Stack.Screen name="JobScreen" options={{ title: 'JobScreen' }}>
          {props => <JobScreen {...props} onUpdateName={updateUserName} />}
        </Stack.Screen>
        <Stack.Screen name="SavedJobsScreen" component={SavedJobsScreen} options={{ title: 'SavedJobsScreen' }} />
        <Stack.Screen name="ApplyJobScreen" component={ApplyJobScreen} options={{ title: 'ApplyJobScreen' }} />
        <Stack.Screen name="Setting" component={SettingStack} options={{ title: 'Setting' }} />
        <Stack.Screen name="NotificationScreen" component={NotificationScreen} />
        <Stack.Screen name="JobProfileScreen" component={JobProfileScreen} />
        <Stack.Screen name="MoreLatestJobs" component={MoreLatestJobs} />
        <Stack.Screen name="MoreFeaturedJobs" component={MoreFeaturedJobs} />
        <Stack.Screen name="AccountSetting" component={AccountSetting} />
        <Stack.Screen name="HeaderJobs" component={HeaderJobs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
   





//cd "C:\Users\nihal\OneDrive - Northumbria University - Production Azure AD\Documents\Year 3\final year project\libyanJobs\LibyanJobsProject"

