import { TouchableOpacity, ImageBackground, StyleSheet } from "react-native";
import { Text, View } from "@/components/Themed";
import backIcon from "@/assets/images/back.png";
import notificationsIcon from "@/assets/images/notifications.png";
import logoutIcon from "@/assets/images/logout.png";
import backLightIcon from "@/assets/images/back-light.png";
import notificationsLightIcon from "@/assets/images/notifications-light.png";
import logoutLightIcon from "@/assets/images/logout-light.png";
import React, { BackHandler } from "react-native";
import { router } from "expo-router";
import { useTheme } from "@react-navigation/native";

interface Header {
  atHome: boolean;
}

export default function Header({ atHome }: Header) {
  const colorScheme = useTheme();

  return (
    <View style={styles.header}>
      <Text
        style={[
          styles.headerText,
          {
            color:
              !atHome && colorScheme.dark !== false ? "#000000" : "#F2F2F2",
          },
        ]}
      >
        App Logo
      </Text>
      <View style={styles.headerIcons}>
        {!atHome &&
          (colorScheme.dark === false ? (
            <TouchableOpacity
              onPress={() => {
                router.back();
              }}
            >
              <ImageBackground
                style={styles.headerIcon}
                source={backIcon}
              ></ImageBackground>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => {
                router.back();
              }}
            >
              <ImageBackground
                style={styles.headerIcon}
                source={backLightIcon}
              ></ImageBackground>
            </TouchableOpacity>
          ))}
        {!atHome && colorScheme.dark !== false ? (
          <TouchableOpacity
            onPress={() => {
              router.push("/(tabs)/notifications");
            }}
          >
            <ImageBackground
              style={styles.headerIcon}
              source={notificationsLightIcon}
            ></ImageBackground>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => {
              router.push("/(tabs)/notifications");
            }}
          >
            <ImageBackground
              style={styles.headerIcon}
              source={notificationsIcon}
            ></ImageBackground>
          </TouchableOpacity>
        )}
        {!atHome && colorScheme.dark !== false ? (
          <TouchableOpacity
            onPress={() => {
              BackHandler.exitApp();
            }}
          >
            <ImageBackground
              style={styles.headerIcon}
              source={logoutLightIcon}
            ></ImageBackground>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => {
              BackHandler.exitApp();
            }}
          >
            <ImageBackground
              style={styles.headerIcon}
              source={logoutIcon}
            ></ImageBackground>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 250,
    backgroundColor: "transparent",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    paddingTop: 50,
  },
  headerText: {
    color: "#F2F2F2",
    fontWeight: "700",
  },
  headerIcons: {
    display: "flex",
    flexDirection: "row",
    gap: 30,
  },
  headerIcon: {
    width: 18,
    height: 18,
    backgroundColor: "transparent",
  },
});
