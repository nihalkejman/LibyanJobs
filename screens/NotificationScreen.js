import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert } from 'react-native';
import NavBar from '../components/NavBar';

const NotificationScreen = () => {
    const [notifications, setNotifications] = useState([
        { id: '1', text: 'New job alert: Software Engineer position' },
        { id: '2', text: 'Reminder: Your application for XYZ Company' },
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
        justifyContent: 'space-between',
    },
    contentContainer: {
        flex: 1,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#333333',
        paddingLeft: 20,
    },
    notificationItem: {
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
        paddingVertical: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
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
