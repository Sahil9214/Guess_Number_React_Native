import { View, TextInput, StyleSheet, Alert } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import { useEffect, useState } from "react";
import Colors from "../Constants/colors";
import GameOverScreen from "./GameOverScreen";
function StartGameScreen({ onPickNumber }) {
  const [enteredNumber, setEntereNumber] = useState("");

  function numberInputHandler(enteredText) {
    console.log("hello", enteredText);
    setEntereNumber(enteredText);
  }
  function resetInputHandler() {
    setEntereNumber("");
  }

  
  function confirmInputHanlder() {
    console.log("enterd", enteredNumber);
    const choseNumber = parseInt(enteredNumber);
    // isNaN check is this is a number
    if (isNaN(choseNumber) || choseNumber <= 0 || choseNumber > 99) {
      //alert
      Alert.alert(
        "Invalid Number",
        "Number has to be a number bewtween 1 and 99",
        [{ text: "Okay", style: "destructive", onPress: resetInputHandler }]
      );
      return;
    }
    onPickNumber(choseNumber);
  }
  return (
    <View style={styles.inputContainer}>
      <TextInput
        keyboardType="number-pad"
        autoCapitalize="none"
        style={styles.numberInput}
        maxLength={2}
        autoCorrect={false}
        value={enteredNumber}
        onChangeText={numberInputHandler}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={confirmInputHanlder}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
}
export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",

    marginHorizontal: 24,
    padding: 16,

    marginTop: 100,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    //shadow box
    //in android we use "elevation"
    elevation: 8,
    // for ios shadowColor,shadowOpactity,shadowColor,shadowOffset:{width:0,height:2}
  },
  numberInput: {
    height: 50,
    fontSize: 32,
    width: 50,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
