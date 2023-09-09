import { WebView } from "react-native-webview";

export default function GitHubView() {
  return (
    <WebView
      originWhitelist={['*']}
      source={{ uri: "https://github.com/mayor-rhymes" }}
      style={{ flex: 1 }}
    />
  );
}
