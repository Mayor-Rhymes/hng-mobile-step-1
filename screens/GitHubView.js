import { WebView } from "react-native-webview";
import Loading from "../components/Loading";
import Error from "../components/Error";
import { useEffect, useRef } from "react";
import { BackHandler } from "react-native";

export default function GitHubView() {
  const webViewRef = useRef(null);

  const handleBackButtonPress = () => {
    if (webViewRef.current && this.canGoBack) {
      webViewRef.current.goBack();
      return true;
    }
    return false;
  };

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", handleBackButtonPress);
    return () => {
      BackHandler.removeEventListener(
        "hardwareBackPress",
        handleBackButtonPress
      );
    };
  }, []);

  return (
    <WebView
      source={{ uri: "https://github.com/mayor-rhymes" }}
      style={{ flex: 1 }}
      ref={webViewRef}
      startInLoadingState={true}
      renderLoading={() => <Loading />}
      renderError={() => <Error />}
      onNavigationStateChange={(navState) => {
        // Keep track of going back navigation within component
        this.canGoBack = navState.canGoBack;
      }}
    />
  );
}
