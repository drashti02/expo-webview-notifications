import { Tabs } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#6200ee',
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'WebView',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="public" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="video"
        options={{
          title: 'Video',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="play-circle-filled" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
