import { View, Text, SafeAreaView, TextInput } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { MicrophoneIcon, SearchIcon } from "react-native-heroicons/outline";
import NavigationBar from "../components/NavigationBar";

const ExploreScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView className="bg-[#050A30] flex-1">
      <View className="p-4">
        <View className="bg-[#ffdfdf24] px-2 py-2 rounded-xl flex-row items-center justify-between">
          <SearchIcon size={26} color="white" />
          <TextInput
            keyboardType="web-search"
            placeholder="Search Songs, Playlists and Podcasts"
            className="text-white px-2 text-[18px] flex-1 "
          />
          <MicrophoneIcon size={26} color="white" />
        </View>
      </View>
      <View className="absolute bottom-0 right-0 left-0 mb-8">
        <NavigationBar />
      </View>
    </SafeAreaView>
  );
};

export default ExploreScreen;
