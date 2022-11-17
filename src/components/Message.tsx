import { View, StyleSheet, Text } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";

export function Message() {
  return (
    <View style={styles.container}>
      <Feather
        style={styles.icon}
        name="clipboard"
        size={100}
        color="#333333"
      />
      <View style={styles.alingText}>
        <Text style={styles.textBold}>
          Você ainda não tem tarefas cadastradas
        </Text>
        <Text style={styles.textRegular}>
          Crie tarefas e organize seus itens a fazer
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 50,
  },
  icon: {
    marginBottom: 18,
  },
  alingText: {
    flexDirection: "column",
  },
  textBold: {
    fontSize: 18,
    fontFamily: "Inter_700Bold",
    color: "#808080"
  },
  textRegular: {
    fontSize: 18,
    fontFamily: "Inter_400Regular",
    color: "#808080"
  }
});
