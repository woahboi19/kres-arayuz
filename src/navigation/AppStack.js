import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Ionicons from "react-native-vector-icons/Ionicons";
import Home from "../screens/Home";
import Ayarlar from "../screens/Settings";
import DersProgrami from "../screens/DersProgrami";
import YemekListesi from "../screens/YemekListesi";
import CustomDrawer from "../components/CustomDrawer";

const Drawer = createDrawerNavigator();

const AppStack = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: "#aa18ea",
        drawerActiveTintColor: "white",
        drawerInactiveTintColor: "#333",
        drawerLabelStyle: { marginLeft: -25, fontSize: 15 },
      }}
    >
      <Drawer.Screen
        name="Ana Sayfa"
        component={Home}
        options={{
          drawerIcon: () => <Ionicons name="home-outline" size={22} />,
        }}
      />
      <Drawer.Screen
        name="Ders Programı"
        component={DersProgrami}
        options={{
          drawerIcon: () => <Ionicons name="book-outline" size={22} />,
        }}
      />
      <Drawer.Screen
        name="Yemek Listesi"
        component={YemekListesi}
        options={{
          drawerIcon: () => <Ionicons name="fast-food-outline" size={22} />,
        }}
      />
      <Drawer.Screen
        name="Ayarlar"
        component={Ayarlar}
        options={{
          drawerIcon: () => <Ionicons name="settings-outline" size={22} />,
        }}
      />
    </Drawer.Navigator>
  );
};

export default AppStack;
