import React, { useContext, useState } from "react";
import { SafeAreaView, View, Text } from "react-native";

import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";

import CustomButton from "../components/CustomButton";
import InputField from "../components/InputField";
import { AuthContext } from "../navigation/AuthProvider";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  //const { login } = useContext(AuthContext);

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center" }}>
      <View style={{ paddingHorizontal: 25 }}>
        <Text
          style={{
            fontFamily: "Roboto-Medium",
            fontSize: 28,
            fontWeight: "500",
            color: "#333",
            marginBottom: 30,
          }}
        >
          Giriş
        </Text>

        <InputField
          labelValue={email}
          onChangeText={(userEmail) => setEmail(userEmail)}
          label={"E-posta Adresi"}
          icon={
            <MaterialIcons
              name="alternate-email"
              size={20}
              color="#666"
              style={{ marginRight: 5 }}
            />
          }
          keyboardType="email-address"
        />

        <InputField
          labelValue={password}
          onChangeText={(userPassword) => setPassword(userPassword)}
          label={"Şifre"}
          icon={
            <Ionicons
              name="ios-lock-closed-outline"
              size={20}
              color="#666"
              style={{ marginRight: 5 }}
            />
          }
          inputType="password"
          fieldButtonLabel={"Hatırlamıyor musunuz?"}
          fieldButtonFunction={() => {}}
        />

        <CustomButton
          label={"Giriş"}
          onPress={() => {
            //login(email, password);
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
