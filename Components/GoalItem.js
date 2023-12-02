import { StyleSheet, View, Text, Pressable } from "react-native";

export const GoalItem = (props) => {
  return (
    // To make  a Component pres able in react native we use Pressabel Component as wrapper
    <Pressable onPress={props.onDeleteHandler.bind(this, props.id)}>
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{props.text}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    color: "white",
  },
});
