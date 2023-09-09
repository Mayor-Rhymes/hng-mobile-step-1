import { View, Text, StyleSheet } from "react-native";


export default function Error() {

      return (

        <View style={styles.container}>
            <Text style={styles.errorText}>Error Loading The Page</Text>
        </View>
      )
}

const styles = StyleSheet.create({

   container: {
       flex: 1,
       backgroundColor: "#fff",
       alignItems: "center",
    //    justifyContent: "center",

   },


   errorText: {

    color: "red",
    fontSize: 30,

   }

})