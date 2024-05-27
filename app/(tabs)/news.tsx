import {
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Text, View } from "@/components/Themed";
import bgImage from "@/assets/images/gradient-bg.png";
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
import { useEffect } from "react";

export default function TabOneScreen() {
  const colorScheme = useTheme();

  return (
    <ThemeProvider
      value={colorScheme.dark === false ? DarkTheme : DefaultTheme}
    >
      <ScrollView style={styles.container}>
        <Header atHome={false} />
        <View style={styles.newsContainer}>
          <Text style={styles.newsHeading}>News</Text>
          <View style={styles.news}>
            <View
              style={[
                styles.new,
                {
                  borderColor:
                    colorScheme.dark === false
                      ? "rgba(0, 0, 0, 0.1)"
                      : "rgba(255, 255, 255, 0.1)",
                },
              ]}
            >
              <View style={styles.newHead}>
                <Text style={styles.newHeading}>
                  News heading
                </Text>
                <Text>3:34 PM, Today.</Text>
              </View>
              <Text>
                A curious, wild news has arrived. Have a look at it to
                learn more about it.
              </Text>
            </View>
            <View
              style={[
                styles.new,
                {
                  borderColor:
                    colorScheme.dark === false
                      ? "rgba(0, 0, 0, 0.1)"
                      : "rgba(255, 255, 255, 0.1)",
                },
              ]}
            >
              <View style={styles.newHead}>
                <Text style={styles.newHeading}>
                  News heading
                </Text>
                <Text>3:34 PM, Today.</Text>
              </View>
              <Text>
                A curious, wild news has arrived. Have a look at it to
                learn more about it.
              </Text>
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
  newsContainer: {
    width: "100%",
    height: "100%",
    padding: 20,
  },
  newsHeading: {
    fontSize: 24,
    fontWeight: "700",
  },
  news: {
    marginTop: 20,
    width: "100%",
    height: "100%",
    gap: 20,
  },
  new: {
    width: "100%",
    padding: 20,
    borderColor: "rgba(255, 255, 255, 0.1)",
    borderWidth: 1,
    borderRadius: 5,
  },
  newHead: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  newHeading: {
    fontWeight: "700",
  },
});
