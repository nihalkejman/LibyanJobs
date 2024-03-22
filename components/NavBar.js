import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation, useRoute } from '@react-navigation/native';

const NavBar = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const navigateToScreen = (screenName) => {
    if (screenName === 'Notifications') {
      navigation.navigate('NotificationScreen');
    } else if (screenName === 'Settings') {
      navigation.navigate('Setting');
    } else {
      navigation.navigate('JobScreen');
    }
  };

  const navItems = [
    { name: 'Home', icon: 'home' },
    { name: 'Jobs', icon: 'work' },
    { name: 'Notifications', icon: 'notifications' },
    { name: 'Settings', icon: 'settings' },
  ];

  return (
    <View style={styles.container}>
      {navItems.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.navItem,
            route.name === item.name && styles.activeNavItem,
          ]}
          onPress={() => navigateToScreen(item.name)}
        >
          <Icon name={item.icon} size={24} color={route.name === item.name ? '#555' : '#999'} />
          <Text style={[styles.navLabel, route.name === item.name && styles.activeNavLabel]}>
            {item.name}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 60, 
    backgroundColor: '#fff',
    borderTopWidth: 1, 
    borderTopColor: '#eee', 
    marginTop: -20, 
  },
  navItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10, 
  },
  activeNavItem: {
   
  },
  navLabel: {
    fontSize: 10, 
    color: 'gray', 
    paddingTop: 2, 
  },
  activeNavLabel: {
    color: 'blue', 
    fontWeight: 'bold', 
  },
});

export default NavBar;
