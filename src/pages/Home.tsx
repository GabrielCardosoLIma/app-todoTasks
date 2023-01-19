import React, { useState } from "react";
import { StyleSheet, View, Keyboard, TouchableWithoutFeedback } from "react-native";

import { Header } from "../components/Header";
import { Task, TasksList } from "../components/TasksList";
import { TodoInput } from "../components/TodoInput";
import { TasksCounter } from "../components/TasksCounter";
import { Message } from "../components/Message";

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const completes = tasks.filter((task) => {
    return task.done !== false;
  });

  function handleAddTask(newTaskTitle: string) {
    //TODO - add new task
    const newTask = {
      id: new Date().getTime(),
      title: newTaskTitle,
      done: false,
    };
    setTasks((oldTasks) => [...oldTasks, newTask]);
  }

  function handleToggleTaskDone(id: number) {
    //TODO - toggle task done if exists
    const updatedTasks = tasks.map((task) => ({ ...task }));
    // const updateTasks = [...tasks];

    const foundItem = updatedTasks.find((item) => item.id === id);
    if (!foundItem) return;

    foundItem.done = !foundItem.done;
    setTasks(updatedTasks);
  }

  function handleRemoveTask(id: number) {
    //TODO - remove task from state
    const updateTask = tasks.filter((task) => task.id !== id);

    setTasks(updateTask);
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Header />

        <TodoInput addTask={handleAddTask} />

        <TasksCounter
          tasksCounter={tasks.length}
          tasksConfirmed={completes.length}
        />

        {tasks.length !== 0 ? (
          <TasksList
            tasks={tasks}
            toggleTaskDone={handleToggleTaskDone}
            removeTask={handleRemoveTask}
          />
        ) : (
          <Message />
        )}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#272727",
  },
});
