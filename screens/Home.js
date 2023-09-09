import { View, Text, Button, StatusBar, Image, StyleSheet } from "react-native";
const image = require("../assets/images/my-image.jpeg");

export default function Home({ navigation }) {
  const handleNavigation = (screen) => {
    navigation.navigate(screen);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.profileName}>Olakunle Raheem (Mayor)</Text>

      <Image source={image} style={styles.image} />

      <Button
        style={styles.button}
        title="Open Github"
        onPress={() => handleNavigation("Github")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
    backgroundColor: "#faf0e6",
  },

  profileName: {
    color: "#0047ab",
    fontSize: 25,
  },

  image: {
    height: "25%",
    width: "50%",
    borderRadius: 100,
  },
});
