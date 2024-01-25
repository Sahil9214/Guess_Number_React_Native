import { View, Button, Text, StyleSheet, Pressable } from "react-native";
import { useState } from "react";
import Colors from "../../Constants/colors";
function PrimaryButton({ children, onPress }) {
  const pressHandler = () => {};
  // [ arrray of styling help us to use both the styling same time]
  return (
    <View
      style={({ pressed }) =>
        pressed
          ? [styles.buttonOuterContainer, styles.pressed]
          : styles.buttonOuterContainer
      }
    >
      <Pressable
        style={styles.buttonInnerContainer}
        onPress={onPress}
        android_ripple={{ color: Colors.primary600 }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}
export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 20,
    margin: 4,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: Colors.primary500,
    borderRadius: 28,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 12,
    margin: 4,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    marginBottom: 10,
  },
  pressed: {
    opacity: 0.75,
  },
});
