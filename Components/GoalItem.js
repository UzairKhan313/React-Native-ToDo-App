import { StyleSheet, View, Text, Pressable } from "react-native";

export const GoalItem = (props) => {
  return (
    // To make  a Component pres able in react native we use Pressabel Component as wrapper
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#210644" }} // This is style is only for Android and IOS
        onPress={props.onDeleteHandler.bind(this, props.id)}
        style={({ pressed }) => pressed && styles.pressedItem} // This is Styling is For IOS
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    color: "white",
    padding: 8,
  },
});
