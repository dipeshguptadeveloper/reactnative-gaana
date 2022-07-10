import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  AdjustmentsIcon,
  AnnotationIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  HomeIcon,
  MusicNoteIcon,
  PlayIcon,
  SearchIcon,
  TranslateIcon,
} from "react-native-heroicons/outline";
import { CurrencyRupeeIcon } from "react-native-heroicons/solid";
import SettingCards from "../components/SettingCards";

const SettingScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView className="bg-[#050a30fb]">
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="p-4">
          <View className=" flex-row justify-between">
            <TouchableOpacity onPress={() => navigation.navigate("Home")}>
              <ChevronLeftIcon size={30} color="white" />
            </TouchableOpacity>
            <Text className="text-white text-xl font-bold">Settings</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Explore")}>
              <SearchIcon size={30} color="white" />
            </TouchableOpacity>
          </View>
          <View className="flex-row items-center justify-between px-10 mt-6">
            <View>
              <Text className="text-white text-lg font-bold">
                Hello Gaana User
              </Text>
              <Text className="text-red-500 font-semibold text-[16px]">
                Free User
              </Text>
            </View>
            <ChevronRightIcon size={30} color="white" />
          </View>
          <View className="mt-5 bg-red-400 rounded-lg flex-row justify-between px-3 py-3">
            <View className="flex-row items-center">
              <CurrencyRupeeIcon color="white" />
              <Text className="text-white text-[18px] font-semibold ml-3">
                Coin Balance
              </Text>
            </View>
            <Text className="text-white text-[18px] font-semibold">180</Text>
          </View>
          <View className="mt-14 mb-8">
            <View className="flex-row items-center justify-around ">
              <View className="justify-between items-center">
                <View className="bg-red-600 h-10 w-10 rounded-full items-center justify-center">
                  <HomeIcon color="white" />
                </View>
                <Text className="text-gray-500 text-[14px] mt-2">Screen</Text>
              </View>
              <View className="items-center">
                <View className="bg-red-600 h-10 w-10 rounded-full items-center justify-center">
                  <MusicNoteIcon color="white" />
                </View>
                <Text className="text-gray-500 text-[14px] mt-2">
                  Music Quality
                </Text>
              </View>
              <View className="items-center">
                <View className="bg-red-600 h-10 w-10 rounded-full items-center justify-center">
                  <AdjustmentsIcon color="white" />
                </View>
                <Text className="text-gray-500 text-[14px] mt-2">Ads</Text>
              </View>
            </View>
            <View className="flex-row items-center justify-around mt-8">
              <View className="justify-between items-center">
                <View className="bg-red-600 h-10 w-10 rounded-full items-center justify-center">
                  <TranslateIcon color="white" />
                </View>
                <Text className="text-gray-500 text-[14px] mt-2">Language</Text>
              </View>
              <View className="items-center">
                <View className="bg-red-600 h-10 w-10 rounded-full items-center justify-center">
                  <AnnotationIcon color="white" />
                </View>
                <Text className="text-gray-500 text-[14px] mt-2">
                  Music Lyrics
                </Text>
              </View>
              <View className="items-center">
                <View className="bg-red-600 h-10 w-10 rounded-full items-center justify-center">
                  <PlayIcon color="white" />
                </View>
                <Text className="text-gray-500 text-[14px] mt-2">Autoplay</Text>
              </View>
            </View>
          </View>
        </View>
        <SettingCards />
      </ScrollView>
    </SafeAreaView>
  );
};

export default SettingScreen;
