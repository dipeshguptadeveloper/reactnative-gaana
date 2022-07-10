import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { HomeIcon } from "react-native-heroicons/solid";
import {
  CurrencyRupeeIcon,
  MusicNoteIcon,
  PresentationChartLineIcon,
  SearchIcon,
} from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";

const NavigationBar = () => {
  const navigation = useNavigation();
  return (
    <View className="flex-row justify-between items-center p-4 bottom-0">
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <View className="items-center">
          <HomeIcon size={24} color="red" />
          <Text className="text-xs text-white mt-2">Home</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Explore")}>
        <View className="items-center">
          <SearchIcon size={24} color="gray" />
          <Text className="text-xs text-white mt-2">Explore</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View className="items-center">
          <PresentationChartLineIcon size={30} color="gray" />
          <Text className="text-xs text-white mt-2">Podcasts</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View className="items-center">
          <MusicNoteIcon size={24} color="gray" />
          <Text className="text-xs text-white mt-2">My Library</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View className="items-center">
          <CurrencyRupeeIcon size={24} color="gray" />
          <Text className="text-xs text-white mt-2">Upgrade</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default NavigationBar;
