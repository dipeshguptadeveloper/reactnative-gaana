import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { ChevronRightIcon, CogIcon } from "react-native-heroicons/outline";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";
import NavigationBar from "../components/NavigationBar";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView className="bg-[#050A30] flex-1">
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="p-4">
          <View className="flex-row items-center justify-between">
            <View>
              <Text className="text-white text-lg font-medium">
                Hi Gaana User
              </Text>
            </View>
            <View className="flex-row space-x-3">
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Subscribe");
                }}
              >
                <View className="bg-red-500 px-3 py-0.5 items-center flex-row rounded-md">
                  <Text className="text-white text-[14px]">Subscribe</Text>
                  <ChevronRightIcon size={20} color="white" />
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Setting");
                }}
              >
                <CogIcon size={30} color="white" />
              </TouchableOpacity>
            </View>
          </View>
          <Text className="text-white font-sm text-[16px] mt-2">
            Welcome, start listening!
          </Text>
        </View>

        <Image
          source={{
            uri: "https://imgur.com/I2FlazT.jpg",
          }}
          className="h-36 w-screen rounded-lg"
        />
        <ScrollView
          contentContainerStyle={{
            paddingBottom: 10,
          }}
        >
          <FeaturedRow title="Recently Played" description="View All" />
          <Categories />
          <FeaturedRow title="Made For You" description="View All" />
          <Categories />
          <FeaturedRow title="Artists For You" description="View All" />
          <Categories />
          <FeaturedRow title="Podcast Top Charts" description="View All" />
          <Categories />
          <FeaturedRow title="Top Charts" description="View All" />
          <Categories />
        </ScrollView>
      </ScrollView>

      <NavigationBar />
    </SafeAreaView>
  );
};

export default HomeScreen;
