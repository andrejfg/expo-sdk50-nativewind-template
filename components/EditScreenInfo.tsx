import React from 'react'
import { Text, View } from 'react-native'
import { ExternalLink } from './ExternalLink'
import { MonoText } from './StyledText'

export default function EditScreenInfo({ path }: { path: string }) {
  return (
    <View>
      <View className="mx-10 items-center">
        <Text className="text-cente text-base leading-6 text-[rgba(0,0,0,0.8)] dark:text-[rgba(255,255,255,0.8)]">
          Open up the code for this screen:
        </Text>

        <View className="my-2 rounded-md bg-[rgba(0,0,0,0.05)] px-4 dark:bg-[rgba(255,255,255,0.05)]">
          <MonoText>{path}</MonoText>
        </View>

        <Text className="text-center text-base leading-6 text-[rgba(0,0,0,0.8)] dark:text-[rgba(255,255,255,0.8)]">
          Change any of the text, save the file, and your app will automatically
          update.
        </Text>
      </View>

      <View className="mx-4 mt-5 flex items-center">
        <ExternalLink
          className="py-4"
          href="https://docs.expo.io/get-started/create-a-new-app/#opening-the-app-on-your-phonetablet"
        >
          <Text className="text-center text-link">
            {
              "Tap here if your app doesn't automatically update after making changes"
            }
          </Text>
        </ExternalLink>
      </View>
    </View>
  )
}
