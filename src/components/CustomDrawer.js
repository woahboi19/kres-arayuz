import React from "react";
import { Text, View, ImageBackground, Image } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";

const CustomDrawer = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ backgroundColor: "86" }}
      >
        <ImageBackground
          source={require("../assets/menu-bg.jpeg")}
          style={{ padding: 20 }}
        >
          <Image
            source={require("../assets/pp.png")}
            style={{
              height: 80,
              width: 80,
              borderRadius: 40,
              marginBottom: 10,
            }}
          />
          <Text
            style={{
              color: "black",
              fontSize: 18,
            }}
          >
            İsim Soyisim
          </Text>
        </ImageBackground>
        <View style={{ flex: 1, backgroundColor: "white", paddingTop: 10 }}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={{ padding: 20, borderTopWidth: 1, borderTopColor: "#ccc" }}>
        <Text>Sürüm 0.3</Text>
      </View>
    </View>
  );
};

export default CustomDrawer;
