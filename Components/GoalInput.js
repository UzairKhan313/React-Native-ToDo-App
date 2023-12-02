import { useState } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

export const GoalInput = (props) => {
  const [goalText, setGoalText] = useState("");

  function goalInputHandler(enteredValue) {
    setGoalText(enteredValue);
  }

  function addGoalhandler() {
    props.onAddGoalHandler(goalText);
    setGoalText("");
  }
  return (
    <View style={styles.inputCantainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Enter your Goal"
        onChangeText={goalInputHandler}
        value={goalText}
      />
      <Button title="Add Goal" onPress={addGoalhandler} />
    </View>
  );
};

const styles = StyleSheet.create({
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
});
