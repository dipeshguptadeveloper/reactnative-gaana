import { View, Text, ScrollView } from "react-native";
import React from "react";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
    >
      <CategoryCard
        imgUrl="https://sklktcdnems05.cdnsrv.jio.com/c.saavncdn.com/571/Pyaar-Ek-Tarfaa-Hindi-2021-20211005195525-500x500.jpg"
        title="Pyaar Ek Tarfaa"
      />
      <CategoryCard
        imgUrl="https://i.ytimg.com/vi/SmM0653YvXU/maxresdefault.jpg"
        title="Rain Over Me"
      />
      <CategoryCard
        imgUrl="https://i.scdn.co/image/ab67616d0000b273678391f5b615a6d9f082912a"
        title="Rim Jhim"
      />
      <CategoryCard
        imgUrl="https://i.ytimg.com/vi/aUc4AssQRVI/maxresdefault.jpg"
        title="Main Bhi Babaad"
      />
      <CategoryCard
        imgUrl="https://sklktcdnems05.cdnsrv.jio.com/c.saavncdn.com/571/Pyaar-Ek-Tarfaa-Hindi-2021-20211005195525-500x500.jpg"
        title="Pyaar Ek Tarfaa"
      />
      <CategoryCard
        imgUrl="https://i.ytimg.com/vi/SmM0653YvXU/maxresdefault.jpg"
        title="Rain Over Me"
      />
      <CategoryCard
        imgUrl="https://i.scdn.co/image/ab67616d0000b273678391f5b615a6d9f082912a"
        title="Rim Jhim"
      />
      <CategoryCard
        imgUrl="https://i.ytimg.com/vi/aUc4AssQRVI/maxresdefault.jpg"
        title="Main Bhi Babaad"
      />
    </ScrollView>
  );
};

export default Categories;
