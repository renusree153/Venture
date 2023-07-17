import { View, Text, StyleSheet} from "react-native";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "right",
        backgroundColor: 'blue'
      }}
    >
      <Text style = {styles.name}>Venture</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    name: {
      fontSize: 100,
    }
  })