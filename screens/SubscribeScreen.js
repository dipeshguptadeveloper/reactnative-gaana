import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
  AccordionList,
} from "accordion-collapse-react-native";
import {
  CalendarIcon,
  DownloadIcon,
  MusicNoteIcon,
  XIcon,
} from "react-native-heroicons/outline";
import { ChevronDownIcon } from "react-native-heroicons/solid";

const SubscribeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView className="bg-[#050A30] p-4">
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Home");
        }}
      >
        <XIcon size={24} color="white" />
      </TouchableOpacity>
      <View className="flex items-center">
        <Text className="text-white font-bold text-2xl">gaana Plus</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="mt-10 items-center">
          <Text className="text-white text-xl">
            Subscribe to GaaanaPlus For
          </Text>
          <Text className="text-white text-3xl font-semibold mt-2">
            Premium Experience
          </Text>
        </View>
        <View className="mt-6 flex-row space-x-4">
          <View className="flex-row items-center space-x-3">
            <MusicNoteIcon size={24} color="gray" />
            <Text className="text-white">Hd Music Streaming</Text>
          </View>
          <View className="flex-row items-center space-x-3">
            <MusicNoteIcon size={24} color="gray" />
            <Text className="text-white">AdFree Experience</Text>
          </View>
        </View>
        <View className="mt-6 flex-row space-x-4">
          <View className="flex-row items-center space-x-3">
            <DownloadIcon size={24} color="gray" />
            <Text className="text-white">Unlimited Downloads</Text>
          </View>
          <View className="flex-row items-center space-x-3">
            <CalendarIcon size={24} color="gray" />
            <Text className="text-white">Live Events</Text>
          </View>
        </View>

        <View className="mt-8 space-y-4">
          <View className="bg-white h-28 rounded-lg flex-row justify-between items-center px-8">
            <View>
              <Text className="text-xl font-medium">1 Year Plan</Text>
              <Text className="text-gray-500 mt-2">$ 24.91/month</Text>
            </View>
            <View>
              <Text className="text-xl font-bold">$299</Text>
              <Text className="text-gray-500 mt-2">Save 83%</Text>
            </View>
          </View>
          <View className="bg-gray-600 h-28 rounded-lg flex-row justify-between items-center px-8">
            <View>
              <Text className="text-white text-xl font-medium">
                6 Months Plan
              </Text>
              <Text className="text-gray-200 mt-2">$ 41.5/month</Text>
            </View>
            <View>
              <Text className="text-white text-xl font-bold">$249</Text>
            </View>
          </View>
          <View className="bg-gray-600 h-28 rounded-lg flex-row justify-between items-center px-8">
            <View>
              <Text className="text-white text-xl font-medium">
                1 Month Plan
              </Text>
            </View>
            <View>
              <Text className="text-white text-xl font-bold">$99</Text>
            </View>
          </View>
        </View>
        <View className="mt-10 mb-20 space-y-3">
          <Collapse className="bg-[#ffdfdf24] px-3 py-3 rounded-lg ">
            <CollapseHeader>
              <View className=" flex-row justify-between">
                <Text className="text-white text-sm">What is GaanaPlus?</Text>
                <ChevronDownIcon size={28} color="white" />
              </View>
            </CollapseHeader>
            <CollapseBody>
              <Text className=" text-gray-300 text-sm mt-2">
                Gaana+ is a premium service from Gaana that allows you to
                download your favourite songs in the highest quality and listen
                anywhere, even without network connectivity.
              </Text>
            </CollapseBody>
          </Collapse>
          <Collapse className="bg-[#ffdfdf24] px-3 py-3 rounded-lg ">
            <CollapseHeader>
              <View className="flex-row justify-between">
                <Text className="text-white text-sm">
                  How much does GaanaPlus cost?
                </Text>
                <ChevronDownIcon size={28} color="white" />
              </View>
            </CollapseHeader>
            <CollapseBody>
              <Text className="text-gray-300 text-sm mt-2">
                Gaana+ subscription comes with a very reasonable price. On Gaana
                Website, we have quarterly, half-yearly and yearly plans at a
                very reasonable price.
              </Text>
            </CollapseBody>
          </Collapse>
          <Collapse className="bg-[#ffdfdf24] px-3 py-3 rounded-lg ">
            <CollapseHeader>
              <View className="flex-row justify-between">
                <Text className="text-white text-sm">
                  Will I be charged at the end of my free trial?
                </Text>
                <ChevronDownIcon size={28} color="white" />
              </View>
            </CollapseHeader>
            <CollapseBody>
              <Text className="text-gray-300 text-sm mt-2">
                We have several marketing campaigns which will offer you free 3
                months with a code to redeem on the app. {"\n"}
                {"\n"}Once the 90 days trial period is over, the subscription
                will be renewed automatically and a deduction will occur on your
                account. {"\n"}
                {"\n"}
                To avoid deduction you can cancel the auto renewal 24 hours
                prior to the renewal date , there is an option in the app
                available.
              </Text>
            </CollapseBody>
          </Collapse>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SubscribeScreen;
