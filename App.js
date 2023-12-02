import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { useState } from "react";

export default function App() {
  const [goalText, setGoalText] = useState("");

  function goalInputHandler(enteredValue) {
    setGoalText(enteredValue);
  }
  function addGoalhanlder() {}

  return (
    <View style={styles.appContainer}>
      <View>
        <TextInput
          placholder="Enter your Goal"
          onChangeText={goalInputHandler}
        />
        <Button title="Add Goal" onPress={addGoalhanlder} />
      </View>
      <View>
        <Text>List of Goals...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 30,
    paddingHorizontal: 16,
  },
  inputCantainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBlockColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
  goalsContainer: {
    flex: 5,
  },
});
