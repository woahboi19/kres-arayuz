import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import AppStack from "./src/navigation/AppStack";
import AuthStack from "./src/navigation/AuthStack";

function App() {
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
