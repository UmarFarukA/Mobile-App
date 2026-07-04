import { StyleSheet, Text, TouchableOpacity } from "react-native";

function Button({
  title,
  onPress,
  backgroundColor = "#baeece",
  textColor = "#166534",
}) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor }]}
      onPress={onPress}
    >
      <Text style={[styles.buttonText, { color: textColor }]}>{title}</Text>
    </TouchableOpacity>
  );
}

export default Button;

const styles = StyleSheet.create({
  button: {
    padding: 16,
    borderRadius: 8,
    marginVertical: 5,
    width: "100%",
    alignItems: "center",
  },
  buttonText: {
    color: "#DCFCE7",
    fontSize: 16,
    fontWeight: "bold",
  },
});
