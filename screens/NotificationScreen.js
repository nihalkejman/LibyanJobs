import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert, StatusBar } from 'react-native';
import NavBar from '../components/NavBar';

const NotificationScreen = () => {
    const [notifications, setNotifications] = useState([
        { id: '1', text: 'New job alert: Software Engineer position' },
        { id: '2', text: 'Reminder: Your application for XYZ Company' },
        { id: '3', text: 'Congratulations! You have been selected for an interview' },
        { id: '4', text: 'Reminder: Complete your profile for better job matches' },
        { id: '5', text: 'New job alert: Data Analyst position' },
        { id: '6', text: 'Reminder: Attend the career fair tomorrow' },
        { id: '7', text: 'Your job application has been approved' },
        { id: '8', text: 'New job alert: Frontend Developer position' },
        { id: '9', text: 'Reminder: Follow up on your job application status' },
        { id: '10', text: 'New job alert: Marketing Manager position' },
    ]);

    const deleteNotification = (id) => {
        Alert.alert(
            'Delete Notification',
            'Are you sure you want to delete this notification?',
            [
                {
                    text: 'Cancel',
                    style: 'cancel',
                },
                {
                    text: 'Delete',
                    onPress: () => {
                        const updatedNotifications = notifications.filter((item) => item.id !== id);
                        setNotifications(updatedNotifications);
                    },
                },
            ],
            { cancelable: false }
        );
    };

    const renderNotificationItem = ({ item }) => (
        <View style={styles.notificationItem}>
            <Text style={styles.notificationText}>{item.text}</Text>
            <TouchableOpacity onPress={() => deleteNotification(item.id)}>
                <Text style={styles.deleteButton}>Delete</Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
            <View style={styles.contentContainer}>
                <Text style={styles.title}>Notifications</Text>
                <FlatList
                    data={notifications}
                    keyExtractor={(item) => item.id}
                    renderItem={renderNotificationItem}
                    showsVerticalScrollIndicator={false}
                />
            </View>
            <NavBar />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        paddingTop: StatusBar.currentHeight + 50, // Add padding for the status bar
    },
    contentContainer: {
        flex: 1,
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333333',
        marginBottom: 20,
    },
    notificationItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
        paddingVertical: 15,
    },
    notificationText: {
        flex: 1,
        fontSize: 16,
        color: '#555555',
    },
    deleteButton: {
        color: '#ff0000',
        marginLeft: 10,
    },
});

export default NotificationScreen;
