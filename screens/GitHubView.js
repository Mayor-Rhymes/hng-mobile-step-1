import { WebView } from "react-native-webview";

export default function GitHubView() {
  return (
    <WebView
      source={{ uri: "http://github.com/mayor-rhymes" }}
      style={{ flex: 1 }}
    />
  );
}
