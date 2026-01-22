import React, { useRef } from 'react';
import { View, StyleSheet } from 'react-native';
import { Video, ResizeMode } from 'expo-av';
import { Button } from 'react-native-paper';

export default function VideoScreen() {
  const videoRef = useRef<Video>(null);

  return (
    <View style={styles.container}>
      <Video
        ref={videoRef}
        source={{
          uri: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
        }}
        useNativeControls
        resizeMode={ResizeMode.CONTAIN}
        style={styles.video}
        shouldPlay
      />

      <Button
        mode="contained"
        style={{ marginTop: 10 }}
        onPress={() => videoRef.current?.presentFullscreenPlayer()}
      >
        Fullscreen
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  video: { width: '100%', height: 250 },
});