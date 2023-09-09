import { WebView } from "react-native-webview";
import { StatusBar } from "expo-status-bar";

export default function GitHubView() {
  return (
    <WebView
      source={{ uri: "http://github.com/mayor-rhymes" }}
      style={{ flex: 1 }}
    />
  );
}
