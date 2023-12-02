import { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Modal,
  Image,
} from "react-native";

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
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputCantainer}>
        <Image
          source={require("../assets/images/goal.png")}
          style={styles.image}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Enter your Goal"
          onChangeText={goalInputHandler}
          value={goalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalhandler} color="#5e0acc" />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel} color="#f31282" />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputCantainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#311b6b",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",

    width: "100%",
    marginRight: 8,
    borderRadius: 10,
    padding: 6,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 16,
  },
  button: {
    width: "40%",
    marginHorizontal: 8,
  },
  image: {
    height: 100,
    width: 100,
    margin: 20,
  },
});
