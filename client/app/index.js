import { StyleSheet, Text, View, Button, Alert } from "react-native";

export default function Page() {
  console.log("Hiiiiii");

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Hello, I Am Hassan</Text>
        <Text style={styles.subtitle}>WOWWW</Text>
        <Button style={{ backgroundColor: '#ff0000' }} title="Press me" onPress={() => Alert.alert('hi, i am an alert')}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
