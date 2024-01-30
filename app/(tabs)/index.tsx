import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from 'react-native';

export default function TabOneScreen() {
  return (
    <View className='items-center justify-center bg-light-background dark:bg-dark-background flex-1'>
      <Text className='text-2xl font-bold text-light-text dark:text-dark-text'>Tab One</Text>
      <View className="my-7 h-1 w-4/5 bg-[#eee] dark:bg-[rgba(255,255,255,0.4)]" />
      <EditScreenInfo path="app/(tabs)/index.tsx" />
    </View>
  );
}