import { View, Text } from "react-native";
import React from "react";
import Categories from "./Categories";
import { ChevronRightIcon } from "react-native-heroicons/outline";

const FeaturedRow = ({ title, description }) => {
  return (
    <View className="mt-7">
      <View className="flex-row items-center justify-between px-4">
        <Text className="text-xl font-semibold text-white">{title}</Text>
        <View className="flex-row space-x-2 items-center">
          <Text className=" text-white">{description}</Text>
          <ChevronRightIcon size={20} color="red" />
        </View>
      </View>
    </View>
  );
};

export default FeaturedRow;
