import * as Notifications from "expo-notifications";
import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button, Card } from "react-native-paper";
import { WebView } from "react-native-webview";

// Required so notifications show when app is open
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
    shouldShowBanner: true,
    shouldShowList: true,
  }),
});

export default function WebViewScreen() {
  const [webviewNotified, setWebviewNotified] = useState(false); // ✅ Track notification

  useEffect(() => {
    Notifications.requestPermissionsAsync();
    Notifications.setNotificationChannelAsync("default", {
      name: "Default",
      importance: Notifications.AndroidImportance.HIGH,
    });
  }, []);

  const sendNotification = async (title: string, body: string) => {
    await Notifications.scheduleNotificationAsync({
      content: { title, body },
      trigger: {
        seconds: 3,
        channelId: "default",
      },
    });
  };

  const handleWebViewLoad = () => {
    if (!webviewNotified) {
      sendNotification("WebView Loaded", "Website finished loading");
      setWebviewNotified(true);
    }
  };

  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: "https://expo.dev" }}
        style={styles.webview}
        onLoadEnd={handleWebViewLoad}
      />

      <Card style={styles.card}>
        <Button
          mode="contained"
          onPress={() =>
            sendNotification("Hello 👋", "This is Notification One")
          }
        >
          Notification 1
        </Button>

        <Button
          mode="outlined"
          style={{ marginTop: 10 }}
          onPress={() =>
            sendNotification("Reminder ⏰", "This is Notification Two")
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
