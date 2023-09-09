import { View, Text, StyleSheet } from "react-native";

export default function Loading() {
  return (
    <View style={styles.container}>
      <Text style={{color: "black", fontSize: 30}}>Loading....</Text>
    </View>
  );
}


const styles = StyleSheet.create({

   container: {

      flex: 1,
      backgroundColor: "#fff",
    //   justifyContent: "center",
      alignItems: "center",

      
   },
      
});
