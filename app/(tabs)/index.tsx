import {
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Text, View } from "@/components/Themed";
import bgImage from "../../assets/images/gradient-bg.png";
import bgImageDark from "@/assets/images/gradient-bg-dark.png";
import chatIcon from "@/assets/images/chat.png";
import chatDarkIcon from "@/assets/images/chat-dark.png";
import ideasIcon from "@/assets/images/ideas.png";
import ideasDarkIcon from "@/assets/images/ideas-dark.png";
import newsIcon from "@/assets/images/news.png";
import newsDarkIcon from "@/assets/images/news-dark.png";
import helpIcon from "@/assets/images/help.png";
import helpDarkIcon from "@/assets/images/help-dark.png";
import Header from "@/components/Header";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
  useTheme,
} from "@react-navigation/native";
import { router } from "expo-router";

export default function TabOneScreen() {
  const colorScheme = useTheme();

  return (
    <ThemeProvider
      value={colorScheme.dark === false ? DarkTheme : DefaultTheme}
    >
      <ScrollView style={styles.container}>
        <ImageBackground
          source={colorScheme.dark === false ? bgImage : bgImageDark}
          style={styles.mainContainer}
        >
          <Header atHome={true} />
          <View style={styles.cards}>
            <View style={styles.cardsRow}>
              <TouchableOpacity
                style={[
                  styles.card,
                  styles.cardFullWidth,
                  {
                    backgroundColor:
                      colorScheme.dark === false ? "#FFFFFF" : "#0D1822",
                    color: colorScheme.dark === false ? "#0D1822" : "#F2F2F2",
                    borderColor:
                      colorScheme.dark === false
                        ? "rgba(0, 0, 0, 0.1)"
                        : "rgba(255, 255, 255, 0.1)",
                  },
                ]}
                onPress={() => {
                  router.push("/(tabs)/chat");
                }}
              >
                {colorScheme.dark === false ? (
                  <ImageBackground source={chatIcon} style={styles.cardIcon} />
                ) : (
                  <ImageBackground
                    source={chatDarkIcon}
                    style={styles.cardIcon}
                  />
                )}
                <Text style={styles.cardHeader}>Begin Chat</Text>
                <Text>
                  Chat with our chatbot and preivew any image directly through
                  your camera.
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.cardsRow}>
              <TouchableOpacity
                style={[
                  styles.card,
                  {
                    backgroundColor:
                      colorScheme.dark === false ? "#FFFFFF" : "#0D1822",
                    color: colorScheme.dark === false ? "#0D1822" : "#F2F2F2",
                    borderColor:
                      colorScheme.dark === false
                        ? "rgba(0, 0, 0, 0.1)"
                        : "rgba(255, 255, 255, 0.1)",
                  },
                ]}
                onPress={() => {
                  router.push("/(tabs)/ideas");
                }}
              >
                {colorScheme.dark === false ? (
                  <ImageBackground source={ideasIcon} style={styles.cardIcon} />
                ) : (
                  <ImageBackground
                    source={ideasDarkIcon}
                    style={styles.cardIcon}
                  />
                )}
                <Text style={styles.cardHeader}>Ideas</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.card,
                  {
                    backgroundColor:
                      colorScheme.dark === false ? "#FFFFFF" : "#0D1822",
                    color: colorScheme.dark === false ? "#0D1822" : "#F2F2F2",
                    borderColor:
                      colorScheme.dark === false
                        ? "rgba(0, 0, 0, 0.1)"
                        : "rgba(255, 255, 255, 0.1)",
                  },
                ]}
                onPress={() => {
                  router.push("/(tabs)/news");
                }}
              >
                {colorScheme.dark === false ? (
                  <ImageBackground source={newsIcon} style={styles.cardIcon} />
                ) : (
                  <ImageBackground
                    source={newsDarkIcon}
                    style={styles.cardIcon}
                  />
                )}
                <Text style={styles.cardHeader}>News</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.card,
                  {
                    backgroundColor:
                      colorScheme.dark === false ? "#FFFFFF" : "#0D1822",
                    color: colorScheme.dark === false ? "#0D1822" : "#F2F2F2",
                    borderColor:
                      colorScheme.dark === false
                        ? "rgba(0, 0, 0, 0.1)"
                        : "rgba(255, 255, 255, 0.1)",
                  },
                ]}
                onPress={() => {
                  router.push("/(tabs)/help");
                }}
              >
                {colorScheme.dark === false ? (
                  <ImageBackground source={helpIcon} style={styles.cardIcon} />
                ) : (
                  <ImageBackground
                    source={helpDarkIcon}
                    style={styles.cardIcon}
                  />
                )}
                <Text style={styles.cardHeader}>Help</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
        <View style={styles.savedShots}>
          <Text style={styles.sectionHeading}>Saved Shots</Text>
          <View style={styles.shotsRow}>
            <View
              style={[
                styles.shot,
                {
                  borderColor:
                    colorScheme.dark === false
                      ? "rgba(0, 0, 0, 0.1)"
                      : "rgba(255, 255, 255, 0.1)",
                },
              ]}
            >
              <Text>Image</Text>
            </View>
            <View
              style={[
                styles.shot,
                {
                  borderColor:
                    colorScheme.dark === false
                      ? "rgba(0, 0, 0, 0.1)"
                      : "rgba(255, 255, 255, 0.1)",
                },
              ]}
            >
              <Text>Image</Text>
            </View>
          </View>
          <View style={styles.shotsRow}>
            <View
              style={[
                styles.shot,
                {
                  borderColor:
                    colorScheme.dark === false
                      ? "rgba(0, 0, 0, 0.1)"
                      : "rgba(255, 255, 255, 0.1)",
                },
              ]}
            >
              <Text>Image</Text>
            </View>
            <View
              style={[
                styles.shot,
                {
                  borderColor:
                    colorScheme.dark === false
                      ? "rgba(0, 0, 0, 0.1)"
                      : "rgba(255, 255, 255, 0.1)",
                },
              ]}
            >
              <Text>Image</Text>
            </View>
          </View>
          <View style={styles.shotsRow}>
            <View
              style={[
                styles.shot,
                {
                  borderColor:
                    colorScheme.dark === false
                      ? "rgba(0, 0, 0, 0.1)"
                      : "rgba(255, 255, 255, 0.1)",
                },
              ]}
            >
              <Text>Image</Text>
            </View>
            <View
              style={[
                styles.shot,
                {
                  borderColor:
                    colorScheme.dark === false
                      ? "rgba(0, 0, 0, 0.1)"
                      : "rgba(255, 255, 255, 0.1)",
                },
              ]}
            >
              <Text>Image</Text>
            </View>
          </View>
          <View style={styles.shotsRow}>
            <View
              style={[
                styles.shot,
                {
                  borderColor:
                    colorScheme.dark === false
                      ? "rgba(0, 0, 0, 0.1)"
                      : "rgba(255, 255, 255, 0.1)",
                },
              ]}
            >
              <Text>Image</Text>
            </View>
            <View
              style={[
                styles.shot,
                {
                  borderColor:
                    colorScheme.dark === false
                      ? "rgba(0, 0, 0, 0.1)"
                      : "rgba(255, 255, 255, 0.1)",
                },
              ]}
            >
              <Text>Image</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    position: "relative",
  },
  mainContainer: {
    width: "100%",
    height: 400,
    display: "flex",
  },
  cards: {
    padding: 20,
    width: "100%",
    gap: 20,
  },
  cardsRow: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  card: {
    width: "30%",
    minHeight: 120,
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.1)",
    borderRadius: 10,
    padding: 15,
    gap: 20,
  },
  cardHeader: {
    fontSize: 24,
    fontWeight: "700",
  },
  cardFullWidth: {
    width: "100%",
  },
  cardIcon: {
    width: 20,
    height: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  savedShots: {
    width: "100%",
    padding: 20,
    position: "relative",
    marginTop: 250,
  },
  sectionHeading: {
    fontSize: 24,
    fontWeight: "700",
  },
  shotsRow: {
    paddingTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  shot: {
    width: "48%",
    height: 100,
    borderColor: "rgba(0, 0, 0, 0.1)",
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
});
