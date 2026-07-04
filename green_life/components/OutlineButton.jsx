import { StyleSheet, Text, TouchableOpacity } from "react-native";

function OutlineButton({ icon, title, onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      {icon}
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

export default OutlineButton;

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#166534",
    flexDirection: "row",
    gap: 10,
    marginVertical: 5,
    alignItems: "center",
    width: 150,
    justifyContent: "center",
  },
  buttonText: {
    color: "#4f5351",
    fontSize: 16,
    fontWeight: "bold",
  },
});
