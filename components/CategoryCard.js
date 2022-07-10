import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

const CategoryCard = ({ imgUrl, title }) => {
  return (
    <TouchableOpacity className="mt-4 items-center mb-4">
      <Image
        source={{
          uri: imgUrl,
        }}
        className="w-24 h-24 rounded mr-4"
      />
      <Text className=" text-white mt-2 mr-4 whitespace-normal">{title}</Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
