import { Text, View, StyleSheet } from "react-native";
import Colors from "../../Constants/colors";
function Title({ children }) {
  return <Text style={style.title}>{children}</Text>;
}
export default Title;

const style = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: Colors.accent500,
    borderColor: Colors.accent500,
    fontFamily: "open-sans",
  },
});
