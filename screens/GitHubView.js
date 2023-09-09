import { WebView } from "react-native-webview";
import Loading from "../components/Loading";
import Error from "../components/Error";

export default function GitHubView() {
  return (
    <WebView
      source={{ uri: "https://github.com/mayor-rhymes" }}
      style={{ flex: 1 }}
      startInLoadingState={true}
      renderLoading={() => <Loading />}
      renderError={() => <Error />}
    />
  );
}
