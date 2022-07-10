import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import {
  BellIcon,
  DeviceMobileIcon,
  GiftIcon,
  MusicNoteIcon,
  SpeakerphoneIcon,
  SunIcon,
} from "react-native-heroicons/solid";
import { ChevronRightIcon } from "react-native-heroicons/outline";

const SettingCards = () => {
  return (
    <View className="p-4">
      <TouchableOpacity>
        <View className="flex-row justify-between items-center mb-3">
          <GiftIcon color="cyan" />
          <View className="flex-1 ml-5">
            <Text className="text-white text-lg font-semibold">
              Gaana Plus & Rewards
            </Text>
            <Text className="text-gray-500 text-sm">
              Redeem Coupon, Subscibe For Gaana {"\n"}Plus, Renew Purchase
            </Text>
          </View>
          <ChevronRightIcon color="gray" />
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View className="flex-row justify-between items-center mb-4">
          <MusicNoteIcon color="purple" />
          <View className="flex-1 ml-5">
            <Text className="text-white text-lg font-semibold">Music</Text>
            <Text className="text-gray-500 text-sm">
              Music Playback Settings, Song Languages, {"\n"}Autoplay Videos,
              Music Quality
            </Text>
          </View>
          <ChevronRightIcon color="gray" />
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View className="flex-row justify-between items-center mb-3">
          <SunIcon color="yellow" />
          <View className="flex-1 ml-5">
            <Text className="text-white text-lg font-semibold">Display</Text>
            <Text className="text-gray-500 text-sm">
              App Language, Launch Screen
            </Text>
          </View>
          <ChevronRightIcon color="gray" />
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View className="flex-row justify-between  mt-2 items-center mb-4">
          <SpeakerphoneIcon color="orange" />
          <View className="flex-1 ml-5">
            <Text className="text-white text-lg font-semibold">
              Connect with HomePod
            </Text>
          </View>
          <ChevronRightIcon color="gray" />
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View className="flex-row justify-between  mt-2 items-center mb-4">
          <DeviceMobileIcon color="red" />
          <View className="flex-1 ml-5">
            <Text className="text-white text-lg font-semibold">PartyHub</Text>
          </View>
          <ChevronRightIcon color="gray" />
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View className="flex-row justify-between mt-2 items-center mb-4">
          <MusicNoteIcon color="purple" />
          <View className="flex-1 ml-5">
            <Text className="text-white text-lg font-semibold">ChromeCast</Text>
          </View>
          <ChevronRightIcon color="gray" />
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View className="flex-row justify-between mt-2 items-center mb-3">
          <BellIcon color="lime" />
          <View className="flex-1 ml-5">
            <Text className="text-white text-lg font-semibold">
              Notification
            </Text>
            <Text className="text-gray-500 text-sm">
              Music Recommendation,{"\n"}Favourites, Followed
            </Text>
          </View>
          <ChevronRightIcon color="gray" />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default SettingCards;
