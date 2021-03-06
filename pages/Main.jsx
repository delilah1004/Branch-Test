import React from "react";
import { getStatusBarHeight } from "react-native-status-bar-height";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Main() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <TouchableOpacity>
          <Text>main</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: getStatusBarHeight(),
    justifyContent: "center",
  },
  content: {
    alignItems: "center",
  },
});
