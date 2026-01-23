import * as Notifications from "expo-notifications";
import React, { useEffect, useState } from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";
import { Button, Card } from "react-native-paper";
import { WebView } from "react-native-webview";

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
  const [webviewNotified, setWebviewNotified] = useState(false);
  const [loading, setLoading] = useState(true);

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
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: "https://expo.dev" }}
        style={styles.webview}
        onLoadStart={()=>setLoading(true)}
        onLoadEnd={handleWebViewLoad}
      />
{loading && <ActivityIndicator style={styles.loader}size="large" />}
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
  loader: {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "rgba(255,255,255,0.7)",
},
});
