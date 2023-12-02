import { Button, StyleSheet, TextInput, View, FlatList } from "react-native";
import { useState } from "react";
import { GoalItem } from "./Components/GoalItem";
import { GoalInput } from "./Components/GoalInput";

export default function App() {
  const [goals, setGoals] = useState([]);

  function addGoalhanlder(enteredGoalText) {
    setGoals((prevGoals) => [
      ...prevGoals,
      { text: enteredGoalText, key: Math.random().toString() },
    ]);
  }
  function deleteGoalHanlder(id) {
    setGoals((prevGoals) => {
      return prevGoals.filter((goal) => goal.key !== id);
    });
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoalHandler={addGoalhanlder} />
      <View style={styles.goalsContainer}>
        <FlatList
          data={goals}
          renderItem={(itemData) => {
            return (
              <GoalItem
                text={itemData.item.text}
                id={itemData.item.key}
                onDeleteHandler={deleteGoalHanlder}
              />
            );
          }}
          alwaysBounceVertical={false}
        />
        {/* Flast list render only those item which render firstly on to the screen  not more it work like map method */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5,
  },
});
