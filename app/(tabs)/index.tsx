import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';
import * as Notifications from 'expo-notifications';
import { Button, Card } from 'react-native-paper';

// Required so notifications show when app is open
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

export default function WebViewScreen() {
  useEffect(() => {
    // Ask permission
    Notifications.requestPermissionsAsync();

    // Android notification channel (REQUIRED)
    Notifications.setNotificationChannelAsync('default', {
      name: 'Default',
      importance: Notifications.AndroidImportance.HIGH,
    });
  }, []);

  const sendNotification = async (title: string, body: string) => {
    await Notifications.scheduleNotificationAsync({
      content: {
        title,
        body,
      },
      trigger: {
        seconds: 3,          // 2–5 sec delay ✔
        channelId: 'default', // Android required ✔
      },
    });
  };

  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: 'https://expo.dev' }}
        style={styles.webview}
        onLoadEnd={() =>
          sendNotification(
            'WebView Loaded',
            'Website finished loading'
          )
        }
      />

      <Card style={styles.card}>
        <Button
          mode="contained"
          onPress={() =>
            sendNotification('Hello 👋', 'This is Notification One')
          }
        >
          Notification 1
        </Button>

        <Button
          mode="outlined"
          style={{ marginTop: 10 }}
          onPress={() =>
            sendNotification('Reminder ⏰', 'This is Notification Two')
          }
        >
          Notification 2
        </Button>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  webview: { flex: 1 },
  card: { padding: 15 },
});
