import React from "react";
import { View, StyleSheet, Alert } from "react-native";
import { Block, Button, Text, Icon } from "galio-framework";
import theme from "../theme";

const COLOR_INFO = theme.COLORS.INFO;
const COLOR_WARNING = theme.COLORS.WARNING;

const Settings = () => {
  return (
    <View style={styles.screen}>
      <View style={{ padding: 15 }}>
        <Button
          color={COLOR_INFO}
          style={styles.button}
          onPress={() =>
            Alert.alert(
              "Bize Ulaşın",
              "E-posta adresimizden bize istek ve şikayetlerinizi iletebilirsiniz :)\n\nkresapp@gmail.com",
              [
                {
                  text: "Tamam",
                },
              ]
            )
          }
        >
          <Text style={styles.text}>Bize Ulaşın</Text>
        </Button>
      </View>

      <View style={{ padding: 15 }}>
        <Button
          color={COLOR_WARNING}
          style={styles.button}
          onPress={() => Alert.alert("Yardım", "Yardım")}
        >
          <Text style={styles.text}>Yardım</Text>
        </Button>
      </View>
      <View style={{ padding: 15 }}>
        <Button
          style={styles.button}
          onPress={() =>
            Alert.alert(
              "Biz Kimiz",
              "Eren Samet Karataş - Tufan Anıl Kanca\nKocaeli Üniversitesi Bilgisayar Mühendisliği öğrencileri",
              [
                {
                  text: "Tamam",
                },
              ]
            )
          }
        >
          <Text style={styles.text}>Hakkımızda</Text>
        </Button>
      </View>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 24,
    padding: 15,
    borderRadius: 4,
    elevation: 3,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});
