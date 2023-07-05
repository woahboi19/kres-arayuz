import React from "react";
import {
  StyleSheet,
  Image,
  Dimensions,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { Block, Button, Text } from "galio-framework";
import { HeaderHeight } from "../constants/utils";
import theme from "../theme";

const { width, height } = Dimensions.get("screen");
const BASE_SIZE = theme.SIZES.BASE;
const COLOR_WHITE = theme.COLORS.WHITE;
const Gunler = ["Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma"];

const YemekListesi = ({ navigation }) => {
  return (
    <Block flex style={styles.profile}>
      <Block flex>
        <ImageBackground
          source={require("../assets/menu-bg.jpeg")}
          style={styles.profileContainer}
          imageStyle={styles.profileBackground}
        >
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ width, marginTop: "40%" }}
          >
            <Block flex style={styles.profileCard}>
              <Block middle style={styles.avatarContainer}>
                <TouchableOpacity onPress={() => navigation.openDrawer()}>
                  <Image
                    source={require("../assets/pp.png")}
                    style={styles.avatar}
                  />
                </TouchableOpacity>
              </Block>
              <Block
                middle
                row
                space="evenly"
                style={{
                  marginTop: -40,
                  paddingBottom: 10,
                  marginHorizontal: -140,
                }}
              >
                <Button
                  onlyIcon
                  icon="notifications"
                  iconFamily="ion-icon"
                  iconSize={20}
                  style={{ backgroundColor: "#6B84CA" }}
                ></Button>
                <Button
                  onlyIcon
                  icon="message"
                  iconFamily="ion-icon"
                  iconSize={20}
                  style={{ backgroundColor: "#D442F8" }}
                ></Button>
              </Block>
              <Block middle>
                <Text
                  bold
                  size={22}
                  color="black"
                  style={{ paddingBottom: -25, marginTop: -25 }}
                >
                  İsim Soyisim
                </Text>
              </Block>
            </Block>
            <Block row center card shadow space="between" style={styles.card}>
              <SelectDropdown
                data={Gunler}
                onSelect={(selectedItem, index) => {}}
                defaultButtonText={"Gün Seçin"}
                buttonTextAfterSelection={(selectedItem, index) => {
                  return selectedItem;
                }}
                rowTextForSelection={(item, index) => {
                  return item;
                }}
                buttonStyle={styles.dropdownBtnStyle}
                buttonTextStyle={styles.dropdownBtnTxtStyle}
                renderDropdownIcon={(isOpened) => {
                  return (
                    <FontAwesome
                      name={isOpened ? "chevron-up" : "chevron-down"}
                      color={"#444"}
                      size={18}
                    />
                  );
                }}
                dropdownIconPosition={"right"}
                dropdownStyle={styles.dropdownDropdownStyle}
                rowStyle={styles.dropdownRowStyle}
                rowTextStyle={styles.dropdownRowTxtStyle}
              />
            </Block>
          </ScrollView>
        </ImageBackground>
      </Block>
    </Block>
  );
};

export default YemekListesi;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF9B6",
  },
  butonikon: {
    width: 60,
    height: 60,
    tintColor: "#FF7171",
  },
  butonarka: {
    width: 350,
    height: 100,
    backgroundColor: "#9FD8DF",
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  profile: {
    marginTop: Platform.OS === "android" ? -HeaderHeight : 0,
    // marginBottom: -HeaderHeight * 2,
    flex: 1,
  },
  profileContainer: {
    width: width,
    height: height,
    padding: 0,
    zIndex: 1,
  },
  profileBackground: {
    width: width,
    height: height / 3,
    left: -5,
  },
  profileCard: {
    // position: "relative",
    padding: theme.SIZES.BASE,
    marginHorizontal: theme.SIZES.BASE,
    marginTop: 65,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    backgroundColor: theme.COLORS.WHITE,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 8,
    shadowOpacity: 0.2,
    zIndex: 2,
  },
  info: {
    paddingHorizontal: 40,
  },
  avatarContainer: {
    position: "relative",
    marginTop: -80,
  },
  avatar: {
    width: 124,
    height: 124,
    borderRadius: 62,
    borderWidth: 0,
  },
  card: {
    borderColor: "transparent",
    marginHorizontal: BASE_SIZE,
    marginVertical: BASE_SIZE / 2 + 1,
    padding: BASE_SIZE + 6,
    backgroundColor: COLOR_WHITE,
    shadowOpacity: 0.4,
  },
  left: {
    marginRight: BASE_SIZE,
  },
  gradient: {
    width: BASE_SIZE * 3.25,
    height: BASE_SIZE * 3.25,
    borderRadius: BASE_SIZE * 3.25,
    alignItems: "center",
    justifyContent: "center",
  },
  dropdownBtnStyle: {
    width: "80%",
    height: 50,
    backgroundColor: "#FFF",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#444",
  },
  dropdownBtnTxtStyle: { color: "#444", textAlign: "left" },
  dropdownDropdownStyle: { backgroundColor: "#EFEFEF" },
  dropdownRowStyle: {
    backgroundColor: "#EFEFEF",
    borderBottomColor: "#C5C5C5",
  },
  dropdownRowTxtStyle: { color: "#444", textAlign: "left" },
});
