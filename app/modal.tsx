import { StatusBar } from 'expo-status-bar';
import { Platform } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from 'react-native';

export default function ModalScreen() {
  return (
    <View className='items-center justify-center bg-light-background dark:bg-dark-background flex-1'>
      <Text className='text-2xl font-bold text-light-text dark:text-dark-text'>Modal</Text>
      <View className="my-7 h-1 w-4/5 bg-[#eee] dark:bg-[rgba(255,255,255,0.4)]" />
      <EditScreenInfo path="app/modal.tsx" />

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}
