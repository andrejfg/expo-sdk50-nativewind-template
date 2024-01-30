import { Link, Stack } from 'expo-router'
import { Text, View } from 'react-native'

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <View className="flex-1 items-center justify-center bg-light-background p-5 dark:bg-dark-background">
        <Text className="text-2xl font-bold text-light-text dark:text-dark-text">
          {"This screen doesn't exist."}
        </Text>

        <Link href="/" className="mt-5 py-4">
          <Text className="text-base text-link">Go to home screen!</Text>
        </Link>
      </View>
    </>
  )
}
