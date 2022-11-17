import React from "react";
import {
  FlatList,
  Image,
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  FlatListProps,
} from "react-native";
import { Feather } from "@expo/vector-icons";
// import Icon from 'react-native-vector-icons/Feather';

export interface Task {
  id: number;
  title: string;
  done: boolean;
}

interface TasksListProps {
  tasks: Task[];
  toggleTaskDone: (id: number) => void;
  removeTask: (id: number) => void;
}

export function TasksList({
  tasks,
  toggleTaskDone,
  removeTask,
}: TasksListProps) {
  return (
    <FlatList
      data={tasks}
      keyExtractor={(item) => String(item.id)}
      contentContainerStyle={{ paddingBottom: 24 }}
      showsVerticalScrollIndicator={false}
      renderItem={({ item, index }) => {
        return (
          <View style={styles.container}>
            <View>
              <TouchableOpacity
                testID={`button-${index}`}
                activeOpacity={0.7}
                style={styles.taskButton}
                //TODO - use onPress (toggle task) prop
                onPress={() => toggleTaskDone(item.id)}
              >
                <View
                  testID={`marker-${index}`}
                  //TODO - use style prop
                  style={item.done ? styles.taskMarkerDone : styles.taskMarker}
                >
                  {item.done && <Feather name="check" size={12} color="#FFF" />}
                </View>

                <Text
                //TODO - use style prop
                style={item.done ? styles.taskTextDone : styles.taskText}
                >
                  {item.title}
                </Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              testID={`trash-${index}`}
              style={{ paddingHorizontal: 24 }}
              onPress={() => removeTask(item.id)}
            >
              <Image source={require("../assets/icons/trash/trash.png")} />
            </TouchableOpacity>
          </View>
        );
      }}
      style={{
        marginTop: 32,
      }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 24,
    marginBottom: 8,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#333333',
    borderRadius: 8
  },
  taskButton: {
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 15,
    marginBottom: 4,
    borderRadius: 99,
    flexDirection: "row",
    alignItems: "center",
  },
  taskMarker: {
    height: 18,
    width: 18,
    borderRadius: 99,
    borderWidth: 1,
    borderColor: "#4EA8DE",
    marginRight: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  taskText: {
    color: "#F2F2F2",
    fontFamily: "Inter_400Regular",
    fontSize: 16
  },
  taskMarkerDone: {
    height: 18,
    width: 18,
    borderRadius: 99,
    backgroundColor: "#5E60CE",
    marginRight: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  taskTextDone: {
    color: "#808080",
    textDecorationLine: "line-through",
    fontFamily: "Inter_400Regular",
    fontSize: 16
  },
});
