# Expo WebView, Notifications & Video Player App

## About
This project is a small Expo React Native application built as part of an assignment. The main goal was to demonstrate how to embed a website using WebView, trigger local notifications based on user interaction, and play an HLS video stream on a separate screen.

The app is built using Expo’s managed workflow and is fully compatible with Expo Go, without requiring any custom native configuration.
## Features

### WebView Screen
- A website is embedded inside the app using `react-native-webview`
- Two buttons are placed below the WebView
- Each button triggers a different local notification with a short delay
- A notification is also triggered when the WebView finishes loading (bonus feature)

### Local Notifications
- Implemented using `expo-notifications`
- Two distinct notification messages are used
- Notifications are triggered with a 3-second delay
- Android notification channels are properly configured
- Tested using Expo Go on a real device

### Video Player Screen
- Separate screen dedicated to video playback
- HLS video playback implemented using `expo-av`
- Uses the provided test stream URL:`https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8`
- Native video controls are enabled for play, pause, and fullscreen

### Navigation
- Navigation is handled using Expo Router
- Bottom tab navigation allows switching between:
- WebView + Notifications screen
- Video Player screen
- This keeps the navigation simple and easy to use

### UI
- `react-native-paper` is used for buttons and layout components
- This avoids plain default components and keeps the UI clean and consistent
## Tech Stack
- Expo (Managed Workflow)
- Expo Router
- react-native-webview
- expo-notifications
- expo-av
- react-native-paper
## Project Structure
app/
├─ _layout.tsx
├─ (tabs)/
│ ├─ _layout.tsx
│ ├─ index.tsx // WebView & Notifications
│ └─ video.tsx // Video Player

## Testing
The app was tested on a physical Android device using Expo Go.
All features including WebView loading, delayed notifications,
navigation, and HLS video playback were verified on the real device.

## Running the App

1. Install dependencies:
```bash
npm install

Start the development server
npx expo start

